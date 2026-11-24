/**
 * 通过沙箱内的 MCP HTTP 网关调用 WorkBuddy 工具。
 * 端点对本沙箱内的进程开放，认证由网关层自动处理。
 */

const MCP_URL =
  process.env.WB_MCP_URL ||
  "http://wb-issues.agent-gateway.auth-proxy.local/_internal/issues/mcp";

export async function callMcp<T = unknown>(
  name: string,
  args: Record<string, unknown>,
): Promise<T> {
  const response = await fetch(MCP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: Date.now(),
      method: "tools/call",
      params: { name, arguments: args },
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`MCP 网关返回 ${response.status}`);
  }

  const payload = (await response.json()) as {
    error?: { message?: string };
    result?: { content?: { type: string; text: string }[] };
  };

  if (payload.error) {
    throw new Error(payload.error.message || "MCP 调用失败");
  }

  const text = payload.result?.content?.find((item) => item.type === "text")?.text;
  if (!text) {
    throw new Error("MCP 返回内容为空");
  }

  try {
    return JSON.parse(text) as T;
  } catch {
    return text as T;
  }
}
