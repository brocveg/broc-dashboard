"use client";
import { formatDistanceToNow } from "date-fns";
import { Clock, CheckCircle2, Plus, ArrowRight, FileText, MessageSquare } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "task_moved",
    user: "Broc",
    action: "moved",
    target: "Review GAS triggers",
    from: "Todo",
    to: "In Progress",
    time: new Date(Date.now() - 1000 * 60 * 15), // 15 min ago
    icon: ArrowRight,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    id: 2,
    type: "task_completed",
    user: "Nano",
    action: "completed",
    target: "Setup GitHub repo",
    time: new Date(Date.now() - 1000 * 60 * 45), // 45 min ago
    icon: CheckCircle2,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    id: 3,
    type: "project_created",
    user: "Broc",
    action: "created",
    target: "Dashboard V2",
    time: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    icon: Plus,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    id: 4,
    type: "document_added",
    user: "Broc",
    action: "added",
    target: "Migration Guide",
    to: "Docs",
    time: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
    icon: FileText,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
  {
    id: 5,
    type: "comment",
    user: "Nano",
    action: "commented on",
    target: "Gmail Checker",
    time: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    icon: MessageSquare,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
];

const upcomingEvents = [
  { title: "Email Check", time: "12:00 PM", type: "auto" },
  { title: "Standup", time: "Tomorrow 9:00 AM", type: "meeting" },
  { title: "Email Check", time: "9:00 PM", type: "auto" },
];

export function RightPanel() {
  return (
    <aside className="w-[280px] min-w-[280px] h-full bg-[#111118] border-l border-[#2a2a3a] flex flex-col overflow-hidden">
      {/* Live Activity Header */}
      <div className="p-4 border-b border-[#2a2a3a]">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Live Activity</h3>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] text-emerald-400">Live</span>
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex gap-3 group">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-lg ${activity.bgColor} flex items-center justify-center shrink-0`}>
                    <Icon size={14} className={activity.color} />
                  </div>
                  <div className="w-px h-full bg-[#2a2a3a] my-2 group-last:hidden"></div>
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-xs text-white leading-relaxed">
                    <span className="font-medium text-[#6366f1]">{activity.user}</span>
                    {" "}{activity.action}{" "}
                    <span className="font-medium text-white">{activity.target}</span>
                    {activity.from && activity.to && (
                      <span className="text-[#5a5a6a]"> from {activity.from} to {activity.to}</span>
                    )}
                    {activity.to && !activity.from && (
                      <span className="text-[#5a5a6a]"> to {activity.to}</span>
                    )}
                  </p>
                  <p className="text-[10px] text-[#5a5a6a] mt-1">
                    {formatDistanceToNow(activity.time, { addSuffix: true })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="p-4 border-t border-[#2a2a3a]">
        <h3 className="text-sm font-semibold text-white mb-3">Upcoming</h3>
        <div className="space-y-2">
          {upcomingEvents.map((event, i) => (
            <div 
              key={i}
              className="flex items-center gap-3 p-2.5 rounded-lg bg-[#16161f] border border-[#2a2a3a] hover:border-[#3a3a4a] transition-colors cursor-pointer"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                event.type === "auto" ? "bg-purple-500/10" : "bg-amber-500/10"
              }`}>
                <Clock size={14} className={event.type === "auto" ? "text-purple-400" : "text-amber-400"} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-white truncate">{event.title}</p>
                <p className="text-[10px] text-[#5a5a6a]">{event.time}</p>
              </div>
              {event.type === "auto" && (
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400">Auto</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
