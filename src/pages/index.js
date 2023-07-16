import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/electrician-pic-4.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
//import next from "next/types";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adrian Pena - servicii de incredere</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justtify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Adrian Pena"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Eu cred in servicii si reparatii de incredere."
                className="!text-6xl text-left"
              />
              <p className="my-4 text-base font-medium">
                Sunt specializat intr-o gama variata de servicii, de la
                electricitate si frigotehnie pana la instalatii sanitare,
                service IT si recuperari de date. Indiferent de provocarea cu
                care va confruntati, sunt aici sa va ofer solutii rapide si
                eficiente.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Biografie <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:contact@adrianpena.ro"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
