import React from "react";

const Footer = () =>
{
    const styles = {
        // Container: Centered, limited width, nice spacing
        footerContainer: {
            padding: "20px",
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            fontFamily: "'Segoe UI', 'Mukta', sans-serif",
        },
        // The "Alert Box" look
        alertBox: {
            backgroundColor: "#fffbeb", // Light Amber background
            border: "1px solid #fcd34d", // Golden/Amber border
            borderRadius: "12px",
            padding: "12px 20px",
            display: "flex",
            alignItems: "flex-start", // Aligns icon with top line of text
            gap: "12px",
            maxWidth: "450px", // Matches the card width from previous steps
            width: "100%",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        },
        icon: {
            fontSize: "20px",
            marginTop: "2px", // Slight adjustment to align with text
        },
        textContainer: {
            color: "#92400e", // Dark Amber/Brown text for readability
            fontSize: "13px",
            lineHeight: "1.5",
            textAlign: "left",
        },
        boldText: {
            fontWeight: "700",
            display: "block", // Forces new line
            marginBottom: "2px",
        },
        subText: {
            opacity: 0.9,
            fontSize: "12px",
        }
    };

    return (
        <footer style={styles.footerContainer}>
            <div style={styles.alertBox}>
                {/* Warning Icon */}
                <div style={styles.icon}>⚠️</div>

                {/* Text Content */}
                <div style={styles.textContainer}>
                    <span style={styles.boldText}>
                        ही प्रणाली अधिकृत निवडणुकीसाठी नाही.
                    </span>
                    <span style={styles.subText}>
                        केवळ प्रात्यक्षिक व जनजागृतीसाठी तयार केली आहे.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;