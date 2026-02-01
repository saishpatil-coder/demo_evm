import React, { useState } from "react";
import beepSound from "../../assets/vote.mp3";
const CandidateCard = ({ index, name, symbolImg, bgColor }) =>
{
    const [voted, setVoted] = useState(false);

    const playSound = () =>
    {
        // 2. Create a new Audio object and play it
        const audio = new Audio(beepSound);
        audio.play();
    };

    const handleVote = () =>
    {
        if (!voted) {
            playSound();    // 🔊 Play your MP3
            setVoted(true); // 🔒 Lock the button

            // Optional: Reset button after 3 seconds for demo
            setTimeout(() => setVoted(false), 3000);
        }
    };
    const styles = {
        card: {
            display: "flex",
            alignItems: "center",
            // 🟢 Use the dynamic prop here (default to white if missing)
            backgroundColor:  "#ffffff",
            borderRadius: "16px",
            padding: "12px 16px 12px 0",
            // Add a subtle border to make the pastel color pop
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            position: "relative",
            overflow: "hidden",
            transition: "transform 0.2s ease",
        },
        accentStrip: {
            width: "6px",
            height: "100%",
            // Darker accent based on the pastel background
            backgroundColor: "rgba(0,0,0,0.1)",
            position: "absolute",
            left: 0,
            top: 0,
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
        },
        symbolWrapper: {
            width: "55px",
            height: "55px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            border: "1px solid rgba(0,0,0,0.1)",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "15px",
        },
        symbolImg: {
            width: "100%",
            height: "100%",
            objectFit: "contain",
        },
        infoCol: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        nameText: {
            fontSize: "16px",
            fontWeight: "700",
            color: "#1f2937",
            lineHeight: "1.2",
            marginBottom: "2px",
        },
        subText: {
            fontSize: "12px",
            color: "#4b5563", // Slightly darker for contrast on colored bg
            fontWeight: "500",
        },
        voteButton: {
            backgroundColor: voted ? "#10b981" : "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "8px 20px",
            fontSize: "13px",
            fontWeight: "700",
            cursor: voted ? "default" : "pointer",
            boxShadow: voted ? "none" : "0 4px 10px rgba(37, 99, 235, 0.2)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            transition: "background 0.3s ease",
        }
    };

    return (
        <div style={styles.card}>
            {/* Strip */}
            <div style={styles.accentStrip}></div>
            {/* Serial */}
            <div style={styles.serialBadge}>{index}</div>
            {/* Name */}
            <div style={styles.infoCol}>
                <div style={styles.nameText}>{name}</div>
            </div>
            {/* Symbol */}
            <div style={styles.symbolWrapper}>
                {symbolImg ? <img src={symbolImg} alt="symbol" style={styles.symbolImg} /> : <span>?</span>}
            </div>
            {/* Button */}
            <button
            onClick={handleVote}
            style={styles.voteButton}>
                मत 
            </button>
        </div>
    );
};

export default CandidateCard;