"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GNB() {
  const router = useRouter();

  const logoClick = () => {
    router.push("/");
  };

  return (
    <div className={`flex  p-[10px] md h-[60px] border-b border-slate-200`}>
      <button className="md:hidden" onClick={logoClick}>
        <Image
          src="/image/doit-small@2x.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: "auto", height: "100%" }}
        />
      </button>
      <button className="hidden md:block xl:ml-[350px]" onClick={logoClick}>
        <Image
          src="/image/doit-large@2x.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: "auto", height: "100%" }}
        />
      </button>
    </div>
  );
}
