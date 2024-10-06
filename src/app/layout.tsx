import "./globals.css";
import Navbar from "./Component/NavbarComponent/Navbar";
import Loader from "./Component/LoadingComponent/loading"; 

export const metadata = {
  title: "Team Grid Design - Crafting Innovative Solutions",
  description:
    "At Team Grid Design LLP, we blend creativity with craftsmanship to deliver exceptional branding, design, wedding stationery, and event design services. From conceptualization to execution, we craft experiences that leave a lasting impression. Specializing in corporate branding, weddings, and integrated printing services, we are your ultimate destination for impactful designs and video animations.",
  keywords:
    "Team Grid Design LLP, branding, design, wedding stationery, event design, corporate branding, printing services, video animations, creative services, branding agency, design firm, event planning",
  author: "Team Grid Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Loader />
        <Navbar />
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}