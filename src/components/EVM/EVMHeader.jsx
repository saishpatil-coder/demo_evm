import React from "react";

const EVMHeader = ({ title }) =>
{
    const styles = {
        header: {
            textAlign: "left",
            marginBottom: "10px",
            padding: "0 5px",
        },
        label: {
            fontSize: "12px",
            color: "#6b7280",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "1px",
        },
        mainTitle: {
            fontSize: "24px",
            fontWeight: "800",
            color: "#111827",
            margin: "5px 0 0 0",
            lineHeight: "1.2",
            background: "-webkit-linear-gradient(45deg, #1e3a8a, #2563eb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        divider: {
            width: "40px",
            height: "4px",
            backgroundColor: "#f59e0b", // Orange accent line
            marginTop: "8px",
            borderRadius: "2px",
        }
    };

    return (
        <div style={styles.header}>
            <span style={styles.label}>निवडणूक 2026</span>
            <h1 style={styles.mainTitle}>{title}</h1>
            <div style={styles.divider}></div>
        </div>
    );
};

export default EVMHeader;