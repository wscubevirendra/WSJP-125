'use client'
import { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";



const CATEGORIES = [
  { name: "Electronics", slug: "electronics", status: "active", icon: "💻" },
  { name: "Fashion & Apparel", slug: "fashion-apparel", status: "active", icon: "👗" },
  { name: "Home & Living", slug: "home-living", status: "active", icon: "🏠" },
  { name: "Sports & Fitness", slug: "sports-fitness", status: "inactive", icon: "🏀" },
  { name: "Beauty & Personal Care", slug: "beauty-personal", status: "active", icon: "✨" },
  { name: "Books & Stationery", slug: "books-stationery", status: "draft", icon: "📚" },
  { name: "Toys & Games", slug: "toys-games", status: "active", icon: "🧩" },
  { name: "Automotive", slug: "automotive", status: "inactive", icon: "🚗" },
];

const STATUS_CONFIG = {
  active: { label: "Active", classes: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-500" },
  inactive: { label: "Inactive", classes: "bg-red-50 text-red-600", dot: "bg-red-500" },
  draft: { label: "Draft", classes: "bg-amber-50 text-amber-700", dot: "bg-amber-500" },
};

function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.draft;
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${cfg.classes}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

function ActionDropdown({ index, openIndex, setOpenIndex }) {
  const ref = useRef(null);
  const isOpen = openIndex === index;

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpenIndex(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [setOpenIndex]);

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className=" flex items-center gap-1.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-indigo-700 hover:text-white hover:border-indigo-700 transition-all duration-150"
      >
        Actions
        <RxCaretDown className="w-3 h-3" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-44 bg-white border border-indigo-100 rounded-xl shadow-xl z-50 overflow-hidden">
          {[
            { label: "View", icon: "👁️" },
            { label: "Edit", icon: "✏️" },
            { label: "Duplicate", icon: "📋" },
          ].map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-2.5 w-full px-3.5 py-2.5 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
            >
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
          <div className="h-px bg-indigo-50 my-1" />
          <button className="flex items-center gap-2.5 w-full px-3.5 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
            <span>🗑️</span> Delete
          </button>
        </div>
      )}
    </div>
  );
}

function AddCategoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-indigo-100 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#3b497e] flex items-center justify-between px-6 py-4">
          <h2 className="text-white font-semibold text-base flex items-center gap-2">
            🏷️ Add New Category
          </h2>
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 text-white rounded-lg w-8 h-8 flex items-center justify-center text-lg transition-colors"
          >
            ×
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#2a3460]">Category Name *</label>
              <input
                type="text"
                placeholder="e.g. Electronics"
                className="border border-[#c3c9e3] rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:border-[#3b497e] focus:ring-2 focus:ring-indigo-100 transition"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#2a3460]">Slug *</label>
              <input
                type="text"
                placeholder="e.g. electronics"
                className="border border-[#c3c9e3] rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:border-[#3b497e] focus:ring-2 focus:ring-indigo-100 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#2a3460]">Parent Category</label>
              <select className="border border-[#c3c9e3] rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:border-[#3b497e] focus:ring-2 focus:ring-indigo-100 transition bg-white">
                <option value="">None (Top Level)</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Living</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#2a3460]">Status</label>
              <select className="border border-[#c3c9e3] rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:border-[#3b497e] focus:ring-2 focus:ring-indigo-100 transition bg-white">
                <option>Active</option>
                <option>Inactive</option>
                <option>Draft</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-[#2a3460]">Description</label>
            <textarea
              placeholder="Short description of this category..."
              rows={3}
              className="border border-[#c3c9e3] rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:border-[#3b497e] focus:ring-2 focus:ring-indigo-100 transition resize-y"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-[#2a3460]">Category Image</label>
            <div className="border-2 border-dashed border-[#c3c9e3] rounded-xl p-6 text-center cursor-pointer hover:border-[#3b497e] hover:bg-[#eef0f8] transition-all">
              <div className="text-3xl mb-1.5">☁️</div>
              <p className="text-xs text-slate-500">
                <span className="text-[#3b497e] font-semibold">Click to upload</span> or drag & drop
              </p>
              <p className="text-xs text-slate-400 mt-1">PNG, JPG, WEBP — Max 2MB</p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#eef0f8]">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-[#c3c9e3] text-sm text-slate-600 font-medium hover:bg-slate-50 transition"
          >
            Cancel
          </button>
          <button className="px-5 py-2 rounded-lg bg-[#3b497e] text-white text-sm font-semibold hover:bg-[#2a3460] transition shadow-md shadow-indigo-200">
            💾 Save Category
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CategoryTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activePage, setActivePage] = useState(1);

  const filtered = CATEGORIES.filter((cat) => {
    const matchSearch =
      cat.name.toLowerCase().includes(search.toLowerCase()) ||
      cat.slug.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      statusFilter === "All Status" || cat.status === statusFilter.toLowerCase();
    return matchSearch && matchStatus;
  });

  return (
    <div className="min-h-screen bg-[#f4f5fb] p-6 font-sans">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-semibold text-[#2a3460]">
            Category List{" "}
            <span className="text-sm font-normal text-slate-400 ml-2">
              Manage your ecommerce categories
            </span>
          </h1>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 bg-[#3b497e] hover:bg-[#2a3460] text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-md shadow-indigo-200/60 transition-colors"
        >
          ＋ Add Category
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-2.5 mb-4 flex-wrap">
        <div className="flex items-center gap-2 bg-white border border-[#c3c9e3] rounded-lg px-3 py-2 flex-1 min-w-48">
          <CiSearch className="w-4 h-4 text-slate-400" />


          <input
            type="text"
            placeholder="Search categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-none outline-none text-sm text-[#2a3460] bg-transparent w-full placeholder-slate-400"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-white border border-[#c3c9e3] rounded-lg px-3 py-2 text-sm text-[#2a3460] outline-none cursor-pointer"
        >
          {["All Status", "Active", "Inactive", "Draft"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <select className="bg-white border border-[#c3c9e3] rounded-lg px-3 py-2 text-sm text-[#2a3460] outline-none cursor-pointer">
          {["All Categories", "Electronics", "Fashion", "Home"].map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100/60 border border-[#eef0f8] overflow-hidden">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#3b497e] text-white">
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide w-14">SNO</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide w-16">Image</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide">Name & Slug</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide w-28">Status</th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wide w-28">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-12 text-slate-400 text-sm">
                  No categories found.
                </td>
              </tr>
            ) : (
              filtered.map((cat, i) => (
                <tr
                  key={cat.slug}
                  className="border-b border-[#eef0f8] last:border-b-0 hover:bg-slate-50/70 transition-colors"
                >
                  <td className="px-4 py-3">
                    <span className="inline-block bg-[#eef0f8] text-[#3b497e] rounded-md px-2.5 py-0.5 text-xs font-bold min-w-[30px] text-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#eef0f8] to-[#c3c9e3] border-2 border-[#c3c9e3] flex items-center justify-center text-xl">
                      {cat.icon}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-[#2a3460] text-sm">{cat.name}</div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">/{cat.slug}</div>
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={cat.status} />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <ActionDropdown
                      index={i}
                      openIndex={openDropdown}
                      setOpenIndex={setOpenDropdown}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-[#eef0f8] text-xs text-slate-400 flex-wrap gap-2">
          <span>
            Showing <b className="text-slate-600">1–{filtered.length}</b> of{" "}
            <b className="text-slate-600">{CATEGORIES.length}</b> categories
          </span>
          <div className="flex gap-1.5">
            {[
              { label: "‹", page: null },
              { label: "1", page: 1 },
              { label: "2", page: 2 },
              { label: "3", page: 3 },
              { label: "›", page: null },
            ].map(({ label, page }, idx) => (
              <button
                key={idx}
                onClick={() => page && setActivePage(page)}
                className={`w-8 h-8 rounded-lg border text-xs font-medium flex items-center justify-center transition-all
                  ${activePage === page
                    ? "bg-[#3b497e] text-white border-[#3b497e]"
                    : "bg-white text-[#3b497e] border-[#c3c9e3] hover:bg-[#eef0f8]"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Add Category Modal */}
      <AddCategoryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}