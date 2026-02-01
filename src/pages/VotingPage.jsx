import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

// Components
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import EVMContainer from "../components/EVM/EVMContainer";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import WhatsAppShare from "../components/Whatsapp";

const VotingPage = () =>
{
  const { electionId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>
  {
    const fetchData = async () =>
    {
      if (!electionId) return;
      const docRef = doc(db, "elections", electionId);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        setData(snap.data());
        console.log(snap.data())
      }

      setLoading(false);
    };
    fetchData();
  }, [electionId]);

  // --- HELPER: Generate the Row Data for EVM ---
  const generateEVMRows = (candidateInfo, partyIcon) =>
  {
    const rows = [];
    // Loop through total rows (e.g., 1 to 10)
    for (let i = 1; i <= candidateInfo.totalRows; i++) {
      if (i === candidateInfo.myPosition) {
        // THIS IS OUR GUY
        rows.push({
          id: i,
          name: candidateInfo.name,
          candidateImg: candidateInfo.photo,
          symbolImg: partyIcon, // Use the shared party icon
          isDummy: false
        });
      } else {
        // THIS IS A BLANK/DUMMY ROW
        rows.push({
          id: i,
          name: "",
          isDummy: true
        });
      }
    }
    return rows;
  };

  if (loading) return <div style={{ padding: "20px", textAlign: "center" }}>Loading Election Data...</div>;
  if (!data) return <div style={{ padding: "20px", textAlign: "center" }}>Invalid Link</div>;
  const mainCandidate = data?.candidateList?.find(c => !c.isDummy);
  return (
    <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh" }}>

      {/* 1. Header with dynamic location/title */}
      <Header
        electionName={data.title}
        loc={data.constituency}
      />

      {/* 2. Hero Section - Needs to handle list of candidates */}
      {/* We pass the whole list so it can show all faces */}
      <div className="container"
      style={{
        margin:"15px 8px",
        marginBottom:"8px"
      }}
      >
        <HeroSection
          partySymbolName={data.partySymbolName}
          candidates={data.candidateList}
          partyName={data.partyName}
          partyIcon={data.partyIcon}
        />
        <InfoSection
          tarikh={data.electionDate}
          vel={data.electionTime}
        />

        {/* 3. Render an EVM for EACH Candidate */}
        {data.candidateList.map((c, index) => (
          <div key={index}>
            {/* We generate the rows specifically for this candidate's settings */}
            <EVMContainer
              title={c.role || `Ballot Unit ${index + 1}`} // "Zilha Parishad" or "Ward 1"
              constituency={data.constituency}
              candidates={generateEVMRows(c, data.partyIcon)}
              cardBgColor={index % 2 !== 0 ? "#eebec1" : "#eff6ff"} // Alternate colors
            />
          </div>
        ))}

        <WhatsAppShare
          candidateName={mainCandidate?.name}
          role={mainCandidate?.role}
        />
        <Footer />
      </div>
    </div>
  );
};

export default VotingPage;