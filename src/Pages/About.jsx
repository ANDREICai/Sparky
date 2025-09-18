import SmoothScrollWrapper from "../component/SmoothScrollWrapper";
import Section12 from "../parts/About/Section12";
import Section13 from "../parts/About/Section13";
import Section14 from "../parts/About/Section14";
import Footer from "../parts/Footer";
import Header from "../parts/Header";

export default function About(){



    return(
        <SmoothScrollWrapper>
                <Header/>
                <Section12/>
                <Section14/>
                 <Section13/>
                 <Footer/>
        </SmoothScrollWrapper>

    )
}