import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Store from "../../public/store-facade.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Product from "@/components/product";
import WhatsApp from "@/components/icons/whatsapp";
import Location from "@/components/icons/location";
import Link from "next/link";
import Instagram from "@/components/icons/instagram";

export default function Home() {
  return (
    <>
      <header className="bg-green-100-100/30">
        <AspectRatio ratio={16 / 8} className="w-full mx-auto">
          <div className="h-full w-full absolute z-10 bg-gradient-to-t from-black/80 from-5% via-black/30 to-transparent"></div>
          <Image
            src="/images/oliva.jpeg"
            alt="test"
            fill
            className="object-cover z-10"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </AspectRatio>
        <div className="flex gap-4 items-center container px-2 bg-lime-100/20 my-2">
          <Avatar className="z-10 -mt-5 w-28 h-28 md:w-30 md:h-30 border-4 border-white">
            <AvatarImage className="md:" src="/images/oliva-logo.jpeg" />
            <AvatarFallback>Oliva</AvatarFallback>
          </Avatar>
          <div className="space-y-2 items-center w-full">
            <div className="flex justify-between">
              <h1 className="text-2xl from-stone-800 font-extrabold leading-tight">
                Oliva
              </h1>
              <div className="flex gap-2">
                <Link href="https://wa.me/543757407400">
                  <div className="size-8 text-white bg-lime-500 hover:bg-lime-600 transition-all p-1.5 rounded-full">
                    <WhatsApp className=" text-white" />
                  </div>
                </Link>
                <Link href="https://instagram.com/olivaiguazu">
                  <div className="size-8 text-white bg-lime-500 hover:bg-lime-600 transition-all p-[1px] rounded-full">
                    <Instagram className=" text-white" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Location className="w-4 h-4 text-green-300" />
              <Link href="https://maps.app.goo.gl/CVmgNCr6avke4xuC7">
                <h2 className="text-lime-500 leading-tight hover:underline">
                  Horacio Quiroga 604, Puerto Iguazú
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2">
          <Product imgsrc="/images/sandui-ham-and-cheese.jpeg" />
          <Product imgsrc="/images/sandui-mortadela.jpeg" />
          <Product imgsrc="/images/sandui-milanesa.jpeg" />
          <Product imgsrc="/images/sandui-salami.jpeg" />
        </section>
      </main>
      <footer></footer>
    </>
  );
}
