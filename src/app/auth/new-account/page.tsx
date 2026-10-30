import Image from "next/image";
import { titleFont } from "../../../config/fonts";

export default function Home() {
  return (
    <div>
      <h1 className={titleFont.className}>Hola mundo</h1>
      <h1>New Account</h1>
    </div>
  );
}
