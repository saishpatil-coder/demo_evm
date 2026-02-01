import React from "react";

const WhatsAppShare = ({ candidateName, role }) =>
{
    const handleShare = () =>
    {
        // 1. Get the current URL
        const currentUrl = window.location.href;

        // 2. Create a catchy viral message
        const message = `🗳 *डिजिटल मतदान चाचणी २०२६* 🗳\n\nनमस्कार,\nमी माझे मत *${candidateName || "आपल्या लाडक्या उमेदवाराला"}* (${role || "समाजसेवक"}) यांना दिले आहे!\n\nतुम्ही कोणाला मत देणार? 🤔\n\nतुमचा पाठिंबा दर्शवण्यासाठी खालील लिंकवर क्लिक करा आणि आताच मतदान करा! 👇\n\n🔗 ${currentUrl}`;

        // 3. Create the WhatsApp API Link
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

        // 4. Open in new tab
        window.open(whatsappLink, "_blank");
    };

    const styles = {
        container: {
            padding: "0 15px 20px 15px", // Padding around the section
            textAlign: "center",
            fontFamily: "'Segoe UI', 'Mukta', sans-serif",
        },
        shareButton: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#25D366", // Official WhatsApp Green
            color: "#ffffff",
            border: "none",
            borderRadius: "50px", // Pill shape
            padding: "12px 2px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            width: "100%",
            boxShadow: "0 4px 10px rgba(37, 211, 102, 0.4)", // Green Glow
            transition: "transform 0.2s ease",
            textDecoration: "none",
        },
        icon: {
            marginRight: "10px",
            fontSize: "20px",
        }
    };

    return (
        <div style={styles.container}>

                <button onClick={handleShare} style={styles.shareButton}>
                    <span style={styles.icon}>📲</span>
                    व्हॉट्सअ‍ॅपवर शेअर करा
                </button>

        </div>
    );
};

export default WhatsAppShare;