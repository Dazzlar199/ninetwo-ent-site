import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ 여기를 수정해서 Open Graph / Twitter Card 메타데이터 추가!
export const metadata = {
  title: "3WAY 오디션 | NINE:TWO:9E",
  description: "3WAY 공식 오디션 안내 및 지원 페이지입니다.",
  openGraph: {
    title: "3WAY 오디션 | NINE:TWO:9E",
    description: "3WAY 공식 오디션 안내 및 지원 페이지입니다.",
    url: "https://www.ninetwo9e.com",
    siteName: "NINE:TWO:9E",
    images: [
      {
        url: "https://www.ninetwo9e.com/og-image.jpg", // ✅ 퍼블릭에 위치한 이미지
        width: 1200,
        height: 630,
        alt: "3WAY 오디션 대표 이미지",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3WAY 오디션 | NINE:TWO:9E",
    description: "지금 바로 지원해보세요!",
    images: ["https://www.ninetwo9e.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
