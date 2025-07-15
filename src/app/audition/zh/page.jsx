"use client";
import Languageswitcher from "@/components/languageswitcher"; 
import Auditionform from "@/components/Auditionform";


export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 flex items-center justify-center px-4 relative">
      <Languageswitcher />
      <Auditionform lang="zh" />
    </div>
  );
}
