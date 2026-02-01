import React from "react";

const Header = () =>
{
    // Define styles as a JavaScript object
    const styles = {
        header: {
            background: "linear-gradient(135deg, #1e3a8a 0%, #4338ca 100%)",
            color: "#ffffff",
            padding: "20px 15px",
            textAlign: "center",
            fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            borderBottom: "4px solid #f59e0b", // Golden/Saffron bottom border
            position: "relative",
            overflow: "hidden",
        },
        topBadge: {
            display: "inline-block",
            backgroundColor: "#f59e0b", // Catchy Orange/Saffron
            color: "#000",
            fontWeight: "bold",
            fontSize: "14px",
            padding: "4px 12px",
            borderRadius: "20px",
            marginBottom: "10px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
        },
        mainTitle: {
            margin: "5px 0 15px 0",
            fontSize: "25px",
            fontWeight: "800",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            lineHeight: "1.2",
        },
        locationContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
        },
        locationPill: {
            backgroundColor: "rgba(255, 255, 255, 0.15)", // Glassmorphism effect
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            padding: "6px 16px",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "6px",
        },
    };

    return (
        <header style={styles.header}>
            {/* Catchy Top Badge for Year */}
            <div style={styles.topBadge}>
                🗳️ जिल्हा परिषद निवडणूक 2026
            </div>

            {/* Main Title - Bigger and Bolder */}
            <h1 style={styles.mainTitle}>
                डिजिटल मतदान प्रात्यक्षिक प्रणाली
            </h1>

            {/* Location with a modern 'Glass' look */}
            <div style={styles.locationContainer}>
                <div style={styles.locationPill}>
                    <span>📍</span>
                    <span>मिरज पंचायत समिती, सांगली</span>
                </div>
            </div>
        </header>
    );
};

export default Header;