"use client";
import { TrendingUp, Clock, CheckCircle2, BarChart3 } from "lucide-react";

const stats = [
  { 
    label: "Tasks Done", 
    value: "19", 
    sublabel: "this week",
    icon: CheckCircle2,
    trend: "+23%",
    trendUp: true,
    color: "text-emerald-400"
  },
  { 
    label: "In Progress", 
    value: "3", 
    sublabel: "active now",
    icon: Clock,
    trend: "2 new",
    trendUp: true,
    color: "text-amber-400"
  },
  { 
    label: "Total Tasks", 
    value: "42", 
    sublabel: "all time",
    icon: BarChart3,
    trend: "+12%",
    trendUp: true,
    color: "text-blue-400"
  },
  { 
    label: "Completion", 
    value: "45%", 
    sublabel: "avg rate",
    icon: TrendingUp,
    trend: "+5%",
    trendUp: true,
    color: "text-purple-400"
  },
];

export function Header() {
  return (
    <header className="h-20 border-b border-[#2a2a3a] bg-[#111118]/80 backdrop-blur-xl px-6 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-6">
        <div>
          <h1 className="text-xl font-semibold text-white">Mission Control</h1>
          <p className="text-xs text-[#5a5a6a] mt-0.5">Track your progress, manage your team</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.label}
              className="flex items-center gap-3 px-4 py-2.5 bg-[#16161f] rounded-xl border border-[#2a2a3a] card-hover"
            >
              <div className={`p-2 rounded-lg bg-[#1a1a24] ${stat.color}`}>
                <Icon size={18} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                    stat.trendUp ? 'bg-emerald-500/15 text-emerald-400' : 'bg-red-500/15 text-red-400'
                  }`}>
                    {stat.trend}
                  </span>
                </div>
                <div className="text-[11px] text-[#5a5a6a]">
                  {stat.label} · {stat.sublabel}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
}
