export type PermissionDecision = 'allow' | 'confirm' | 'deny';

export type ToolAction =
  | 'filesystem.read'
  | 'filesystem.write'
  | 'terminal.read'
  | 'terminal.execute'
  | 'terminal.install'
  | 'git.status'
  | 'git.diff'
  | 'git.commit'
  | 'git.push'
  | 'deploy.production';

const defaults: Record<ToolAction, PermissionDecision> = {
  'filesystem.read': 'allow',
  'filesystem.write': 'confirm',
  'terminal.read': 'allow',
  'terminal.execute': 'confirm',
  'terminal.install': 'confirm',
  'git.status': 'allow',
  'git.diff': 'allow',
  'git.commit': 'confirm',
  'git.push': 'confirm',
  'deploy.production': 'deny',
};

export class PermissionPolicy {
  decide(action: ToolAction): PermissionDecision {
    return defaults[action];
  }
}
