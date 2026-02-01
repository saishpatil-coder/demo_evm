import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const AdminPanel = () =>
{
  // --- SECTION 1: ELECTION & PARTY INFO ---
  const [electionTitle, setElectionTitle] = useState("जिल्हा परिषद निवडणूक 2026");
  const [constituency, setConstituency] = useState("मिरज");

  // 🟢 NEW: Date & Time Defaults
  const [electionDate, setElectionDate] = useState("15 मार्च 2026");
  const [electionTime, setElectionTime] = useState("सकाळी 7 ते सायंकाळी 6");

  const [partyName, setPartyName] = useState("भारतीय जनता पार्टी");

  // 🟢 NEW: Symbol Text Name (Default: Kamal)
  const [partySymbolName, setPartySymbolName] = useState("कमळ");

  const [partyIcon, setPartyIcon] = useState("");

  // --- SECTION 2: DYNAMIC CANDIDATES LIST ---
  const [candidates, setCandidates] = useState([
    {
      id: Date.now(),
      name: "",
      photo: "",
      role: "", // e.g. "Gat No. 24"
      totalRows: 5,
      myPosition: 1
    }
  ]);

  const [loading, setLoading] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");

  // --- HELPER: Image Processor (Base64) ---
  const processImage = (file, callback) =>
  {
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) =>
    {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () =>
      {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 300;
        const scale = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        callback(canvas.toDataURL("image/jpeg", 0.7));
      };
    };
  };

  // --- HANDLERS ---
  const handleCandidateChange = (id, field, value) =>
  {
    const updated = candidates.map((c) =>
      c.id === id ? { ...c, [field]: value } : c
    );
    setCandidates(updated);
  };

  const addCandidateSlot = () =>
  {
    setCandidates([
      ...candidates,
      { id: Date.now(), name: "", photo: "", role: "", totalRows: 4, myPosition: 1 }
    ]);
  };

  const removeCandidateSlot = (id) =>
  {
    if (candidates.length === 1) return;
    setCandidates(candidates.filter(c => c.id !== id));
  };

  const handleSubmit = async () =>
  {
    if (!partyIcon) {
      alert("Please upload the Party Symbol!");
      return;
    }

    setLoading(true);
    try {
      // Create the clean data object
      const payload = {
        title: electionTitle,
        constituency: constituency,

        // 🟢 Include the new fields in database
        electionDate: electionDate,
        electionTime: electionTime,
        partySymbolName: partySymbolName,

        partyName: partyName,
        partyIcon: partyIcon,
        candidateList: candidates,
        createdAt: new Date()
      };

      const docRef = await addDoc(collection(db, "elections"), payload);
      const link = `${window.location.origin}/vote/${docRef.id}`;
      setGeneratedLink(link);
      alert("Campaign Created Successfully!");
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: { maxWidth: "600px", margin: "30px auto", padding: "20px", fontFamily: "sans-serif" },
    section: { border: "1px solid #ddd", padding: "15px", borderRadius: "10px", marginBottom: "20px", background: "#f9fafb" },
    header: { marginBottom: "15px", fontSize: "18px", fontWeight: "bold", color: "#333", borderBottom: "2px solid #ddd", paddingBottom: "5px" },
    inputGroup: { marginBottom: "10px" },
    label: { display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "5px" },
    input: { width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" },
    row: { display: "flex", gap: "10px" },
    btnPrimary: { width: "100%", padding: "12px", background: "#2563eb", color: "#fff", border: "none", borderRadius: "6px", fontSize: "16px", cursor: "pointer", fontWeight: "bold" },
    btnAdd: { padding: "8px 15px", background: "#16a34a", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "13px" },
    btnRemove: { padding: "8px 15px", background: "#dc2626", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "13px" },
    success: { marginTop: "20px", padding: "15px", background: "#dcfce7", border: "1px solid #16a34a", borderRadius: "6px", wordBreak: "break-all" }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: "center", color: "#1e3a8a" }}>Campaign Builder</h2>

      {/* 1. GLOBAL ELECTION INFO */}
      <div style={styles.section}>
        <div style={styles.header}>Step 1: Election Details</div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Election Title</label>
          <input style={styles.input} value={electionTitle} onChange={e => setElectionTitle(e.target.value)} />
        </div>

        {/* 🟢 Date and Time Inputs */}
        <div style={styles.row}>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <label style={styles.label}>Date (तारीख)</label>
            <input style={styles.input} value={electionDate} onChange={e => setElectionDate(e.target.value)} />
          </div>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <label style={styles.label}>Time (वेळ)</label>
            <input style={styles.input} value={electionTime} onChange={e => setElectionTime(e.target.value)} />
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <label style={styles.label}>Constituency</label>
            <input style={styles.input} value={constituency} onChange={e => setConstituency(e.target.value)} />
          </div>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <label style={styles.label}>Party Name</label>
            <input style={styles.input} value={partyName} onChange={e => setPartyName(e.target.value)} />
          </div>
        </div>

        {/* 🟢 Symbol Name Input */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Symbol Text Name (चिन्हाचे नाव)</label>
          <input
            style={styles.input}
            value={partySymbolName}
            onChange={e => setPartySymbolName(e.target.value)}
            placeholder="e.g. कमळ, धनुष्यबाण"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Party Symbol Image (Main Icon)</label>
          <input type="file" accept="image/*" onChange={e => processImage(e.target.files[0], setPartyIcon)} />
          {partyIcon && <span style={{ color: "green", fontSize: "12px" }}> ✓ Uploaded</span>}
        </div>
      </div>

      {/* 2. CANDIDATES LIST */}
      <div style={styles.section}>
        <div style={{ ...styles.header, display: "flex", justifyContent: "space-between" }}>
          <span>Step 2: Candidates</span>
          <button style={styles.btnAdd} onClick={addCandidateSlot}>+ Add Candidate</button>
        </div>

        {candidates.map((c, idx) => (
          <div key={c.id} style={{ borderBottom: "1px dashed #ccc", paddingBottom: "15px", marginBottom: "15px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <strong>Candidate #{idx + 1}</strong>
              <button style={styles.btnRemove} onClick={() => removeCandidateSlot(c.id)}>Remove</button>
            </div>

            <div style={styles.row}>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Name</label>
                <input style={styles.input} value={c.name} onChange={e => handleCandidateChange(c.id, "name", e.target.value)} placeholder="e.g. Ramesh Patil" />
              </div>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Role / Area</label>
                <input style={styles.input} value={c.role} onChange={e => handleCandidateChange(c.id, "role", e.target.value)} placeholder="e.g. Ward 4" />
              </div>
            </div>

            <div style={{ ...styles.row, marginTop: "10px" }}>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Total Candidates</label>
                <input type="number" style={styles.input} value={c.totalRows} onChange={e => handleCandidateChange(c.id, "totalRows", parseInt(e.target.value))} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>My Position No.</label>
                <input type="number" style={styles.input} value={c.myPosition} onChange={e => handleCandidateChange(c.id, "myPosition", parseInt(e.target.value))} />
              </div>
            </div>

            <div style={{ marginTop: "10px" }}>
              <label style={styles.label}>Candidate Photo</label>
              <input type="file" accept="image/*" onChange={e => processImage(e.target.files[0], (url) => handleCandidateChange(c.id, "photo", url))} />
              {c.photo && <span style={{ color: "green", fontSize: "12px" }}> ✓ Photo Ready</span>}
            </div>
          </div>
        ))}
      </div>

      <button style={styles.btnPrimary} onClick={handleSubmit} disabled={loading}>
        {loading ? "Building Campaign..." : "Generate Final Link"}
      </button>

      {generatedLink && (
        <div style={styles.success}>
          <strong>Link Created:</strong><br />
          <a href={generatedLink} target="_blank" rel="noopener noreferrer">{generatedLink}</a>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;