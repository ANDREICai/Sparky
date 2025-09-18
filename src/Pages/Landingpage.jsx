import SmoothScrollWrapper from "../component/SmoothScrollWrapper";
import Section1 from "../parts/LP/Section1";
import Section2 from "../parts/LP/Section2";
import Section3 from "../parts/LP/Section3";
import Section4 from "../parts/LP/Section4";
import Section5 from "../parts/LP/Section5";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

export default function Landingpage() {
  return (
        <SmoothScrollWrapper>
            <Header/>
      <Section1 />
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
                       <Footer/>
</SmoothScrollWrapper>
  );
}
