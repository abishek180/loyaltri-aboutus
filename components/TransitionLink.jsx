"use client"
import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut, animatePageIn } from "@/utils/animations"

const TransitionLink = ({ href, label }) => {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    animatePageIn()
  }, [pathname])

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };
 

  return (
    <button
      type="button"
      className="text-xl text-white hover:text-neutral-700"
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default TransitionLink
