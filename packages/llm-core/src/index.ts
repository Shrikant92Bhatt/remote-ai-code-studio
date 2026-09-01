export type ModelCapability = 'chat' | 'streaming' | 'tools' | 'vision' | 'reasoning' | 'large-context';

export interface LLMMessage {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
  toolCallId?: string;
}

export interface LLMToolDefinition {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
}

export interface LLMRequest {
  model: string;
  messages: LLMMessage[];
  tools?: LLMToolDefinition[];
  temperature?: number;
  maxTokens?: number;
}

export interface LLMResponse {
  id: string;
  text: string;
  finishReason: 'stop' | 'tool-call' | 'length' | 'error';
  usage?: { inputTokens: number; outputTokens: number };
}

export type LLMEvent =
  | { type: 'text-delta'; text: string }
  | { type: 'tool-call'; name: string; arguments: string; callId: string }
  | { type: 'usage'; inputTokens: number; outputTokens: number }
  | { type: 'done'; response: LLMResponse }
  | { type: 'error'; message: string };

export interface LLMProvider {
  readonly id: string;
  capabilities(): readonly ModelCapability[];
  complete(request: LLMRequest): Promise<LLMResponse>;
  stream(request: LLMRequest): AsyncIterable<LLMEvent>;
}

export interface ModelRoute {
  provider: string;
  model: string;
  reason: string;
}

export interface ModelRouter {
  route(input: { task: string; requiredCapabilities?: ModelCapability[]; preferredProvider?: string }): Promise<ModelRoute>;
}
