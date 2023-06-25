import { useState } from "react";

const IndexPage = () => {
  const [fact, setFact] = useState("");

  const generateFact = async () => {
    // Call the ChatGPT API here to generate an "almost-true" fact
    // Assign the generated fact to the 'fact' state
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">{fact}</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded shadow"
        onClick={generateFact}
      >
        Generate
      </button>
    </div>
  );
};

export default IndexPage;
