import React from "react";

const Header = ({ electionName, loc }) =>
{

    // WhatsApp Share Logic
    const handleShare = () =>
    {
        const currentUrl = window.location.href;
        const message = `🗳 *डिजिटल मतदान चाचणी २०२६* 🗳\n\nमी मतदान केले आहे! तुम्ही कोणाला मत देणार? 🤔\n\nतुमचा पाठिंबा दर्शवण्यासाठी खालील लिंकवर क्लिक करा!\n\n🔗 ${currentUrl}`;
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, "_blank");
    };

    const styles = {
        headerContainer: {
            width: "100%",
            fontFamily: "'Segoe UI', 'Mukta', sans-serif",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        },
        // 1. Top Orange Bar
        topBar: {
            backgroundColor: "#fbbf24", // Bright Orange/Yellow
            color: "#000",
            textAlign: "center",
            padding: "12px 10px",
            fontSize: "18px",
            fontWeight: "800",
            borderBottom: "1px solid #d97706",
        },
        // 2. Middle Cream Bar (Flexbox)
        middleBar: {
            backgroundColor: "#fffbeb", // Light Cream
            padding: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // Pushes items to Left, Center, Right
            gap: "10px",
        },
        // Left: Location Box
        locationBox: {
            backgroundColor: "#ffffff",
            border: "1px solid #d1d5db",
            padding: "8px 12px",
            borderRadius: "4px", // Sharp corners like image
            fontWeight: "700",
            fontSize: "14px",
            color: "#000",
            minWidth: "80px",
            textAlign: "center",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
        },
        // Center: Title
        centerTitle: {
            fontSize: "20px",
            fontWeight: "900",
            color: "#000",
            textAlign: "center",
            flex: 1, // Takes up available space
        },
        // Right: Share Button
        shareBtn: {
            backgroundColor: "#22c55e", // WhatsApp Green
            color: "#ffffff",
            border: "none",
            padding: "8px 15px",
            borderRadius: "6px",
            fontWeight: "700",
            fontSize: "14px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        },
        // 3. Bottom Blue Instruction Bar
        bottomBar: {
            backgroundColor: "#1e3a8a", // Dark Blue
            color: "#ffffff",
            textAlign: "center",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "600",
        }
    };

    return (
        <header style={styles.headerContainer}>
            {/* 1. Top Orange Strip */}
            <div style={styles.topBar}>
                {electionName || "जिल्हा परिषद व पंचायत समिती निवडणूक 2026"}
            </div>

            {/* 2. Middle Control Bar */}
            <div style={styles.middleBar}>

                {/* Left: Location */}
                <div style={styles.locationBox}>
                    {loc || "आवळवाडी"}
                </div>

                {/* Center: Title */}
                <div style={styles.centerTitle}>
                    डेमो मतदान यंत्र
                </div>

                {/* Right: WhatsApp Share Button */}
                <button onClick={handleShare} style={styles.shareBtn}>
                    <span>💬</span> शेअर
                </button>
            </div>

            {/* 3. Bottom Blue Instruction Strip */}
            <div style={styles.bottomBar}>
               डेमो मतदानासाठी योग्य बटनाचा वापर करा
            </div>
        </header>
    );
};

export default Header;