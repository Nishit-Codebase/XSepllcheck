import React, { useState } from "react";

// Define a custom dictionary of words and their corrections
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function SpellCheckApp() {
  const [inputText, setInputText] = useState("");
  const [correctedText, setCorrectedText] = useState(""); // ✅ Store corrected text

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    // Implement spelling check and correction
    const words = text.split(" ");
    const correctedWords = words.map((word) => customDictionary[word.toLowerCase()] || word);

    setCorrectedText(correctedWords.join(" ")); // ✅ Store full corrected text
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {correctedText && inputText !== correctedText && ( // ✅ Show only if different
        <p>
          Did you mean: <strong>{correctedText}</strong>?
        </p>
      )}
    </div>
  );
}

export default SpellCheckApp;
