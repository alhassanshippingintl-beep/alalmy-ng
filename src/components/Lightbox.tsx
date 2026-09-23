"use client";
import { useState } from "react";
type Item = { src: string; alt: string };
export function LightboxGallery({ items }: { items: Item[] }) {
  const [active, setActive] = useState<Item | null>(null);
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <button key={item.src} type="button" className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-3 text-right shadow-sm" onClick={() => setActive(item)}>
            <img src={item.src} alt={item.alt} className="mx-auto max-h-[420px] w-auto object-contain" />
            <p className="mt-3 text-center text-sm font-semibold text-slate-600">{item.alt}</p>
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <button type="button" className="absolute top-4 left-4 rounded-full bg-white px-4 py-2 text-sm font-bold" onClick={() => setActive(null)}>إغلاق</button>
          <img src={active.src} alt={active.alt} className="max-h-[90vh] max-w-full rounded-lg object-contain" />
        </div>
      )}
    </>
  );
}
