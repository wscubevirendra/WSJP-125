

import ActionDropdown from "@/components/admin/ActionDropdown";
import { fetchRooms } from "@/utils/api";
import TableHeader from "@/components/admin/TableHeader";
import TableFilter from "@/components/admin/TableFilter";


export default async function Page() {
    const rooms = await fetchRooms();

    return (
        <div className="min-h-screen  p-4 lg:p-6">
            {/* HEADER */}
            <TableHeader title="Room Type" path="/admin/room-type/add" />

            {/* MAIN CARD */}
            <div className=" rounded-[28px] border border-gray-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                {/* FILTER SECTION */}
                <TableFilter />

                {/* TABLE HEADER */}
                <div className="hidden grid-cols-12 border-b border-gray-100 bg-gray-50 px-4 py-3 lg:grid">
                    <div className="col-span-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                            ID
                        </p>
                    </div>

                    <div className="col-span-5">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                            Name
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
                    {rooms?.data.map((item, index) => {

                        return (
                            <div
                                key={index}
                                className="grid grid-cols-1 gap-3 border-b border-gray-100 px-4 py-4 transition-all duration-300 hover:bg-gray-50/60 lg:grid-cols-12 lg:items-center"
                            >


                                {/* ID */}
                                <div className="hidden lg:block lg:col-span-1">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-xs font-bold text-gray-700">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* CATEGORY INFO */}
                                <div className="lg:col-span-5 flex items-center gap-3">


                                    <div className="min-w-0">
                                        <h2 className="truncate text-sm font-bold text-gray-900">
                                            {item.name}
                                        </h2>

                                        <p className="mt-1 text-[11px] text-gray-500 lg:hidden">
                                            {item.slug}
                                        </p>
                                    </div>
                                </div>

                                {/* SLUG */}
                                <div className="hidden lg:block lg:col-span-2">
                                    <div className="inline-flex rounded-xl bg-gray-100 px-3 py-1.5 text-[11px] font-medium text-gray-600">
                                        {item.slug}
                                    </div>
                                </div>

                                {/* STATUS */}
                                <div className="lg:col-span-2">
                                    <div
                                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold ${item.status
                                            ? "bg-emerald-100 text-emerald-700"
                                            : "bg-red-100 text-red-600"
                                            }`}
                                    >
                                        <div
                                            className={`h-2 w-2 rounded-full ${item.status
                                                ? "bg-emerald-500"
                                                : "bg-red-500"
                                                }`}
                                        />

                                        {item.status ? "Active" : "Inactive"}
                                    </div>
                                </div>

                                {/* ACTION */}
                                <div className="hidden justify-end lg:col-span-2 lg:flex">
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