import LaptopModel from "@/components/LaptopModel";
import Link from "next/link";

export default function Home() {
  return (
   <div className="flex flex-col justify-center items-center pt-40">
    <Link href="/about" className="text-white text-8xl text-center font-semibold">OUR STORY</Link>
    <section className="relative bg-gray-900">
    <div className="sticky top-0 h-screen flex justify-center items-center">
    <LaptopModel/>
    </div>
    </section>
   </div>
  );
}
