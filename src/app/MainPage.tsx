"use client";

import tw from "tailwind-styled-components";
import About from "./About";
import Footer from "./Footer";
import Career from "./career/Career";
import { ClickEventHeader } from "./client/ClickEventHeader";
import Header from "./components/Header";
import Overview from "./overview/page";
import Skills from "./skills/Skills";

export const SectionTitle = tw.h1`w-full text-[1.5rem] font-bold text-black dark:text-white py-2 font-SB_Aggro_B sm:text-[2.5rem] sm:py-4`;
export const AreaLine = tw.div`w-full border-b-2 border-[#228b22] dark:border-white`;
export const RowWrap = tw.div`flex items-center gap-2`;
const MainContainer = tw.div`relative h-[100dvh] overflow-y-auto scroll-smooth bg-[#f8f8f8] dark:bg-[#171717]`;

const MainPage = () => {
  return (
    <MainContainer>
      <ClickEventHeader />
      <div id="top" />
      <Header />
      <Overview />
      <About />
      <Skills />
      <Career />
      <Footer />
    </MainContainer>
  );
};
export default MainPage;
