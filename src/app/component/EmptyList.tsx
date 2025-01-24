import Image from "next/image";

interface Props {
  smallImageUrl: string;
  largeImageUrl: string;
  description: string;
  alt: string;
}

export default function EmptyList({
  smallImageUrl,
  largeImageUrl,
  description,
  alt,
}: Props) {
  return (
    <div className="flex flex-col items-center w-[fit-content] m-[auto]">
      <div className="md:hidden">
        <Image src={smallImageUrl} alt="empty-todo" width={120} height={120} />
      </div>
      <div className="hidden md:block">
        <Image src={largeImageUrl} alt={alt} width={240} height={240} />
      </div>
      <div
        className={`font-bold-16 text-slate-400 text-center whitespace-pre-line`}
      >
        {description}
      </div>
    </div>
  );
}
