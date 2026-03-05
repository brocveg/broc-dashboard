"use client";
import { useState } from "react";
import tasksData from "@/data/tasks.json";
import { Plus, Circle, Clock, CheckCircle2, Eye, ArrowUpRight } from "lucide-react";

type Task = typeof tasksData[0];

const COLUMNS = [
  { id: "backlog",     label: "Backlog",      color: "#4a4a4a", icon: Circle },
  { id: "todo",        label: "Todo",         color: "#5e6ad2", icon: Circle },
  { id: "in-progress", label: "In Progress",  color: "#f2c94c", icon: Clock },
  { id: "review",      label: "Review",       color: "#a855f7", icon: Eye },
  { id: "done",        label: "Done",         color: "#4cb782", icon: CheckCircle2 },
];

const PRIORITY_COLOR: Record<string, string> = {
  high: "#eb5757", medium: "#f2c94c", low: "#4a4a4a",
};

export default function TasksPage() {
  const [tasks] = useState<Task[]>(tasksData);
  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4 border-b border-[#262626] flex items-center justify-between">
        <div>
          <h1 className="text-base font-semibold text-white">Tasks</h1>
          <p className="text-xs text-[#4a4a4a] mt-0.5">{tasks.length} tasks total</p>
        </div>
        <button className="flex items-center gap-1.5 text-xs bg-[#5e6ad2] hover:bg-[#6d78d9] text-white px-3 py-1.5 rounded-md transition-colors">
          <Plus size={13} />
          New task
        </button>
      </div>
      <div className="flex-1 overflow-x-auto p-4">
        <div className="flex gap-3 h-full min-w-max">
          {COLUMNS.map((col) => {
            const colTasks = tasks.filter((t) => t.status === col.id);
            const Icon = col.icon;
            return (
              <div key={col.id} className="w-[260px] flex flex-col gap-2">
                <div className="flex items-center gap-2 px-1 mb-1">
                  <Icon size={13} style={{ color: col.color }} />
                  <span className="text-xs font-medium text-[#8b8b8b] uppercase tracking-wider">{col.label}</span>
                  <span className="ml-auto text-xs text-[#4a4a4a] bg-[#1a1a1a] px-1.5 py-0.5 rounded">{colTasks.length}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {colTasks.map((task) => (
                    <div
                      key={task.id}
                      className="bg-[#161616] border border-[#262626] rounded-md p-3 hover:border-[#363636] transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm text-white leading-snug">{task.title}</p>
                        <ArrowUpRight size={12} className="text-[#4a4a4a] group-hover:text-[#8b8b8b] mt-0.5 shrink-0 transition-colors" />
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ backgroundColor: PRIORITY_COLOR[task.priority] + "22", color: PRIORITY_COLOR[task.priority] }}>
                          {task.priority}
                        </span>
                        <span className="text-[10px] text-[#4a4a4a] truncate">{task.project}</span>
                        {task.assignee === "Nano" && (
                          <span className="ml-auto text-[10px] text-[#5e6ad2]">👤 Nano</span>
                        )}
                      </div>
                    </div>
                  ))}
                  <button className="flex items-center gap-1.5 text-xs text-[#4a4a4a] hover:text-[#8b8b8b] px-2 py-1.5 rounded-md hover:bg-[#161616] transition-colors w-full">
                    <Plus size={12} />
                    Add task
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
