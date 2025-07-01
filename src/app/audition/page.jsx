"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function AuditionPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    video: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [resultMsg, setResultMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const result = await emailjs.send(
        "service_hk4dzam",    // ex: service_123abcxyz
        "template_ta3grxq",   // ex: template_abc987zyx
        formData,
        "b1Z6zN76Dvrbmgg2W"     // ex: UuQ5s_FpG4z-abcdef
      );

      console.log(result.text);
      setResultMsg("지원이 성공적으로 완료되었습니다! 🎉");
      setFormData({ name: "", age: "", email: "", video: "" });
    } catch (error) {
      console.error(error.text);
      setResultMsg("메일 전송에 실패했습니다. 다시 시도해주세요.");
    }

    setIsSending(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-100 px-4 py-12">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">🎤 Join the Audition</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="이름"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            name="age"
            placeholder="나이"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="url"
            name="video"
            placeholder="유튜브 영상 링크"
            value={formData.video}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
          >
            {isSending ? "전송 중..." : "지원 완료"}
          </button>
        </form>
        {resultMsg && (
          <p className="mt-4 text-center text-sm text-green-600">{resultMsg}</p>
        )}
      </div>
    </div>
  );
}
