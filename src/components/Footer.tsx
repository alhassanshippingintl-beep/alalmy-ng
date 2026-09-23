import Link from "next/link";
import { site } from "@/lib/site";
export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <img src="/images/logo-mark.webp" alt={site.brand} className="mb-3 h-16 w-auto" />
          <p className="text-sm font-bold text-brand-red">{site.brand}</p>
          <p className="mt-1 text-sm text-slate-600">{site.activity}</p>
        </div>
        <div>
          <p className="mb-3 font-bold text-brand-blue">أقسام الموقع</p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><a href="/#product">المنتج</a></li>
            <li><a href="/#nutrition">القيم الغذائية</a></li>
            <li><a href="/#trade">التجار والموزعون</a></li>
            <li><a href="/#contact">تواصل معنا</a></li>
            <li><Link href="/privacy">سياسة الخصوصية</Link></li>
          </ul>
        </div>
        <div className="text-sm text-slate-700">
          <p className="mb-3 font-bold text-brand-blue">التواصل</p>
          <p>هاتف: <a className="font-bold" href={`tel:${site.phoneTel}`} dir="ltr">{site.phoneDisplay}</a></p>
          <p className="mt-2 leading-7">{site.address}</p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">جميع الحقوق محفوظة © {site.brand}</div>
    </footer>
  );
}
