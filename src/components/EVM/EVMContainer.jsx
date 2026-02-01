import React from "react";
import EVMHeader from "./EVMHeader";
import CandidateCard from "./CandidateRow";

const EVMContainer = ({ title, constituency, candidates, cardBgColor = "#ffffff" }) =>
{
    const styles = {
        mainTitle:{
            height:"45px",
            textAlign:"center",
            fontSize:"20px",
            backgroundColor:"#363636",
            color:"white",
            lineHeight:"40px",
            fontWeight:"900"
        },
        // Outer Shell
        container: {
            backgroundColor: "#f9fafb",
            padding: "5px 5px",
            fontFamily: "'Segoe UI', 'Mukta', sans-serif",
            maxWidth: "500px",
            margin: "0 auto 30px auto",
        },
        // The "Card List" Wrapper (Rounded & Shadowed)
        listWrapper: {
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            marginTop: "15px",
            borderRadius: "16px", // Rounded corners for the whole table
            overflow: "hidden",
            border: "2px solid black",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            backgroundColor: "#fff", // Background for the wrapper
        },
        // 🟢 NEW: The Header Row Styles
        headerRow: {
            display: "flex",
            alignItems: "center",
            backgroundColor: "#e5e7eb", // Darker grey for header
            padding: "10px 16px 10px 0", // Matching padding of cards
            borderBottom: "2px solid #423f3f",            fontSize: "13px",
            fontWeight: "700",
            color: "#000000",
        },
        // Column Matchers (Must match CandidateCard widths)
        colKr: {
            width: "30px",
            marginLeft: "16px",
            marginRight: "12px",
            textAlign: "center",
        },
        colNav: {
            flex: 1, // Takes remaining space (Same as infoCol)
            paddingLeft: "5px",
        },
        colPhoto: {
            width: "50px",
            marginRight: "10px",
            textAlign: "center",
        },
        colChinh: {
            width: "50px",
            marginRight: "15px",
            textAlign: "center",
        },
        colMat: {
            minWidth: "70px",
            textAlign: "center",
        }
    };

    return (
        <section style={styles.container}>
            <EVMHeader title={title} constituency={constituency} />

            <div style={styles.listWrapper}>
                <h1 style={styles.mainTitle}>{title}</h1>

                {/* 🟢 The New Table Header */}
                <div style={styles.headerRow}>
                    {/* Invisible spacer for the accent strip (6px) */}
                    <div style={{ width: "6px" }}></div>

                    <div style={styles.colKr}>क्र</div>
                    <div style={styles.colNav}>उमेदवार</div>
                    <div style={styles.colPhoto}>फोटो</div>
                    <div style={styles.colChinh}>चिन्ह</div>
                    <div style={styles.colMat}>मत</div>
                </div>

                {/* Candidate List */}
                {candidates.map((c, index) => (
                    <CandidateCard
                        key={c.id}
                        index={index + 1}
                        name={c.name}
                        isDummy={c.isDummy} // 🟢 Pass this prop
                        symbolImg={c.symbolImg}
                        candidateImg={c.candidateImg}
                        bgColor={cardBgColor}
                        isLast={index === candidates.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};

export default EVMContainer;