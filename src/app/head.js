// app/head.js
export default function Head() {
  return (
    <>
      <title>9e 오디션 | NINE:TWO:9E</title>
      <meta property="og:title" content="9e 오디션 | NINE:TWO:9E" />
      <meta property="og:description" content="9e 공식 오디션 안내 및 지원" />
      <meta property="og:image" content="https://ninetwo9e.com/og-image.jpg" />
      <meta property="og:url" content="https://ninetwo9e.com" />
      <meta name="twitter:card" content="summary_large_image" />

      <title>3WAY | 9e Entertainment</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="차세대 K-POP 그룹 3WAY 공식 홈페이지입니다." />

      {/* Open Graph (SNS 공유 시) */}
      <meta property="og:title" content="3WAY | 9e Entertainment" />
      <meta property="og:description" content="글로벌 K-POP 아티스트 3WAY의 공식 웹사이트입니다." />
      <meta property="og:image" content="/images/og-image.jpg" />
      <meta property="og:url" content="https://your-domain.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="3WAY | 9e Entertainment" />
      <meta name="twitter:description" content="차세대 K-POP을 이끄는 3WAY의 공식 페이지" />
      <meta name="twitter:image" content="/images/og-image.jpg" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
