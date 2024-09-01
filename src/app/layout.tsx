import "./globals.css"
import Navbar from "./Component/Navbar"
import { Righteous } from '@next/font/google'

const righteous = Righteous({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap'

})

export const metadata = {
  title: "Team Grid Design",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={righteous.className}>
          <Navbar />
        </div>
        {children}
        </body>
    </html>
  );
}
