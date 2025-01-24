"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GNB() {
  const router = useRouter();

  const logoClick = () => {
    router.push("/");
  };

  return (
    <header className={`flex p-[10px] h-[60px] border-b border-slate-200`}>
      <div
        className="w-[375px]
        md:w-[744px]
        xl:w-[1200px]
        mx-auto"
      >
        <button className="md:hidden" onClick={logoClick}>
          <Image
            src="/image/doit-small@2x.png"
            alt="logo"
            width={71}
            height={40}
          />
        </button>
        <button className="hidden md:block" onClick={logoClick}>
          <Image
            src="/image/doit-large@2x.png"
            alt="logo"
            width={151}
            height={40}
          />
        </button>
      </div>
    </header>
  );
}
