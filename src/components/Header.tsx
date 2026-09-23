"use client";
import Link from "next/link";
import { useState } from "react";
import { site, waLink, defaultInquiry } from "@/lib/site";
const nav = [
  { href: "/#home", label: "الرئيسية" },
  { href: "/#product", label: "المنتج" },
  { href: "/#nutrition", label: "القيم الغذائية" },
  { href: "/#about", label: "عن الشركة" },
  { href: "/#trade", label: "للتجار والموزعين" },
  { href: "/#contact", label: "تواصل معنا" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <img src="/images/logo-mark.webp" alt={site.brand} className="h-12 w-auto" width={120} height={80} />
          <span className="hidden truncate text-sm font-extrabold text-brand-red sm:block">{site.brand}</span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 hover:text-brand-blue">{item.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={waLink(defaultInquiry)} className="rounded-full bg-brand-red px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-brand-red-dark">اطلب الآن</a>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 lg:hidden" aria-label="فتح القائمة" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span className="sr-only">القائمة</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-slate-800" />
              <span className="block h-0.5 w-5 bg-slate-800" />
              <span className="block h-0.5 w-5 bg-slate-800" />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden">
          <nav className="flex flex-col gap-2">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50" onClick={() => setOpen(false)}>{item.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
