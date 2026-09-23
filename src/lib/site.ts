export const site = {
  brand: "العالمي NG",
  brandEn: "GLOBAL NG",
  activity: "العالمي NG لتعبئة وتوزيع المواد الغذائية",
  tagline: "منتجات غذائية معبأة بعناية للبيت والتاجر",
  intro:
    "نقدم سكرًا أبيض معبأ في عبوة عملية وواضحة، مع استقبال استفسارات التجار والموزعين وطلبات الجملة والتوريد.",
  about:
    "العالمي NG منشأة مصرية متخصصة في تعبئة وتوزيع المواد الغذائية، مقرها محافظة الفيوم. نعمل على توفير منتجات غذائية معبأة بصورة عملية وواضحة، مع استقبال استفسارات التجار والموزعين وطلبات التوريد.",
  phoneDisplay: "01003002226",
  phoneTel: "01003002226",
  whatsappE164: "201003002226",
  whatsappUrl: "https://wa.me/201003002226",
  address: "البسيونية – طريق سيلا المحطة – مركز الفيوم – محافظة الفيوم – مصر",
  mapsQuery: "البسيونية طريق سيلا المحطة مركز الفيوم محافظة الفيوم مصر",
  country: "مصر",
  product: {
    name: "سكر أبيض فاخر",
    brand: "العالمي NG",
    netWeight: "1 كجم",
    ingredients: "سكر أبيض 100%",
    origin: "صنع في مصر",
    storage:
      "يحفظ في مكان جاف ونظيف، بعيدًا عن الرطوبة ومصادر الحرارة وأشعة الشمس المباشرة والمواد ذات الروائح النفاذة.",
    priceNote: "تواصل لمعرفة أسعار وكميات الجملة",
  },
  nutrition: [
    { label: "الطاقة", value: "400 كيلو كالوري" },
    { label: "الكربوهيدرات", value: "100 جم" },
    { label: "السكريات الكلية", value: "100 جم" },
    { label: "البروتين", value: "0 جم" },
    { label: "الدهون الكلية", value: "0 جم" },
    { label: "الألياف الغذائية", value: "0 جم" },
    { label: "الصوديوم", value: "0 ملجم" },
  ],
  qrDestination: "/",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://alalmy-ng.vercel.app",
};

export function waLink(text: string) {
  return `${site.whatsappUrl}?text=${encodeURIComponent(text)}`;
}

export const defaultInquiry =
  "السلام عليكم، أريد الاستفسار عن منتج سكر العالمي NG.";
