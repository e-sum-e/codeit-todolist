import type { Metadata } from "next";
import "./globals.css";
import GNB from "./component/GNB";

export const metadata: Metadata = {
  title: "To do list",
  description: "할 일 목록을 관리하는 To Do 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GNB />
        <section
          className="flex flex-col m-[auto] p-[16px] md:p-[24px] xl:px-0
        w-[375px]
        md:w-[744px]
        xl:w-[1200px]"
        >
          {children}
        </section>
      </body>
    </html>
  );
}
