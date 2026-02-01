import React, { useState } from "react";
import beepSound from "../../assets/vote.mp3";
import playErrorSound from "../../assets/error";

const CandidateCard = ({ index, name, symbolImg, candidateImg, bgColor, isLast, isDummy }) =>
{
    const [voted, setVoted] = useState(false);

    const playSound = () =>
    {
        const audio = new Audio(beepSound);
        audio.play();
    };
    const handleVote = () =>{
        if(isDummy){
            alert("ही एक रिक्त जागा आहे. कृपया खरे उमेदवार निवडा.");
            playErrorSound();
            setVoted(true);
            setTimeout(() => setVoted(false), 3000);

            return;        }
        if (!voted) {
            playSound();
            setVoted(true);
            setTimeout(() => setVoted(false), 3000);
        }
    };

    const styles = {
        card: {
            display: "flex",
            alignItems: "center",
            backgroundColor: bgColor || "#ffffff",
            padding: "15px 16px 15px 0",
            position: "relative",
            borderBottom: isLast ? "none" : "1px solid rgba(0,0,0,0.1)",
            transition: "background 0.2s ease",
            // If it's a dummy row, we can make it look slightly "faded" or just normal
            opacity: isDummy ? 0.8 : 1,
        },
        serialBadge: {
            marginLeft: "16px",
            marginRight: "12px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            color: "#333",
            fontSize: "14px",
            fontWeight: "800",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255,255,255,0.5)",
            flexShrink: 0,
        },
        infoCol: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: "10px",
            minHeight: "40px", // Maintains height even if text is empty
        },
        nameText: {
            fontSize: "16px",
            fontWeight: "700",
            color: "#1f2937",
            lineHeight: "1.45",
        },
        photoWrapper: {
            width: "50px",
            height: "50px",
            borderRadius: "8px",
            // 🟢 HIDDEN IF DUMMY
            visibility: isDummy ? "hidden" : "visible",
            overflow: "hidden",
            marginRight: "10px",
            border: isDummy ? "none" : "1px solid rgba(0,0,0,0.1)",
            backgroundColor: isDummy ? "transparent" : "#f3f4f6",
            flexShrink: 0,
        },
        photoImg: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        symbolWrapper: {
            width: "50px",
            height: "50px",
            borderRadius: "8px",
            // 🟢 HIDDEN IF DUMMY
            visibility: isDummy ? "hidden" : "visible",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "15px",
            flexShrink: 0,
        },
        symbolImg: {
            width: "100%",
            height: "100%",
            objectFit: "contain",
        },
        voteButton: {
            backgroundColor: voted ? isDummy ? "#ff0000" : "#10b981" : "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "8px 16px",
            fontSize: "13px",
            fontWeight: "700",
            cursor: voted ? "default" : "pointer",
            boxShadow: voted ? "none" : "0 4px 10px rgba(37, 99, 235, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            transition: "background 0.3s ease",
            minWidth: "60px",
        }
    };

    return (
        <div style={styles.card}>
            <div style={styles.accentStrip}></div>
            <div style={styles.serialBadge}>{index}</div>

            <div style={styles.infoCol}>
                {/* Render name only if NOT dummy */}
                <div style={styles.nameText}>{!isDummy ? name : ""}</div>
            </div>

            {/* Photo (Hidden if dummy via styles) */}
            <div style={styles.photoWrapper}>
                {!isDummy && candidateImg ? <img src={candidateImg} alt="candidate" style={styles.photoImg} /> : null}
            </div>

            {/* Symbol (Hidden if dummy via styles) */}
            <div style={styles.symbolWrapper}>
                {!isDummy && symbolImg ? <img src={symbolImg} alt="symbol" style={styles.symbolImg} /> : null}
            </div>

            {/* Button always visible to simulate real EVM */}
            <button onClick={handleVote} style={styles.voteButton}>
                मत
            </button>
        </div>
    );
};

export default CandidateCard;