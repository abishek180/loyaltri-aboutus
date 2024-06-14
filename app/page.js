import Link from "next/link";

export default function Home() {
  return (
   <div className="flex justify-center items-center pt-40">
    <Link href="/about" className="text-white text-8xl text-center font-semibold">OUR STORY</Link>
   </div>
  );
}
