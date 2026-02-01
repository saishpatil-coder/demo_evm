import React from "react";
import EVMHeader from "./EVMHeader";
import CandidateCard from "./CandidateRow"; // Renamed for clarity

const EVMContainer = ({ constituency, candidates }) =>
{
    const styles = {
        container: {
            backgroundColor: "#f3f4f6", // Light grey app background
            minHeight: "100%",
            padding: "20px 15px",
            fontFamily: "'Segoe UI', 'Mukta', sans-serif",
            maxWidth: "500px",
            margin: "0 auto",
            borderRadius: "20px", // Rounded app corners
            overflow: "hidden",
            position: "relative",
        },
        listWrapper: {
            display: "flex",
            flexDirection: "column",
            gap: "15px", // Space between cards
            marginTop: "20px",
            paddingBottom: "20px",
        }
    };

    return (
        <section style={styles.container}>
            {/* Modern Header */}
            <EVMHeader title={constituency} />

            {/* List of Floating Cards */}
            <div style={styles.listWrapper}>
                {candidates.map((c, index) => (
                    <CandidateCard
                        key={c.id}
                        index={index + 1}
                        name={c.name}
                        symbolImg={c.symbolImg}
                    />
                ))}
            </div>
        </section>
    );
};

export default EVMContainer;