export type Cabinet = 'sudo-hero' | 'wifi-wizards' | 'honkers-hackers' | 'skognet-syndicate';

export const CABINETS: Cabinet[] = ['sudo-hero', 'wifi-wizards', 'honkers-hackers', 'skognet-syndicate'];

export type AgentStatus = 'ok' | 'run' | 'idle' | 'fail';

export interface Agent {
  name: string;
  glyph: string;
  role: string;
  status: AgentStatus;
  note: string;
  task: string;
  /** Context fill, 0–10 segments. */
  context: number;
}

export interface Readout {
  label: string;
  value: string;
  tone?: 'primary' | 'green';
}

export type QuestState = 'done' | 'active' | 'locked';

export interface Quest {
  title: string;
  state: QuestState;
  progress: number;
  meta: string;
}

export const commander = {
  name: 'NELSON',
  rank: 'ADMIRAL',
  initial: 'N',
  summary: 'Orchestrating 5 agents and 12 polecats',
  hp: { value: 4, max: 5 },
  context: { value: 7, max: 10 },
};

export const readouts: Readout[] = [
  { label: 'ACTIVE AGENTS', value: '05/06', tone: 'primary' },
  { label: 'POLECATS AFLOAT', value: '12', tone: 'primary' },
  { label: 'COMMITS TODAY', value: '000,184', tone: 'primary' },
  { label: 'DIFFS CLEAN', value: 'S+', tone: 'green' },
];

export const agents: Agent[] = [
  { name: 'CLAUDE', glyph: 'C', role: 'LORE KEEPER', status: 'run', note: 'Drafting the KRONSCH chapter for the lore archive.', task: 'lore/02-kronsch.md', context: 8 },
  { name: 'LETTA', glyph: 'L', role: 'MEMORY COORDINATOR', status: 'ok', note: 'Layer 2 synced; waiting on the next dream cycle.', task: 'memory/layer-2 · sync', context: 5 },
  { name: 'DOT', glyph: 'D', role: 'DOTFILES · FIRST HAND', status: 'ok', note: 'Ensured state across config; no drift found.', task: 'ensure_state ~/.config', context: 3 },
  { name: 'AMY', glyph: 'A', role: 'BLOG', status: 'run', note: 'Writing a fiery take on subtractive design.', task: 'blog/draft-0412.md', context: 6 },
  { name: 'GOOSE', glyph: 'G', role: 'MOOD ORACLE', status: 'idle', note: 'Holding until its context resets.', task: 'oracle · standby', context: 10 },
  { name: 'POLECAT-07', glyph: 'P', role: 'EPHEMERAL WORKER', status: 'fail', note: 'Test 31 failed on nested symbol parsing.', task: 'skogparse/test #31', context: 2 },
];

export const signals: string[] = [
  'Signal: three polecats launched on skogparse tests.',
  'Hold: Goose idles until its context resets.',
  'Engage: merge lore/02 once Claude reports ✓.',
];

export const diffLog: string[] = [
  'a41f9c2 claude: lore/02 kronsch draft',
  'e07b31d letta: memory layer 2 sync',
  '9c2d004 dot: ensure_state ~/.config',
  '1fe8a77 polecat-07: skogparse #31 ✕',
  '5b6c19e amy: blog draft 0412',
  'd3390af nelson: dispatch 3 polecats',
];

export const quests: Quest[] = [
  { title: 'BOOTSTRAP FLEET', state: 'done', progress: 100, meta: 'uv → ansible → chezmoi · DONE' },
  { title: 'SKOGPARSE V2', state: 'active', progress: 62, meta: '31/50 TESTS · 62%' },
  { title: 'LETTA LAYER 3', state: 'locked', progress: 0, meta: 'LOCKED · NEEDS SKOGPARSE V2' },
];
