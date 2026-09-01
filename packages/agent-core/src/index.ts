import type { LLMMessage, LLMProvider, ModelRouter } from '@raic/llm-core';

export type AgentEvent =
  | { type: 'task.started'; taskId: string }
  | { type: 'agent.thinking'; summary: string }
  | { type: 'tool.started'; callId: string; tool: string; input: unknown }
  | { type: 'tool.finished'; callId: string; output: unknown; success: boolean }
  | { type: 'approval.required'; approvalId: string; action: string; reason: string }
  | { type: 'patch.created'; files: string[] }
  | { type: 'verification.started'; command: string }
  | { type: 'verification.finished'; command: string; success: boolean }
  | { type: 'task.completed'; taskId: string; success: boolean };

export interface AgentContext {
  taskId: string;
  messages: LLMMessage[];
  repositoryPath: string;
}

export interface AgentTool {
  name: string;
  description: string;
  execute(input: unknown, context: AgentContext): Promise<unknown>;
}

export interface AgentRuntimeOptions {
  provider: LLMProvider;
  router: ModelRouter;
  tools: AgentTool[];
  maxIterations?: number;
}

export interface AgentRuntime {
  run(context: AgentContext): AsyncIterable<AgentEvent>;
}
