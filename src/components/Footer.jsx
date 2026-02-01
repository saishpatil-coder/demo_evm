import React from "react";

const Footer = () =>
{
    const styles = {
        // Container: Centered, limited width, nice spacing
        footerContainer: {
            display: "flex",
            justifyContent: "center",
            fontFamily: "'Segoe UI', 'Mukta', sans-serif",
        },
        // The "Alert Box" look (kept the amber theme for consistency)
        alertBox: {
            backgroundColor: "#fffbeb", // Light Amber background
            border: "1px solid #fcd34d", // Golden/Amber border
            padding: "12px 20px",
            display: "flex",
            alignItems: "center", // Vertically center content
            gap: "12px",
            maxWidth: "450px", // Matches the card width
            width: "100%",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        },
        icon: {
            fontSize: "20px",
        },
        textContainer: {
            color: "#92400e", // Dark Amber/Brown text
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "1.4",
            textAlign: "left",
        },
        subText: {
            fontWeight: "400",
            fontSize: "13px"
        }
    };

    return (
        <footer style={styles.footerContainer}>
            <div style={styles.alertBox}>
                {/* Developer Icon */}
                <div style={styles.icon}>👨‍💻</div>

                {/* Text Content */}
                <div style={styles.textContainer}>
                    Developed by Mayur A. Mandhare
                    <br />
                    <span style={styles.subText}>9373058052</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;