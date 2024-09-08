import Head from "next/head";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Staff from "@/components/Staff";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>InSitu Systems - Accueil</title>
        <meta
          name="description"
          content="Bienvenue sur le site d'InSitu Systems. Découvrez nos solutions innovantes et notre équipe dédiée."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <main
        className="relative bg-white flex justify-center
        items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
      >
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <Solutions />
          <Staff />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
