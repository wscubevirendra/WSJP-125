import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function ProductCard() {
  return (
    <Link
      href="/product/ember-velvet"
      className="group w-full max-w-[360px] bg-white border border-[#e8e3dd] rounded-[22px] overflow-hidden block hover:shadow-xl duration-500"
    >
      {/* IMAGE SECTION */}
      <div className="relative bg-[#f6f2ed] p-6 sm:p-8">
        
        {/* DISCOUNT BADGE */}
        <div className="absolute top-5 left-5 z-10">
          <span className="bg-[#9a6a43] text-white text-[15px] font-semibold px-4 py-2 rounded-lg">
            -18%
          </span>
        </div>

        {/* PRODUCT IMAGE */}
        <div className="relative w-full aspect-square overflow-hidden rounded-[18px] bg-[#ebe4dd] flex items-center justify-center">
          <Image
            src="/images/sofa.png"
            alt="Sofa"
            fill
            className="object-contain p-8 group-hover:scale-105 duration-500"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        
        {/* CATEGORY */}
        <p className="uppercase tracking-[3px] text-[#6b7280] text-[13px] font-medium">
          Sofas & Sectionals
        </p>

        {/* TITLE */}
        <h3 className="mt-3 text-[32px] text-[#2b2b2b] font-medium leading-snug">
          Ember Velvet 3-Seater
        </h3>

        {/* RATING + PRICE */}
        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          
          {/* RATING */}
          <div className="flex items-center gap-2">
            

            <span className="text-[#6b7280] text-[15px]">
              (48)
            </span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-3">
            <span className="text-[26px] font-semibold text-[#1f1f1f]">
              ₹89,000
            </span>

            <span className="text-[#8b8b8b] text-[18px] line-through">
              ₹1,08,000
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}