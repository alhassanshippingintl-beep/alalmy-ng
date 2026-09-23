"use client";
export function ShareButton() {
  async function share() {
    const url = window.location.origin;
    const title = "العالمي NG";
    const text = "صفحة شركة العالمي NG لتعبئة وتوزيع المواد الغذائية";
    if (navigator.share) {
      try { await navigator.share({ title, text, url }); return; } catch {}
    }
    await navigator.clipboard.writeText(url);
    alert("تم نسخ رابط الصفحة");
  }
  return (
    <button type="button" onClick={share} className="rounded-full border border-slate-300 px-5 py-3 text-sm font-bold">مشاركة الصفحة</button>
  );
}
