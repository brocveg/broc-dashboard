import teamData from "@/data/team.json";
import { Zap, MapPin } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4 border-b border-[#262626]">
        <h1 className="text-base font-semibold text-white">Team</h1>
        <p className="text-xs text-[#4a4a4a] mt-0.5">{teamData.members.length} active · {teamData.pendingRoles.length} planned</p>
      </div>
      <div className="flex-1 overflow-auto p-6 max-w-2xl space-y-5">
        {/* Mission Statement */}
        <div className="bg-[#1a1a2e] border border-[#5e6ad2]/30 rounded-md p-4">
          <p className="text-[10px] font-semibold text-[#5e6ad2] uppercase tracking-widest mb-2">Mission Statement</p>
          <p className="text-sm text-white leading-relaxed">{teamData.missionStatement}</p>
        </div>

        {/* Active Members */}
        <div>
          <p className="text-xs font-medium text-[#4a4a4a] uppercase tracking-wider mb-3">Active</p>
          {teamData.members.map((member) => (
            <div key={member.id} className="bg-[#161616] border border-[#262626] rounded-md p-4 hover:border-[#363636] transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-[#1a1a2e] border border-[#5e6ad2]/30 flex items-center justify-center text-xl shrink-0">
                  {member.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-semibold text-white">{member.name}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4cb782] animate-pulse" />
                    <span className="text-[10px] text-[#4cb782]">Active</span>
                  </div>
                  <p className="text-xs text-[#5e6ad2] mb-1.5">{member.role}</p>
                  <p className="text-xs text-[#8b8b8b] leading-relaxed mb-2.5">{member.description}</p>
                  <div className="flex items-center gap-1.5 flex-wrap mb-2">
                    <Zap size={10} className="text-[#4a4a4a]" />
                    {member.superpowers.map((s) => (
                      <span key={s} className="text-[10px] bg-[#f2c94c]/10 text-[#f2c94c] px-1.5 py-0.5 rounded">{s}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-[10px] text-[#4a4a4a]">
                      <MapPin size={9} />{member.location}
                    </div>
                    <span className="text-[10px] text-[#4a4a4a]">Model: {member.model}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Planned Roles */}
        <div>
          <p className="text-xs font-medium text-[#4a4a4a] uppercase tracking-wider mb-3">Planned Roles</p>
          {teamData.pendingRoles.map((role) => (
            <div key={role.id} className="bg-[#0f0f0f] border border-dashed border-[#262626] rounded-md p-3 opacity-60 hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-[#161616] flex items-center justify-center text-base shrink-0">{role.emoji}</div>
                <div>
                  <p className="text-xs font-semibold text-[#8b8b8b]">{role.name}</p>
                  <p className="text-[10px] text-[#4a4a4a] mt-0.5">{role.description}</p>
                </div>
                <span className="ml-auto text-[10px] text-[#4a4a4a] bg-[#1a1a1a] px-2 py-0.5 rounded">Planned</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
