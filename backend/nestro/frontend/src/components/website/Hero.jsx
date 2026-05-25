import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="w-full px-4 md:px-6 lg:px-8 py-5 md:py-8">
            <div className="w-full bg-[#2b180f] rounded-[30px] overflow-hidden">

                {/* CONTAINER */}
                <div className="max-w-[1600px] mx-auto min-h-[700px] grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 sm:px-10 lg:px-16 py-14 lg:py-0">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col justify-center">

                        {/* TOP TEXT */}
                        <p className="text-[#d8a46c] uppercase tracking-[5px] text-[13px] sm:text-[14px] font-medium mb-6">
                            Summer Collection 2026
                        </p>

                        {/* HEADING */}
                        <h1 className="text-white text-[48px] sm:text-[62px] md:text-[72px] leading-[1.05] font-light max-w-[620px]">
                            Where Comfort
                            <br />
                            Meets{" "}
                            <span className="italic text-[#d9b48b] font-normal">
                                Craft
                            </span>
                        </h1>

                        {/* DESCRIPTION */}
                        <div className="mt-8 space-y-3">
                            <p className="text-[#8f8a85] text-[18px] sm:text-[22px] leading-relaxed">
                                Scandinavian-inspired furniture for modern living.
                            </p>

                            <p className="text-[#8f8a85] text-[18px] sm:text-[22px] leading-relaxed">
                                Curated pieces that endure seasons.
                            </p>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-10">

                            {/* PRIMARY BUTTON */}
                            <Link
                                href="/store"
                                className="h-[58px] px-8 rounded-xl bg-[#a46d43] hover:bg-[#bb8358] duration-300 text-white text-[18px] font-medium flex items-center justify-center gap-3"
                            >
                                Shop Collection
                                <span className="text-[24px]">→</span>
                            </Link>

                            {/* SECONDARY BUTTON */}
                            <Link
                                href="/lookbook"
                                className="h-[58px] px-8 rounded-xl border border-[#6d4c34] hover:bg-[#3a2418] duration-300 text-[#ece7e2] text-[18px] font-medium flex items-center justify-center"
                            >
                                View Lookbook
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex items-center justify-center">

                        {/* GLOW */}
                        <div className="absolute w-[350px] h-[350px] bg-[#8b5e3b]/20 blur-[120px] rounded-full" />

                        {/* IMAGE */}
                        <div className="relative w-full max-w-[700px] aspect-square lg:aspect-[1/0.8]">
                            <img
                                src="https://img.magnific.com/free-psd/modern-sectional-sofa-with-wooden-coffee-table-plant_632498-24117.jpg?semt=ais_hybrid&w=740&q=80"
                                alt="Luxury Sofa"


                                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}