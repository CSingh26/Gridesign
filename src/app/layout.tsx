import "./globals.css"
import Navbar from "./Component/Navbar"
import { Ubuntu } from '@next/font/google'

const ubuntu = Ubuntu({
  weight: ['400', '700'],
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
        <div className={ubuntu.className}>
          <Navbar />
        </div>
        {children}
        </body>
    </html>
  );
}
