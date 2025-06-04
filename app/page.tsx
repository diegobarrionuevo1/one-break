import { Button } from "@/components/ui/button";
import { IconWhatsapp } from "@/public/icons";
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";


export default function Home() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const whatsappLink = "https://api.whatsapp.com/send/?phone=+5493513853153&text=Hola!+Mi+amigo+Diego+Barrionuevo+es+un+crack!";
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center w-full ">
        <div className="relative  w-full h-screen overflow-hidden ">
          {/* Imagen de placeholder hasta que el video esté listo */}
          {!isVideoReady && (
            <Image
              src="/primer-cuadro.jpg"
              alt="Primer cuadro del video"
              fill
              className="object-cover absolute top-0 left-0 z-10"
            />
          )}
          <video
            src="https://au3p4exjgd78giaz.public.blob.vercel-storage.com/comprimido-l5ffA84PxqWSqnm4InBcFDRujBxs3C.mp4"
            autoPlay
            loop
            muted
            className={`w-full h-full object-cover transition-opacity duration-300 ${isVideoReady ? "opacity-100" : "opacity-0"}`}
            onCanPlay={() => setIsVideoReady(true)}
            playsInline
          />
          <div className="absolute flex flex-col gap-5 items-center justify-center z-50  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
            <div className=" overflow-hidden h-[300px] min-w-[550px] xl:flex xl:items-center xl:justify-center  ">
              <video src="https://au3p4exjgd78giaz.public.blob.vercel-storage.com/Logo-3-vS3LvZwZtD4sdU1D4g0Ux4eqHT3Vr3.webm" autoPlay muted className="w-full  " />
            </div>
            <Button
              variant="outline"
              className="flex text-xl w-[200px] h-[40px] text-white font-bold border-2 border-white  bg-transparent hover:text-white hover:bg-transparent hover:scale-105 transition-all"
              asChild
            >
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <IconWhatsapp className="size-7 fill-green-500" />
                <span className="">Contactar</span>
              </Link>
            </Button>
          </div>
        </div>

      </main>
{/*       <footer className=" w-full  flex items-center justify-center  ">
        <h3 className="bodoni-moda  max-w-4xl text-center"> <span className="text-foreground font-bold">© 2025</span>, This website is made <br className="sm:hidden" />with  <span className="animate-pulse text-foreground">❤️</span> by <a href="https://diegobarrionuevo.com" target="_blank" className="text-foreground font-bold animate-pulse">Diego Barrionuevo</a></h3>
      </footer> */}
    </div>
  );
}
