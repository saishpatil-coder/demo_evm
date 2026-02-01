// import MobileContainer from "./components/MobileContainer";
// import Header from "./components/Header";
// import ActionButton from "./components/ActionButton";
// import HeroSection from "./components/HeroSection";
// import InfoSection from "./components/InfoSection";
// import EVMContainer from "./components/EVM/EVMContainer";
// import Footer from "./components/Footer";

// import panchayatCandidates from "./data/panchatayatCandidates";
// import zilhaCandidates from "./data/zilhaCandidates";

// function App()
// {
//   return (
//     <MobileContainer>
//       <Header />
//       <HeroSection />
//       <InfoSection />

//       <EVMContainer
//         title="पंचायत समिती निवडणूक"
//         constituency="मिरज"
//         cardBgColor="#edd2d4"
//         candidates={panchayatCandidates}
//       />

//       <EVMContainer
//         title="जिल्हा परिषद निवडणूक"
//         constituency="मिरज"
//         cardBgColor="#d5e2f4"
//         candidates={zilhaCandidates}
//       />

//       <Footer />
//     </MobileContainer>
//   );
// }

// export default App;
// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel"; // Client uses this
import VotingPage from "./pages/VotingPage"; // The link they share
import AnalyticsTracker from "./components/AnalyticsTracker";

function App()
{
  return (
    <Router>
      <AnalyticsTracker/>
      <Routes>
        {/* The Client logs in here to create new elections */}
        <Route path="/admin" element={<AdminPanel />} />

        {/* This is the dynamic link: ID changes for every customer */}
        <Route path="/vote/:electionId" element={<VotingPage />} />
      </Routes>
    </Router>
  );
}
export default App