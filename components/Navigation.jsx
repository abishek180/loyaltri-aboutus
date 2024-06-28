import TransitionLink from "./TransitionLink"

const Navigation = () => {
  return (
    <nav className="w-full p-5 flex flex-row place-items-center justify-between">
      <div className="flex gap-5">
      <TransitionLink href="/" label="Home" />
        <TransitionLink href="/about" label="About" />
      </div>
    </nav>
  )
}

export default Navigation
