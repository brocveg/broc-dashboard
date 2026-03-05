"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckSquare, Calendar, FolderOpen, Brain, FileText, Users } from "lucide-react";

const navItems = [
  { href: "/tasks", icon: CheckSquare, label: "Tasks" },
  { href: "/calendar", icon: Calendar, label: "Calendar" },
  { href: "/projects", icon: FolderOpen, label: "Projects" },
  { href: "/memory", icon: Brain, label: "Memory" },
  { href: "/docs", icon: FileText, label: "Docs" },
  { href: "/team", icon: Users, label: "Team" },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-[220px] min-w-[220px] h-screen bg-[#111111] border-r border-[#262626] flex flex-col">
      <div className="px-4 py-4 border-b border-[#262626]">
        <div className="flex items-center gap-2">
          <span className="text-xl">🥦</span>
          <div>
            <p className="text-sm font-semibold text-white">Mission Control</p>
            <p className="text-xs text-[#4a4a4a]">Broc & Nano</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-2 py-3 space-y-0.5">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                active
                  ? "bg-[#1e1e2e] text-white"
                  : "text-[#8b8b8b] hover:text-white hover:bg-[#1a1a1a]"
              }`}
            >
              <Icon size={15} className={active ? "text-[#5e6ad2]" : ""} />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="px-4 py-3 border-t border-[#262626]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4cb782] animate-pulse" />
          <span className="text-xs text-[#4a4a4a]">Broc active</span>
        </div>
      </div>
    </aside>
  );
}
