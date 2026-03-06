import projectsData from "@/data/projects.json";
import { Calendar, CheckCircle2, Clock, Users, TrendingUp, MoreHorizontal } from "lucide-react";
import { format } from "date-fns";

const STATUS_STYLES = {
  active: { bg: "bg-emerald-500/10", text: "text-emerald-400", label: "Active", dot: "bg-emerald-400" },
  "in-progress": { bg: "bg-amber-500/10", text: "text-amber-400", label: "In Progress", dot: "bg-amber-400" },
  complete: { bg: "bg-blue-500/10", text: "text-blue-400", label: "Complete", dot: "bg-blue-400" },
  planned: { bg: "bg-gray-500/10", text: "text-gray-400", label: "Planned", dot: "bg-gray-400" },
};

export default function ProjectsPage() {
  return (
    <div className="h-full flex flex-col">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Projects</h2>
          <p className="text-sm text-[#5a5a6a] mt-1">Track progress across all your initiatives</p>
        </div>
        <button className="px-4 py-2.5 bg-[#6366f1] hover:bg-[#5558e0] text-white text-sm font-medium rounded-xl transition-colors shadow-lg shadow-indigo-500/20">
          + New Project
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-y-auto pb-4">
        {projectsData.map((project) => {
          const status = STATUS_STYLES[project.status as keyof typeof STATUS_STYLES] || STATUS_STYLES.planned;
          
          return (
            <div
              key={project.id}
              className="group bg-[#16161f] rounded-2xl p-5 border border-[#2a2a3a] hover:border-[#3a3a4a] card-hover"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ 
                      backgroundColor: `${project.color}15`,
                    }}
                  >
                    {project.emoji}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-[#6366f1] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-[#5a5a6a]">{project.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full ${status.bg} ${status.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`}></span>
                    {status.label}
                  </span>
                  <button className="p-1.5 hover:bg-[#2a2a3a] rounded-lg transition-colors">
                    <MoreHorizontal size={16} className="text-[#5a5a6a]" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#8b8b9a] mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#5a5a6a]">Progress</span>
                  <span className="text-xs font-medium" style={{ color: project.color }}>
                    {project.progress}%
                  </span>
                </div>
                <div className="h-2 bg-[#1a1a24] rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${project.progress}%`,
                      backgroundColor: project.color 
                    }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#2a2a3a]">
                <div className="flex items-center gap-4 text-[#5a5a6a]">
                  <span className="flex items-center gap-1.5 text-xs">
                    <Calendar size={14} />
                    {format(new Date(project.startDate), "MMM d")}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs">
                    <CheckCircle2 size={14} />
                    {project.completedTasks || 0}/{project.totalTasks || 0} tasks
                  </span>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].slice(0, project.members || 1).map((i) => (
                    <div 
                      key={i}
                      className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-[10px] text-white border-2 border-[#16161f]"
                    >
                      {i === 1 ? "🥦" : i === 2 ? "👤" : "🤖"}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
