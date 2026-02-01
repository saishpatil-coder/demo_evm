import React from "react";

const HeroSection = ({ candidates = [], partyName, partyIcon, partySymbolName = "कमळ" }) =>
{
    const styles = {
        // 1. Main Background - Soft Peach/Beige like the poster
        container: {
            position: "relative",
            backgroundColor: "#fce1b9", // Soft peach color from the image
            minHeight: "auto",
            fontFamily: "'Mukta', 'Segoe UI', sans-serif",
            padding: "30px 15px 30px 15px",
            overflow: "hidden",
            borderRadius:"10px",
            borderBottom: "2px dashed #d97706", // Dashed orange border at bottom
        },

        // 2. Content Wrapper
        contentWrapper: {
            position: "relative",
            zIndex: 1,
            maxWidth: "500px",
            margin: "0 auto",
            textAlign: "center",
        },

        // 3. Party Logo Section - Centered & Large
        logoWrapper: {
            display: "flex",
            justifyContent: "center",
            marginBottom: "15px",
            borderRadius: "50%",

        },
        logoBadge: {
            width: "90px", // Larger logo
            height: "90px",
            display: "flex",
            borderRadius: "50%",

            alignItems: "center",
            justifyContent: "center",
        },
        logoImg: {
            width: "100px",
            height: "100px",
            objectFit: "contain",
            borderRadius: "50%",
            border:"3px solid #484646"
        },
        headerTitle: {
            color: "#374151", // Dark grey text
            fontSize: "26px",
            fontWeight: "1000",
            margin: "5px 0 15px 0",
            textShadow: "0 1px 2px rgba(255,255,255,0.8)",
        },

        // 4. Candidates Grid - Side by Side
        candidatesGrid: {
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "25px",
            flexWrap: "wrap",
        },
        candidateItem: {
            // Logic: If 1 candidate, width 60%. If 2+, width ~45% to fit side-by-side.
            width: candidates.length === 1 ? "220px" : "calc(50% - 10px)",
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            padding: "8px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },

        // Photo Frame - White border effect
        photoFrame: {
            width: "100%",
            aspectRatio: "3 / 4", // Vertical Portrait Ratio
            borderRadius: "5px",
            overflow: "hidden",
            marginBottom: "0px",
            backgroundColor: "#f3f4f6",
            border: "1px solid #e5e7eb",
        },
        photo: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top", // Ensures face is seen
        },

        // Text Styling
        nameText: {
            fontSize: "16px",
            fontWeight: "800",
            color: "#000",
            lineHeight: "1.3",
            marginBottom: "0px",
            textAlign: "center",
            minHeight: "32px", // Ensures alignment
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        roleTag: {
            backgroundColor: "#f3f4f6", // Light grey background
            color: "#4b5563", // Grey text
            fontSize: "12px",
            fontWeight: "600",
            padding: "4px 8px",
            borderRadius: "6px",
            width: "100%",
            boxSizing: "border-box",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textAlign: "center",
        },

        // 5. Footer Message - Red Text
        footerMessage: {
            marginTop: "10px",
            borderTop: "2px dotted #b38f6b", // Dotted separator
            paddingTop: "15px",
            color: "#b91c1c", // Dark Red
            fontSize: "15px",
            fontWeight: "700",
            lineHeight: "1.5",
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.contentWrapper}>

                {/* Party Logo & Name */}
                <div style={styles.logoWrapper}>
                    <div style={styles.logoBadge}>
                        {partyIcon && <img src={partyIcon} alt="Logo" style={styles.logoImg} />}
                    </div>
                </div>
                <h2 style={styles.headerTitle}>{partyName || "भारतीय जनता पार्टी"}</h2>

                {/* Candidates Grid */}
                <div style={styles.candidatesGrid}>
                    {candidates.map((c, i) => (
                        <div key={i} style={styles.candidateItem}>
                            <div style={styles.photoFrame}>
                                {c.photo ? (
                                    <img src={c.photo} alt={c.name} style={styles.photo} />
                                ) : (
                                    <div style={{ height: "100%", background: "#ddd" }}></div>
                                )}
                            </div>
                            <div style={styles.nameText}>{c.name}</div>
                            <div style={styles.roleTag}>{c.role}</div>
                        </div>
                    ))}
                </div>

                {/* Footer Message from Image */}
                <div style={styles.footerMessage}>
                    यांना त्यांचे नाव व {partySymbolName ? partySymbolName : "कमळ"} निशाणी समोरील बटन दाबून मतदानाच्या दिवशी प्रचंड बहुमताने विजयी करा!
                </div>

            </div>
        </div>
    );
};

export default HeroSection;