import React from "react";

const CandidateCard = ({ index, name, symbolImg }) =>
{
    const styles = {
        card: {
            display: "flex",
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderRadius: "16px", // Smooth rounded corners
            padding: "12px 16px 12px 0", // No padding left (for the strip)
            boxShadow: "0 8px 20px rgba(0,0,0,0.06)", // Soft floaty shadow
            position: "relative",
            overflow: "hidden", // Keeps the strip inside
            transition: "transform 0.2s ease",
        },
        // The Colored Strip on the Left
        accentStrip: {
            width: "6px",
            height: "100%", // Full height
            backgroundColor: index % 2 === 0 ? "#f97316" : "#22c55e", // Alternating Orange/Green colors
            position: "absolute",
            left: 0,
            top: 0,
        },
        // Serial Number Badge
        serialBadge: {
            marginLeft: "16px",
            marginRight: "12px",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            backgroundColor: "#f3f4f6",
            color: "#6b7280",
            fontSize: "13px",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        // Symbol Wrapper (Circle)
        symbolWrapper: {
            width: "55px",
            height: "55px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "15px",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
        },
        symbolImg: {
            width: "100%",
            height: "100%",
            objectFit: "contain",
        },
        // Name Section
        infoCol: {
            flex: 1, // Takes all remaining space
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
            color: "#9ca3af",
            fontWeight: "500",
        },
        // The Modern Vote Button
        voteButton: {
            backgroundColor: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "50px", // Pill shape
            padding: "8px 20px",
            fontSize: "13px",
            fontWeight: "700",
            letterSpacing: "0.5px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(37, 99, 235, 0.3)", // Glow effect
            display: "flex",
            alignItems: "center",
            gap: "6px",
        }
    };

    return (
        <div style={styles.card}>
            {/* 1. Accent Strip */}
            <div style={styles.accentStrip}></div>

            {/* 2. Serial Number */}
            <div style={styles.serialBadge}>{index}</div>

            {/* 3. Symbol */}
            <div style={styles.symbolWrapper}>
                {symbolImg ? (
                    <img src={symbolImg} alt="symbol" style={styles.symbolImg} />
                ) : (
                    <span>?</span>
                )}
            </div>

            {/* 4. Name */}
            <div style={styles.infoCol}>
                <div style={styles.nameText}>{name}</div>
                <div style={styles.subText}>उमेदवार</div>
            </div>

            {/* 5. Vote Button */}
            <button style={styles.voteButton}>
                मत
                <span>👉</span>
            </button>
        </div>
    );
};

export default CandidateCard;