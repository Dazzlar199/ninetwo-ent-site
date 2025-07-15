"use client";
import { useState } from "react";
import { messages } from "@/i18n/messages";

export default function Auditionform({ lang = "ko" }) {
  const [status, setStatus] = useState("idle");
  const msg = messages[lang] || messages.ko;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = {
      name: form.name.value,
      birth: form.birth.value,
      gender: form.gender.value,
      email: form.email.value,
      message: form.message.value,
      vocalLink: form.vocalLink.value,
      danceLink: form.danceLink.value,
      sns: form.sns.value,
    };

    try {
      const res = await fetch("/api/send-audition", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg space-y-5">
      <h1 className="text-2xl font-semibold text-center">{msg.title}</h1>
      <input type="text" name="name" placeholder={msg.name} className="input-style" required />
      <input type="date" name="birth" className="input-style" required />
      <select name="gender" className="input-style" required>
        <option value="">{msg.gender}</option>
        <option value="male">{msg.male}</option>
        <option value="female">{msg.female}</option>
      </select>
      <input type="email" name="email" placeholder={msg.email} className="input-style" required />
      <textarea name="message" placeholder={msg.message} className="input-style" rows={4} />
      <input type="url" name="vocalLink" placeholder={msg.vocalLink} className="input-style" />
      <input type="url" name="danceLink" placeholder={msg.danceLink} className="input-style" />
      <input type="url" name="sns" placeholder={msg.sns} className="input-style" />
      <label className="text-sm flex items-center space-x-2">
        <input type="checkbox" required />
        <span>{msg.agree}</span>
      </label>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold">
        {status === "sending" ? msg.sending : msg.submit}
      </button>
      {status === "success" && <p className="text-green-600 text-sm text-center">{msg.success}</p>}
      {status === "error" && <p className="text-red-500 text-sm text-center">{msg.error}</p>}
    </form>
  );
}
