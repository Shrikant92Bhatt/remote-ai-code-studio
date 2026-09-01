export interface CommandResult {
  exitCode: number;
  stdout: string;
  stderr: string;
}

export interface Workspace {
  readonly id: string;
  readonly root: string;
  readFile(path: string): Promise<string>;
  writeFile(path: string, content: string): Promise<void>;
  execute(command: string, args?: string[], options?: { timeoutMs?: number }): Promise<CommandResult>;
  destroy(): Promise<void>;
}

export interface WorkspaceManager {
  create(input: { repositoryUrl?: string; branch?: string }): Promise<Workspace>;
  get(id: string): Promise<Workspace | undefined>;
}
