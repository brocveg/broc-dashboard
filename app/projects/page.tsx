import projectsData from "@/data/projects.json";
import { Tag } from "lucide-react";

const STATUS_CONFIG: Record<string, { label: string; color: string; bg: string }> = {
  active:        { label: "Active",       color: "#4cb782", bg: "#4cb78222" },
  "in-progress": { label: "In Progress",  color: "#f2c94c", bg: "#f2c94c22" },
  complete:      { label: "Complete",     color: "#5e6ad2", bg: "#5e6ad222" },
  planned:       { label: "Planned",      color: "#4a4a4a", bg: "#4a4a4a22" },
};

export default function ProjectsPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4 border-b border-[#262626]">
        <h1 className="text-base font-semibold text-white">Projects</h1>
        <p className="text-xs text-[#4a4a4a] mt-0.5">{projectsData.length} projects</p>
      </div>
      <div className="p-6 grid grid-cols-1 gap-3 max-w-3xl">
        {projectsData.map((project) => {
          const status = STATUS_CONFIG[project.status] || STATUS_CONFIG.planned;
          return (
            <div key={project.id} className="bg-[#161616] border border-[#262626] rounded-md p-4 hover:border-[#363636] transition-colors cursor-pointer">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: project.color }} />
                <h3 className="text-sm font-semibold text-white">{project.name}</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ color: status.color, backgroundColor: status.bg }}>{status.label}</span>
                <span className="text-xs text-[#4a4a4a] ml-auto">{project.category}</span>
              </div>
              <p className="text-xs text-[#8b8b8b] leading-relaxed mb-3">{project.description}</p>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-[#4a4a4a]">Progress</span>
                    <span className="text-[10px] font-medium" style={{ color: project.color }}>{project.progress}%</span>
                  </div>
                  <div className="h-1 bg-[#262626] rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${project.progress}%`, backgroundColor: project.color }} />
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-[10px] text-[#4a4a4a] bg-[#1a1a1a] px-1.5 py-0.5 rounded">
                      <Tag size={8} />{tag}
                    </span>
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
