"use client";

import Logo from "@/components/1-logo/logo";
import Header from '@/components/2-header/header'
import Bar from '@/components/3-BarFilter/bar'
import GridCards from "@/components/4-gridCards/gridCards";

import "../styles/globals.css";

export const metadata = {
  title: "Menos conversinha. Mais conversão",
  description:
    "Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio",
};

const Layout = () => {
  return (
    <html lang="pt-br">
      <body>
        <section className="full-background">
          <Logo />
          <Header />
          < Bar />
          <GridCards/>
        </section>
      </body>
    </html>
  );
};

export default Layout;
