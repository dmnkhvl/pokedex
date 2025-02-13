import { Link } from "react-router"

export default function Banner() {
  return (
    <Link to="/" className="block">
      <div className="relative w-full rounded-xl overflow-hidden outline outline-default border-b-card border-secondary h-48 md:h-64 lg:h-80 flex justify-center items-center bg-[url('/banner.png')] bg-cover bg-center"></div>
    </Link>
  )
}
