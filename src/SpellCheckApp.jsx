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

    // Split text into words
    const words = text.split(" ");

    // Find the first incorrect word and its correction
    let correction = "";
    for (let word of words) {
      const correctedWord = customDictionary[word.toLowerCase()];
      if (correctedWord && correctedWord !== word) {
        correction = `${correctedWord}`;
        break; // Stop at the first mistake found
      }
    }

    setCorrectedText(correction);
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
