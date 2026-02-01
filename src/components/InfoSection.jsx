import React from "react";

const InfoSection = ({ tarikh, vel }) =>
{
    const styles = {
        section: {
            padding: "20px 0px",
            backgroundColor: "#f3f4f6", // Light grey background to separate from Hero
            fontFamily: "'Segoe UI', 'Mukta', sans-serif",
        },
        card: {
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            padding: "25px 20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            maxWidth: "500px",
            margin: "0 auto",
            border: "1px solid #e5e7eb",
        },
        title: {
            textAlign: "center",
            color: "#1f2937",
            fontSize: "20px",
            fontWeight: "700",
            marginBottom: "25px",
            position: "relative",
            paddingBottom: "10px",
            borderBottom: "2px solid #ff9933", // Saffron underline
            display: "inline-block",
            left: "50%",
            transform: "translateX(-50%)",
        },
        row: {
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            lastChild: { marginBottom: 0 }, // Pseudo-logic for JS styles
        },
        iconBox: {
            width: "45px",
            height: "45px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            marginRight: "15px",
            flexShrink: 0, // Prevents icon from squishing on small phones
        },
        // Distinct colors for each icon background
        iconDate: { backgroundColor: "#fee2e2", border: "1px solid #fecaca" }, // Red-ish
        iconTime: { backgroundColor: "#e0f2fe", border: "1px solid #bce3eb" }, // Blue-ish
        iconLoc: { backgroundColor: "#dcfce7", border: "1px solid #bbf7d0" }, // Green-ish

        infoContent: {
            display: "flex",
            flexDirection: "column",
        },
        label: {
            fontSize: "12px",
            textTransform: "uppercase",
            color: "#6b7280",
            fontWeight: "600",
            letterSpacing: "0.5px",
            marginBottom: "2px",
        },
        value: {
            fontSize: "16px",
            fontWeight: "700",
            color: "#111827",
            lineHeight: "1.3",
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.card}>
                <h3 style={styles.title}>महत्वाच्या सूचना</h3>

                {/* Date Row */}
                <div style={styles.row}>
                    <div style={{ ...styles.iconBox, ...styles.iconDate }}>📅</div>
                    <div style={styles.infoContent}>
                        <span style={styles.label}>मतदानाची तारीख</span>
                        <span style={styles.value}>{tarikh || "15 मार्च 2026"}</span>                    </div>
                </div>

                {/* Time Row */}
                <div style={styles.row}>
                    <div style={{ ...styles.iconBox, ...styles.iconTime }}>⏰</div>
                    <div style={styles.infoContent}>
                        <span style={styles.label}>मतदानाची वेळ</span>
                        <span style={styles.value}>{vel || "सकाळी 7 ते सायंकाळी 6"}</span>                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;