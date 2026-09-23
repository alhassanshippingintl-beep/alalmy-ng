"use client";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";
const types = ["تاجر تجزئة", "تاجر جملة", "موزع", "طلب آخر"];
export function TradeForm() {
  const [sentHint, setSentHint] = useState("");
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const gov = String(data.get("gov") || "").trim();
    const kind = String(data.get("kind") || "").trim();
    const qty = String(data.get("qty") || "").trim();
    const notes = String(data.get("notes") || "").trim();
    const message = [
      "السلام عليكم، أريد الاستفسار عن منتج سكر العالمي NG.",
      `الاسم: ${name}`,
      `رقم الهاتف: ${phone}`,
      `المحافظة: ${gov}`,
      `نوع العميل: ${kind}`,
      `الكمية المطلوبة: ${qty}`,
      `ملاحظات: ${notes}`,
    ].join("\n");
    setSentHint("سيتم فتح واتساب لإرسال بياناتك مباشرة دون تخزينها على الموقع.");
    window.open(`${site.whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">الاسم<input required name="name" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3" /></label>
        <label className="text-sm font-semibold">رقم الهاتف<input required name="phone" inputMode="tel" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3" /></label>
        <label className="text-sm font-semibold">المحافظة<input required name="gov" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3" /></label>
        <label className="text-sm font-semibold">نوع العميل<select name="kind" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3">{types.map((t) => <option key={t}>{t}</option>)}</select></label>
      </div>
      <label className="text-sm font-semibold">الكمية المطلوبة<input name="qty" placeholder="مثال: 50 شيكارة" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3" /></label>
      <label className="text-sm font-semibold">الرسالة<textarea name="notes" rows={4} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3" /></label>
      <button type="submit" className="rounded-full bg-brand-red px-6 py-3 text-base font-bold text-white hover:bg-brand-red-dark">إرسال عبر واتساب</button>
      {sentHint && <p className="text-sm text-slate-600">{sentHint}</p>}
    </form>
  );
}
