"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  CheckSquare, Calendar, FolderOpen, Brain, FileText, Users,
  Zap, LayoutDashboard, Settings, Bell, Star, Briefcase
} from "lucide-react";

const mainNavItems = [
  { href: "/", icon: LayoutDashboard, label: "Overview", badge: null },
  { href: "/tasks", icon: CheckSquare, label: "Tasks", badge: 3 },
  { href: "/projects", icon: FolderOpen, label: "Projects", badge: null },
  { href: "/calendar", icon: Calendar, label: "Calendar", badge: 2 },
];

const workNavItems = [
  { href: "/agents", icon: Zap, label: "Agents", badge: null },
  { href: "/memory", icon: Brain, label: "Memory", badge: null },
  { href: "/docs", icon: FileText, label: "Docs", badge: 5 },
  { href: "/team", icon: Users, label: "Team", badge: null },
];

const bottomNavItems = [
  { href: "/approvals", icon: Briefcase, label: "Approvals", badge: 1 },
  { href: "/notifications", icon: Bell, label: "Notifications", badge: 4 },
  { href: "/settings", icon: Settings, label: "Settings", badge: null },
];

function NavItem({ href, icon: Icon, label, badge, active }: { 
  href: string; 
  icon: any; 
  label: string; 
  badge: number | null;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group ${
        active
          ? "bg-[#6366f1]/10 text-white border border-[#6366f1]/30"
          : "text-[#8b8b9a] hover:text-white hover:bg-[#1a1a24]"
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon size={16} className={active ? "text-[#6366f1]" : "group-hover:text-white"} />
        <span className="font-medium">{label}</span>
      </div>
      {badge && (
        <span className="text-[10px] font-semibold bg-[#ef4444] text-white px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
          {badge}
        </span>
      )}
    </Link>
  );
}

function NavSection({ title, items }: { title: string; items: any[] }) {
  const pathname = usePathname();
  
  return (
    <div className="mb-6">
      <p className="text-[10px] font-semibold text-[#5a5a6a] uppercase tracking-wider mb-2 px-3">
        {title}
      </p>
      <div className="space-y-0.5">
        {items.map((item) => (
          <NavItem
            key={item.href}
            {...item}
            active={pathname === item.href || pathname.startsWith(item.href + "/")}
          />
        ))}
      </div>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="w-[240px] min-w-[240px] h-screen bg-[#111118] border-r border-[#2a2a3a] flex flex-col overflow-hidden">
      {/* Logo */}
      <div className="p-4 border-b border-[#2a2a3a]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center text-xl shadow-lg shadow-purple-500/20">
            🥦
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Broc & Nano</p>
            <p className="text-[10px] text-[#5a5a6a]">Mission Control</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <NavSection title="Main" items={mainNavItems} />
        <NavSection title="Workspace" items={workNavItems} />
        
        {/* Favorites */}
        <div className="mb-6">
          <p className="text-[10px] font-semibold text-[#5a5a6a] uppercase tracking-wider mb-2 px-3">
            Favorites
          </p>
          <div className="space-y-0.5">
            <Link 
              href="/projects/gmail-checker"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[#8b8b9a] hover:text-white hover:bg-[#1a1a24] transition-all"
            >
              <Star size={14} className="text-amber-400" />
              <span>Gmail Checker</span>
            </Link>
            <Link 
              href="/projects/dashboard"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[#8b8b9a] hover:text-white hover:bg-[#1a1a24] transition-all"
            >
              <Star size={14} className="text-amber-400" />
              <span>Dashboard V2</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Bottom nav */}
      <div className="p-3 border-t border-[#2a2a3a] space-y-0.5">
        <NavSection title="" items={bottomNavItems} />
      </div>

      {/* User */}
      <div className="p-3 border-t border-[#2a2a3a]">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#16161f] border border-[#2a2a3a]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-sm font-semibold">
            👤
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Nano</p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] text-emerald-400">Online</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
