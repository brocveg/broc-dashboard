"use client";
import { useState } from "react";
import tasksData from "@/data/tasks.json";
import { Plus, MoreHorizontal, Calendar, MessageSquare, Paperclip } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const COLUMNS = [
  { id: "backlog", label: "Backlog", color: "#6b7280", count: 0 },
  { id: "todo", label: "To Do", color: "#6366f1", count: 0 },
  { id: "in-progress", label: "In Progress", color: "#f59e0b", count: 0 },
  { id: "review", label: "Review", color: "#8b5cf6", count: 0 },
  { id: "done", label: "Done", color: "#10b981", count: 0 },
];

const AVATARS: Record<string, string> = {
  "Broc": "🥦",
  "Nano": "👤",
};

const PRIORITY_STYLES = {
  high: { bg: "bg-red-500/10", text: "text-red-400", label: "High" },
  medium: { bg: "bg-amber-500/10", text: "text-amber-400", label: "Medium" },
  low: { bg: "bg-gray-500/10", text: "text-gray-400", label: "Low" },
};

export default function TasksPage() {
  const [tasks] = useState(tasksData);
  
  // Count tasks per column
  const columnCounts = COLUMNS.map(col => ({
    ...col,
    count: tasks.filter(t => t.status === col.id).length
  }));

  return (
    <div className="h-full flex flex-col">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Tasks</h2>
          <p className="text-sm text-[#5a5a6a] mt-1">Manage and track your team's work</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#6366f1] hover:bg-[#5558e0] text-white text-sm font-medium rounded-xl transition-colors shadow-lg shadow-indigo-500/20">
          <Plus size={16} />
          New Task
        </button>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto">
        <div className="flex gap-4 h-full min-w-max pb-2">
          {columnCounts.map((column) => {
            const columnTasks = tasks.filter((t) => t.status === column.id);
            
            return (
              <div key={column.id} className="w-[300px] flex flex-col">
                {/* Column Header */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: column.color }}
                    />
                    <span className="text-sm font-semibold text-white">{column.label}</span>
                    <span className="text-xs text-[#5a5a6a] bg-[#1a1a24] px-2 py-0.5 rounded-full">
                      {column.count}
                    </span>
                  </div>
                  <button className="p-1.5 hover:bg-[#1a1a24] rounded-lg transition-colors">
                    <MoreHorizontal size={16} className="text-[#5a5a6a]" />
                  </button>
                </div>

                {/* Column Content */}
                <div className="flex-1 bg-[#16161f]/50 rounded-2xl border border-[#2a2a3a]/50 p-2 space-y-2 overflow-y-auto">
                  {columnTasks.map((task) => {
                    const priority = PRIORITY_STYLES[task.priority as keyof typeof PRIORITY_STYLES];
                    const assigneeAvatar = AVATARS[task.assignee] || "👤";
                    
                    return (
                      <div
                        key={task.id}
                        className="group bg-[#1a1a24] rounded-xl p-4 border border-[#2a2a3a] hover:border-[#3a3a4a] card-hover cursor-pointer"
                      >
                        {/* Priority Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-[10px] font-medium px-2 py-1 rounded-lg ${priority.bg} ${priority.text}`}>
                            {priority.label}
                          </span>
                          <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-[#2a2a3a] rounded-lg transition-all">
                            <MoreHorizontal size={14} className="text-[#5a5a6a]" />
                          </button>
                        </div>

                        {/* Task Title */}
                        <h4 className="text-sm font-medium text-white mb-2 leading-snug">
                          {task.title}
                        </h4>

                        {/* Task Meta */}
                        <div className="flex items-center gap-3 text-[11px] text-[#5a5a6a] mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}
                          </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          <span className="text-[10px] px-2 py-1 rounded-lg bg-[#6366f1]/10 text-[#6366f1]">
                            {task.project}
                          </span>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-3 border-t border-[#2a2a3a]">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-xs">
                              {assigneeAvatar}
                            </div>
                            <span className="text-[11px] text-[#8b8b9a]">{task.assignee}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#5a5a6a]">
                            {task.comments > 0 && (
                              <span className="flex items-center gap-1 text-[11px]">
                                <MessageSquare size={12} />
                                {task.comments}
                              </span>
                            )}
                            {task.attachments > 0 && (
                              <span className="flex items-center gap-1 text-[11px]">
                                <Paperclip size={12} />
                                {task.attachments}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Add Task Button */}
                  <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-[#2a2a3a] text-[#5a5a6a] hover:text-white hover:border-[#5a5a6a] hover:bg-[#1a1a24] transition-all text-sm">
                    <Plus size={16} />
                    Add Task
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
