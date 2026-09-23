import type { Metadata } from "next";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "سياسة الخصوصية" };
export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 leading-8 text-slate-700">
      <h1 className="text-3xl font-extrabold text-brand-blue">سياسة الخصوصية</h1>
      <p className="mt-6">تستخدم صفحة {site.brand} لعرض بيانات الشركة والمنتج والتواصل عبر الهاتف أو واتساب.</p>
      <p className="mt-4">نموذج التجار يفتح تطبيق واتساب مباشرة برسالة يكتبها الزائر. لا يتم إنشاء حساب، ولا تُحفظ بيانات النموذج على خادم الموقع في هذه المرحلة.</p>
      <p className="mt-4">لأي استفسار تواصل عبر الرقم <a href={`tel:${site.phoneTel}`} className="font-bold" dir="ltr">{site.phoneDisplay}</a>.</p>
    </article>
  );
}
