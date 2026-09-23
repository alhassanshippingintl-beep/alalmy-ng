import { LightboxGallery } from "@/components/Lightbox";
import { ShareButton } from "@/components/ShareButton";
import { TradeForm } from "@/components/TradeForm";
import { defaultInquiry, site, waLink } from "@/lib/site";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
export default function HomePage() {
  return (
    <>
      <section id="home" className="curve-bg overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="mb-3 inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-brand-red">صنع في مصر</p>
            <h1 className="text-3xl font-extrabold leading-snug text-brand-blue md:text-4xl">{site.activity}</h1>
            <p className="mt-4 text-xl font-bold text-slate-800">{site.tagline}</p>
            <p className="mt-4 max-w-xl leading-8 text-slate-600">{site.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#product" className="rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white hover:bg-brand-blue-dark">شاهد المنتج</a>
              <a href={waLink(defaultInquiry)} className="rounded-full bg-brand-red px-5 py-3 text-sm font-bold text-white hover:bg-brand-red-dark">اطلب عبر واتساب</a>
              <a href="#trade" className="rounded-full border border-brand-blue px-5 py-3 text-sm font-bold text-brand-blue">طلبات الجملة والتوزيع</a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-red-100/70 blur-2xl" />
            <div className="absolute -left-8 bottom-10 h-56 w-56 rounded-full bg-blue-100/80 blur-2xl" />
            <img src="/images/photo-front.webp" alt={`${site.product.name} ${site.brand}`} className="pack-shadow relative z-10 w-[280px] max-w-full md:w-[340px]" width={708} height={1066} />
          </div>
        </div>
      </section>
      <section id="product" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold text-brand-blue">منتجنا</h2>
        <p className="mt-2 text-xl font-bold text-slate-800">{site.product.name}</p>
        <div className="mt-8">
          <LightboxGallery items={[{ src: "/images/photo-front.webp", alt: "وجه كيس سكر العالمي NG" }, { src: "/images/photo-back.webp", alt: "ظهر كيس سكر العالمي NG" }]} />
        </div>
        <dl className="mt-8 grid gap-3 sm:grid-cols-2">
          {[["العلامة التجارية", site.product.brand], ["المنتج", site.product.name], ["الوزن الصافي", site.product.netWeight], ["المكونات", site.product.ingredients], ["بلد التصنيع", site.product.origin], ["طريقة الحفظ", site.product.storage]].map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <dt className="text-sm font-bold text-brand-red">{k}</dt>
              <dd className="mt-1 leading-7 text-slate-800">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 font-bold text-brand-blue">{site.product.priceNote}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={waLink("السلام عليكم، أريد الاستفسار عن منتج سكر العالمي NG.")} className="rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white">استفسر عن المنتج</a>
          <a href={waLink("السلام عليكم، أريد طلب كمية من سكر العالمي NG.")} className="rounded-full bg-brand-red px-5 py-3 text-sm font-bold text-white">اطلب كمية</a>
          <a href={waLink("السلام عليكم، أريد التواصل مع مسؤول التوزيع في العالمي NG.")} className="rounded-full border border-slate-300 px-5 py-3 text-sm font-bold">تواصل مع مسؤول التوزيع</a>
        </div>
      </section>
      <section id="nutrition" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold text-brand-blue">القيم الغذائية لكل 100 جم</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="bg-brand-red px-4 py-3 text-center font-bold text-white">القيم الغذائية لكل 100 جم</div>
            <table className="w-full text-right"><tbody>
              {site.nutrition.map((row, i) => (
                <tr key={row.label} className={i % 2 ? "bg-blue-50/50" : "bg-white"}>
                  <th className="w-1/2 border-b border-slate-100 px-4 py-3 font-bold text-brand-blue">{row.label}</th>
                  <td className="border-b border-slate-100 px-4 py-3 font-semibold">{row.value}</td>
                </tr>
              ))}
            </tbody></table>
          </div>
        </div>
      </section>
      <section id="about" className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-brand-blue">عن العالمي NG</h2>
          <p className="mt-4 leading-8 text-slate-700">{site.about}</p>
        </div>
        <div className="flex justify-center rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <img src="/images/logo-mark.webp" alt={site.brand} className="max-h-52 w-auto" />
        </div>
      </section>
      <section id="gallery" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold text-brand-blue">معرض الصور</h2>
          <div className="mt-8">
            <LightboxGallery items={[{ src: "/images/photo-front.webp", alt: "كيس السكر من الأمام" }, { src: "/images/photo-back.webp", alt: "كيس السكر من الخلف" }, { src: "/images/logo-mark.webp", alt: "شعار العالمي NG" }, { src: "/images/photo-both.webp", alt: "صورة واقعية للمنتج" }]} />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {["منتج قادم 1", "منتج قادم 2", "منتج قادم 3"].map((label) => (
              <div key={label} className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white text-sm font-semibold text-slate-400">{label}</div>
            ))}
          </div>
        </div>
      </section>
      <section id="trade" className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-3xl font-extrabold text-brand-blue">هل أنت تاجر أو موزع؟</h2>
        <p className="mt-3 leading-8 text-slate-700">أرسل بياناتك والكمية المطلوبة وسنتواصل معك لمعرفة تفاصيل الطلب والتوريد.</p>
        <div className="mt-8 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm md:p-8"><TradeForm /></div>
      </section>
      <section id="contact" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold text-brand-blue">تواصل معنا</h2>
          <div className="mt-6 space-y-3 text-slate-800">
            <p className="font-bold">{site.activity}</p>
            <p>الهاتف: <a className="font-bold text-brand-blue" href={`tel:${site.phoneTel}`} dir="ltr">{site.phoneDisplay}</a></p>
            <p>واتساب: <a className="font-bold text-brand-blue" href={site.whatsappUrl} dir="ltr">{site.phoneDisplay}</a></p>
            <p className="leading-8">{site.address}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${site.phoneTel}`} className="rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white">اتصال مباشر</a>
            <a href={waLink(defaultInquiry)} className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white">واتساب مباشر</a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-bold">فتح العنوان في خرائط Google</a>
            <ShareButton />
          </div>
        </div>
      </section>
    </>
  );
}
