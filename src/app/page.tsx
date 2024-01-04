import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Store from "../../public/store-front.webp";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main>
      <header className="h-10">
        <div>
          <AspectRatio className="relative" ratio={16 / 9}>
            <Image src={Store} alt="test" className="object-cover" />
          </AspectRatio>
          <div className="z-100 absolute inset-0 bg-gradient-to-t from-black from-5% via-black/30 to-transparent"></div>
        </div>

        <Avatar className="-mt-6 ml-5 w-24 h-24">
          <AvatarImage src="https://github.com/facuperezm.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </header>
    </main>
  );
}
