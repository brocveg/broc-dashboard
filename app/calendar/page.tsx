export default function CalendarPage() {
  const year = 2026;
  const month = 2;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const today = 4;

  const scheduled = [
    { day: 4,  time: "12:00 PM", label: "Email check (auto)", color: "#4cb782" },
    { day: 4,  time: "9:00 PM",  label: "Email check (auto)", color: "#4cb782" },
    { day: 5,  time: "12:00 PM", label: "Email check (auto)", color: "#4cb782" },
    { day: 5,  time: "9:00 PM",  label: "Email check (auto)", color: "#4cb782" },
    { day: 4,  time: "",         label: "Dashboard launch",   color: "#5e6ad2" },
  ];

  const blanks = Array.from({ length: firstDayOfWeek });
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4 border-b border-[#262626]">
        <h1 className="text-base font-semibold text-white">Calendar</h1>
        <p className="text-xs text-[#4a4a4a] mt-0.5">March 2026</p>
      </div>
      <div className="p-6 max-w-4xl">
        <div className="grid grid-cols-7 gap-px bg-[#262626] border border-[#262626] rounded-md overflow-hidden">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="bg-[#111111] px-2 py-2 text-[10px] font-medium text-[#4a4a4a] text-center uppercase tracking-wider">{d}</div>
          ))}
          {blanks.map((_, i) => <div key={`b${i}`} className="bg-[#0f0f0f] min-h-[80px]" />)}
          {days.map((day) => {
            const dayTasks = scheduled.filter((s) => s.day === day);
            const isToday = day === today;
            return (
              <div key={day} className={`bg-[#0f0f0f] hover:bg-[#161616] min-h-[80px] p-2 transition-colors ${isToday ? "ring-1 ring-inset ring-[#5e6ad2]" : ""}`}>
                <span className={`text-xs font-medium ${isToday ? "text-[#5e6ad2]" : "text-[#4a4a4a]"}`}>{day}</span>
                <div className="mt-1 space-y-0.5">
                  {dayTasks.map((t, i) => (
                    <div key={i} className="text-[9px] px-1 py-0.5 rounded truncate" style={{ backgroundColor: t.color + "22", color: t.color }}>
                      {t.time && <span className="opacity-70">{t.time} · </span>}{t.label}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
