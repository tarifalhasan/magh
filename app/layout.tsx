import { pacifico, poppins } from "@/utils/Fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${pacifico.variable}`}>
        {children}
      </body>
    </html>
  );
}
