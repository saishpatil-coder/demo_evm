import React from "react";
import EVMHeader from "./EVMHeader";
import CandidateCard from "./CandidateRow";

const EVMContainer = ({ title, constituency, candidates, cardBgColor = "#ffffff" }) =>
{
    const styles = {
        container: {
            backgroundColor:cardBgColor, // Keep main background neutral/grey
            padding: "20px 15px",
            fontFamily: "'Segoe UI', 'Mukta', sans-serif",
            maxWidth: "500px",
            margin: "0 auto 30px auto", // Added bottom margin for spacing between two EVMs
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
        },
        listWrapper: {
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "20px",
        }
    };

    return (
        <section style={styles.container}>
            <EVMHeader title={title} constituency={constituency} />

            <div style={styles.listWrapper}>
                {candidates.map((c, index) => (
                    <CandidateCard
                        key={c.id}
                        index={index + 1}
                        name={c.name}
                        symbolImg={c.symbolImg}
                        bgColor={cardBgColor} // 🟢 Pass the dynamic color here
                    />
                ))}
            </div>
        </section>
    );
};

export default EVMContainer;