import Image from "next/image"

function Header() {
  return (
    <header className="bg-[#fff4f0] py-8 grid grid-cols-3 items-center justify-center">
      <div>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <Image
          className="w-10 h-10 rounded-full"
          src={"/RN_logo.png"}
          alt="RN Rituals Logo"
          width={250}
          height={250}
        />
        <p className="text-center font-bold">R'N Rituals</p>
      </div>
      <div></div>
    </header>
  )
}

export default Header