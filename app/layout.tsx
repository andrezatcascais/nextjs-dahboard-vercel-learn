import '@/app/ui/global.css';
import { popp } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${popp.className} antialiased`}>{children}</body>
    </html>
  );
}