import Image from "next/image";
import Wisetree from "./components/wistetree";
import SectionTwo from "./components/section2";
import SectionThree from "./components/section3";
import SectionFour from "./components/section4";
import Services from "./components/services";
import ThroughoutFlow from "./components/throughoutflow";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
      <Wisetree />
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Services/>
      <ThroughoutFlow/>
      <Footer/>
    </>
    
  );
}
