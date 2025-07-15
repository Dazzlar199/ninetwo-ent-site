"use client";
import { useRouter, usePathname } from "next/navigation";

export default function Languageswitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e) => {
    const lang = e.target.value;
    const base = "/audition";
    router.push(lang === "ko" ? base : `${base}/${lang}`);
  };

  return (
    <div className="absolute top-4 right-4">
      <select onChange={handleChange} className="border rounded px-2 py-1 text-sm">
        <option value="ko">🇰🇷 한국어</option>
        <option value="en">🇺🇸 English</option>
        <option value="ja">🇯🇵 日本語</option>
        <option value="zh">🇨🇳 中文</option>
      </select>
    </div>
  );
}
