import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Codeswear.com - Wear the code</title>
        <meta name="description" content="Codeswear.com - Wear the code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hey this a codeswear
      <div className="mx-4 bg-slate-500">THis is me</div>
      
    </>
  );
}
