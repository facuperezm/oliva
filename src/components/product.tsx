import Image from "next/image";

export default function Product({
  imgsrc,
  title,
}: {
  imgsrc: string;
  title: string;
}) {
  return (
    <article className="shadow-lg rounded-lg p-4 space-y-2">
      <Image
        width={300}
        height={300}
        className="rounded-sm"
        src={imgsrc}
        alt="test"
      />
      <h2 className="text-lg leading-snug">{title}</h2>
      <span className="font-bold">$10.00</span>
    </article>
  );
}
