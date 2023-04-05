import Navbar from "@/components/Navbar";
import "./globals.css";
import QueryWrapper from "@/components/QueryWrapper";

export const metadata = {
  title: "Vein",
  description: "Vein is a free blood donation service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-gray-800">
        <QueryWrapper>
          <header>
            <Navbar />
          </header>
          <div>{children}</div>
        </QueryWrapper>
      </body>
    </html>
  );
}
