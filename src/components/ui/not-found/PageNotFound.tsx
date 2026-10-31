import { titleFont } from "@/src/config/fonts";
import Link from "next/link";
import Image from 'next/image';

export const PageNotFound = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center">
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} text-7xl`}>
          404
        </h2>

        <p className="font-semibold text-xl">
          Whoops! Lo sentimos mucho.
        </p>

        <p className="font-light">
          Puedes regresar al
        </p>

        <Link
          className="font-normal hover:underline transition-all"
          href="/"
        >
          Inicio
        </Link>
      </div>

      <div px-5 p-5>
        <Image
        src="/imgs/starman_750x750.png"
        alt="starman"
        width={500}
        height={500}
        />
      </div>
    </div>
  );
};