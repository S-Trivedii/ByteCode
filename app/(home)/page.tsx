import { Navbar } from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}

/*
(home) is only for grouping.
(home) is not included in the route URL.

Example:
app/(home)/page.tsx → URL is / (homepage)
app/(auth)/login/page.tsx → URL is /login
*/
