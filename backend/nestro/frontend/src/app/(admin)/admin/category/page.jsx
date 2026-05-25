import {
  MdLaptopMac,
  MdHome,
  MdSportsBasketball,
  MdSearch,
} from "react-icons/md";

import { GiClothes } from "react-icons/gi";

import ActionDropdown from "@/components/admin/ActionDropdown";

const iconMap = {
  MdLaptopMac: MdLaptopMac,
  GiClothes: GiClothes,
  MdHome: MdHome,
  MdSportsBasketball: MdSportsBasketball,
};

async function getCategories() {
  return [
    {
      id: "01",
      name: "Electronics",
      slug: "/electronics",
      status: "Active",
      icon: "MdLaptopMac",
    },
    {
      id: "02",
      name: "Fashion & Apparel",
      slug: "/fashion-apparel",
      status: "Active",
      icon: "GiClothes",
    },
    {
      id: "03",
      name: "Home & Living",
      slug: "/home-living",
      status: "Active",
      icon: "MdHome",
    },
    {
      id: "04",
      name: "Sports & Fitness",
      slug: "/sports-fitness",
      status: "Inactive",
      icon: "MdSportsBasketball",
    },
  ];
}

export default async function Page() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen p-6">
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-gray-900">
            Category List
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your ecommerce categories
          </p>
        </div>

        <button className="h-11 rounded-2xl bg-black px-5 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:bg-gray-900">
          + Create Category
        </button>
      </div>

      {/* MAIN CARD */}
      <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
        {/* FILTER SECTION */}
        <div className="border-b border-gray-100 p-4">
          <div className="grid grid-cols-12 gap-3">
            {/* SEARCH */}
            <div className="relative col-span-8">
              <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400" />

              <input
                type="text"
                placeholder="Search categories..."
                className="h-11 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-xs font-medium text-gray-700 outline-none transition-all focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5"
              />
            </div>

            {/* STATUS */}
            <select className="col-span-2 h-11 rounded-2xl border border-gray-200 bg-white px-4 text-xs font-medium text-gray-700 outline-none transition-all focus:border-black focus:ring-4 focus:ring-black/5">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            {/* CATEGORY */}
            <select className="col-span-2 h-11 rounded-2xl border border-gray-200 bg-white px-4 text-xs font-medium text-gray-700 outline-none transition-all focus:border-black focus:ring-4 focus:ring-black/5">
              <option>All Categories</option>
            </select>
          </div>
        </div>

        {/* TABLE HEADER */}
        <div className="grid grid-cols-12 border-b border-gray-100 bg-gray-50 px-4 py-3">
          <div className="col-span-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              ID
            </p>
          </div>

          <div className="col-span-5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Category
            </p>
          </div>

          <div className="col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Slug
            </p>
          </div>

          <div className="col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Status
            </p>
          </div>

          <div className="col-span-2 text-right">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Action
            </p>
          </div>
        </div>

        {/* TABLE BODY */}
        <div>
          {categories.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={index}
                className="grid grid-cols-12 items-center gap-3 border-b border-gray-100 px-4 py-4 transition-all duration-300 hover:bg-gray-50/60"
              >
                {/* ID */}
                <div className="col-span-1">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-xs font-bold text-gray-700">
                    {item.id}
                  </div>
                </div>

                {/* CATEGORY INFO */}
                <div className="col-span-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
                    <Icon className="text-xl text-gray-700" />
                  </div>

                  <div>
                    <h2 className="text-sm font-bold text-gray-900">
                      {item.name}
                    </h2>
                  </div>
                </div>

                {/* SLUG */}
                <div className="col-span-2">
                  <div className="inline-flex rounded-xl bg-gray-100 px-3 py-1.5 text-[11px] font-medium text-gray-600">
                    {item.slug}
                  </div>
                </div>

                {/* STATUS */}
                <div className="col-span-2">
                  <div
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold ${
                      item.status === "Active"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    <div
                      className={`h-2 w-2 rounded-full ${
                        item.status === "Active"
                          ? "bg-emerald-500"
                          : "bg-red-500"
                      }`}
                    />

                    {item.status}
                  </div>
                </div>

                {/* ACTION */}
                <div className="col-span-2 flex justify-end">
                  <ActionDropdown />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}