import { Brain, Search } from "lucide-react";

const MEMORY_ENTRIES = [
  {
    date: "2026-03-04",
    dayLabel: "Today — Wednesday, March 4",
    events: [
      { type: "milestone", text: "🎉 Mission Control Dashboard migration to GitHub Pages started. Public repo broc-dashboard created." },
      { type: "decision",  text: "Decided on public repo broc-dashboard for static HTML. broc-workspace remains private for sensitive data." },
      { type: "conversation", text: "Discussed Pinchtab — browser automation tool. Noted prompt injection risks with web-capable agents." },
      { type: "conversation", text: "Explored photo/video editing capabilities: ImageMagick ready, FFmpeg pending install, RAW support via ImageMagick." },
      { type: "decision",  text: "Subagents: can spawn today with current config. Specialized agents need additional OpenClaw configuration." },
    ],
  },
  {
    date: "2026-03-02",
    dayLabel: "Sunday, March 2",
    events: [
      { type: "milestone", text: "🎉 Gmail Checker fully operational — GAS deployed, 2 daily triggers configured (12pm & 9pm CR), manual trigger working." },
      { type: "decision",  text: "NOT marking emails as read until system is stable and confirmed." },
      { type: "decision",  text: "Pragmatic validation approach over strict TDD for GAS. Checkpoint-based validation instead." },
      { type: "task",      text: "GitHub repo (broc-workspace) created. SSH key configured. All workspace files synced." },
      { type: "conversation", text: "Explored GAS vs Pub/Sub vs IFTTT for Gmail integration. Chose GAS: free, no GCP needed, sufficient for use case." },
    ],
  },
  {
    date: "2026-03-01",
    dayLabel: "Saturday, March 1",
    events: [
      { type: "milestone",   text: "🥦 Broc born. First session with Nano." },
      { type: "decision",    text: "Name: Broc (from broccoli). Nano calls me 'Brócoli' for rigor mode; I call Nano 'Ale' when something needs attention." },
      { type: "decision",    text: "Core personality: extremely intelligent but humble. Reasonable doubt is a feature, not a bug." },
      { type: "task",        text: "SOUL.md, IDENTITY.md, USER.md, AGENTS.md all configured. BOOTSTRAP.md deleted." },
    ],
  },
];

const TYPE_CONFIG: Record<string, { color: string; label: string }> = {
  milestone:    { color: "#4cb782", label: "Milestone" },
  decision:     { color: "#5e6ad2", label: "Decision" },
  conversation: { color: "#8b8b8b", label: "Context" },
  task:         { color: "#f2c94c", label: "Task" },
};

export default function MemoryPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4 border-b border-[#262626] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain size={15} className="text-[#5e6ad2]" />
          <div>
            <h1 className="text-base font-semibold text-white">Memory</h1>
            <p className="text-xs text-[#4a4a4a] mt-0.5">Conversation history & key decisions</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#161616] border border-[#262626] rounded-md px-3 py-1.5">
          <Search size={12} className="text-[#4a4a4a]" />
          <input type="text" placeholder="Search memory..." className="bg-transparent text-xs text-white placeholder-[#4a4a4a] outline-none w-40" />
        </div>
      </div>
      <div className="flex-1 overflow-auto p-6 max-w-2xl space-y-6">
        {MEMORY_ENTRIES.map((entry) => (
          <div key={entry.date}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold text-white">{entry.dayLabel}</span>
              <div className="flex-1 h-px bg-[#262626]" />
            </div>
            <div className="space-y-2">
              {entry.events.map((event, i) => {
                const config = TYPE_CONFIG[event.type] || TYPE_CONFIG.conversation;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: config.color }} />
                    <div className="flex-1 bg-[#161616] border border-[#262626] rounded-md px-3 py-2 hover:border-[#363636] transition-colors">
                      <span className="text-[10px] font-medium block mb-1" style={{ color: config.color }}>{config.label}</span>
                      <p className="text-sm text-[#c0c0c0] leading-relaxed">{event.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
