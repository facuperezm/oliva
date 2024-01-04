import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Store from "../../public/store-facade.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="container">
      <header className="">
        <AspectRatio ratio={16 / 6} className="w-full mx-auto">
          <div className="h-full w-full absolute z-10 bg-gradient-to-t from-black/80 from-5% via-black/30 to-transparent"></div>
          <Image
            src="/images/store-facade.jpg"
            alt="test"
            fill
            className="object-cover -z-10"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </AspectRatio>
        <div className="flex gap-4 items-center">
          <Avatar className="z-10 -mt-5 w-20 h-20 md:w-28 md:h-28">
            <AvatarImage
              className="md:"
              src="https://github.com/facuperezm.png"
            />
            <AvatarFallback>Oliva</AvatarFallback>
          </Avatar>
          <h1>Oliva - Puerto Iguazú</h1>
        </div>
      </header>
    </main>
  );
}
