import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* アプリケーション全体にフォントが適用される */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
