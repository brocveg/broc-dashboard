"use client";
import { useState } from "react";
import docsData from "@/data/docs.json";
import { FileText, Tag, Search, Filter } from "lucide-react";

const ALL_CATEGORIES = ["All", ...Array.from(new Set(docsData.map((d) => d.category)))];

export default function DocsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = docsData.filter((doc) => {
    const matchCat = category === "All" || doc.category === category;
    const matchSearch = !search ||
      doc.title.toLowerCase().includes(search.toLowerCase()) ||
      doc.summary.toLowerCase().includes(search.toLowerCase()) ||
      doc.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4 border-b border-[#262626] flex items-center justify-between">
        <div>
          <h1 className="text-base font-semibold text-white">Docs</h1>
          <p className="text-xs text-[#4a4a4a] mt-0.5">{filtered.length} documents</p>
        </div>
        <div className="flex items-center gap-2 bg-[#161616] border border-[#262626] rounded-md px-3 py-1.5">
          <Search size={12} className="text-[#4a4a4a]" />
          <input
            type="text"
            placeholder="Search docs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-xs text-white placeholder-[#4a4a4a] outline-none w-36"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 px-6 py-3 border-b border-[#262626]">
        <Filter size={12} className="text-[#4a4a4a]" />
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
              category === cat ? "bg-[#5e6ad2] text-white" : "text-[#8b8b8b] hover:text-white hover:bg-[#1a1a1a]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-auto p-6 max-w-3xl space-y-2">
        {filtered.map((doc) => (
          <div key={doc.id} className="bg-[#161616] border border-[#262626] rounded-md p-4 hover:border-[#363636] transition-colors cursor-pointer">
            <div className="flex items-start gap-3">
              <FileText size={15} className="text-[#4a4a4a] mt-0.5 shrink-0" />
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-white">{doc.title}</h3>
                  <span className="text-[10px] text-[#4a4a4a] shrink-0">{doc.updatedAt}</span>
                </div>
                <p className="text-xs text-[#8b8b8b] leading-relaxed mb-2">{doc.summary}</p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#5e6ad222] text-[#5e6ad2]">{doc.category}</span>
                  {doc.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-[10px] text-[#4a4a4a] bg-[#1a1a1a] px-1.5 py-0.5 rounded">
                      <Tag size={8} />{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-[#4a4a4a] text-sm">No documents found.</div>
        )}
      </div>
    </div>
  );
}
