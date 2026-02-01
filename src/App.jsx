import MobileContainer from "./components/MobileContainer";
import Header from "./components/Header";
import ActionButton from "./components/ActionButton";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import EVMContainer from "./components/EVM/EVMContainer";
import Footer from "./components/Footer";

import panchayatCandidates from "./data/panchatayatCandidates";
import zilhaCandidates from "./data/zilhaCandidates";

function App()
{
  return (
    <MobileContainer>
      <Header />
      <HeroSection />
      <InfoSection />

      <EVMContainer
        title="पंचायत समिती निवडणूक"
        constituency="मिरज"
        candidates={panchayatCandidates}
      />

      <EVMContainer
        title="जिल्हा परिषद निवडणूक"
        constituency="मिरज"
        candidates={zilhaCandidates}
      />

      <Footer />
    </MobileContainer>
  );
}

export default App;
