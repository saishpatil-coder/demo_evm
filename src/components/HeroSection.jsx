import React from "react";

const HeroSection = () =>
{
    const styles = {
        // 1. The main container with a split background
        container: {
            position: "relative",
            backgroundColor: "#f8f9fa", // Light grey app background
            minHeight: "400px",
            fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            overflow: "hidden",
            paddingBottom: "30px",
        },
        // 2. The Orange "Brand" Curve at the top
        topCurve: {
            backgroundColor: "#ff9933", // BJP Saffron
            height: "140px",
            width: "100%",
            borderBottomLeftRadius: "40% 20px", // Subtle curve
            borderBottomRightRadius: "40% 20px",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
        },
        // 3. Content Wrapper (Floats on top of the curve)
        contentWrapper: {
            position: "relative",
            zIndex: 1,
            padding: "20px 15px",
            maxWidth: "500px", // Mobile-focused max width
            margin: "0 auto",
        },
        // Header Content
        headerRow: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            gap: "12px",
        },
        logoBadge: {
            backgroundColor: "#fff",
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        },
        logoImg: {
            width: "40px",
            height: "40px",
            objectFit: "contain",
        },
        headerTitle: {
            color: "#fff",
            fontSize: "24px",
            fontWeight: "800",
            margin: 0,
            textShadow: "0 2px 4px rgba(0,0,0,0.2)",
        },

        // 4. The Main White Card
        mainCard: {
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "20px 15px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)", // Soft, premium shadow
            textAlign: "center",
        },

        // Candidates Section
        candidatesGrid: {
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            marginBottom: "20px",
        },
        candidateItem: {
            width: "calc(50% - 6px)", // Perfectly split half width
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        // Modern "Squircle" or Rounded Photo styling
        photoFrame: {
            width: "100%",
            aspectRatio: "1 / 1.1", // Slightly taller than square
            borderRadius: "15px",
            overflow: "hidden",
            marginBottom: "10px",
            position: "relative",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.05)", // Inner border
        },
        photo: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
        },
        nameText: {
            fontSize: "15px",
            fontWeight: "700",
            color: "#1f2937",
            lineHeight: "1.3",
            marginBottom: "5px",
            minHeight: "40px", // Aligns names if lengths differ
            display: "flex",
            alignItems: "center", // Vertically center the text
            justifyContent: "center",
        },
        roleTag: {
            backgroundColor: "#e0f2fe", // Light blue tag
            color: "#0369a1", // Dark blue text
            fontSize: "11px",
            fontWeight: "600",
            padding: "4px 10px",
            borderRadius: "20px", // Pill shape
            width: "100%",
            boxSizing: "border-box",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },

        // 5. Footer "Action" Box
        actionBox: {
            marginTop: "10px",
            backgroundColor: "#fff7ed", // Very light orange
            border: "1px solid #ffedd5",
            borderRadius: "12px",
            padding: "15px",
        },
        actionText: {
            color: "#c2410c", // Deep orange/red
            fontSize: "13px",
            fontWeight: "600",
            lineHeight: "1.5",
            marginBottom: "8px",
        },
        voteButton: {
            display: "inline-block",
            backgroundColor: "#ea580c", // Strong CTA color
            color: "#fff",
            padding: "8px 20px",
            borderRadius: "50px",
            fontSize: "13px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            boxShadow: "0 4px 12px rgba(234, 88, 12, 0.3)",
        }
    };

    return (
        <div style={styles.container}>
            {/* Background Shape */}
            <div style={styles.topCurve}></div>

            <div style={styles.contentWrapper}>
                {/* Header */}
                <div style={styles.headerRow}>
                    <div style={styles.logoBadge}>
                        <img
                            src="https://imgs.search.brave.com/5YTXRjFIBUe_Gv09JPcytyG4im61ZyfM4a-Z8lJeCZI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2JqcC95ZWxsb3ct/Y2lyY2xlLWJqcC1s/b2dvLXRyYW5zcGFy/ZW50LTAucG5n"
                            alt="Logo"
                            style={styles.logoImg}
                        />
                    </div>
                    <h2 style={styles.headerTitle}>भारतीय जनता पार्टी</h2>
                </div>

                {/* Main Card */}
                <div style={styles.mainCard}>
                    <div style={styles.candidatesGrid}>

                        {/* Candidate 1 */}
                        <div style={styles.candidateItem}>
                            <div style={styles.photoFrame}>
                                <img
                                    src="https://randomuser.me/api/portraits/women/65.jpg"
                                    alt="Candidate"
                                    style={styles.photo}
                                />
                            </div>
                            <div style={styles.nameText}>सौ. राधिका प्रशांत गोरे</div>
                            <div style={styles.roleTag}>आवळवाडी जिल्हा परिषद</div>
                        </div>

                        {/* Candidate 2 */}
                        <div style={styles.candidateItem}>
                            <div style={styles.photoFrame}>
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="Candidate"
                                    style={styles.photo}
                                />
                            </div>
                            <div style={styles.nameText}>श्री. जयकांत रामेश्वर तुपे</div>
                            <div style={styles.roleTag}>आवळवाडी पंचायत समिती</div>
                        </div>

                    </div>

                    {/* Footer CTA */}
                    <div style={styles.actionBox}>
                        <div style={styles.actionText}>
                            विकास कामांसाठी आणि उज्ज्वल भविष्यासाठी आपले मत नक्की द्या!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;