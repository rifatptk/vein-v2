import { Inter } from "next/font/google";
import Hero from "@/components/section/Hero";
import DonationProcess from "@/components/section/DonationProcess";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} `}>
      <Hero />
      <DonationProcess />
    </main>
  );
}
