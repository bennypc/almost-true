import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [fact, setFact] = useState("");

  const generateFact = async () => {
    try {
      const { Configuration, OpenAIApi } = require("openai");

      const configuration = new Configuration({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
      });
      const openai = new OpenAIApi(configuration);

      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",

        messages: [
          {
            role: "system",
            content:
              "You are a creative assistant that can come up with convincing but entirely false facts about scientific phenomena, historical events, modern-day topics or cultural practices."
          },
          {
            role: "user",
            content:
              "Generate a believable but untrue fact that will make the user think it's true but is actually not. Be super convincing. They can be about anything! Be super creative and try to be as realistic as possible to the point where if I told someone the fact they would probably believe me"
          }
        ]
      });
      console.log(completion.data.choices[0].message);
      setFact(completion.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1F1F1F]">
      <p className="text-lg md:text-4xl mb-4 mx-8 text-[#CCCCCC] leading-10 lg:leading-relaxed">
        {fact}
      </p>
      <button
        className="py-2 px-4 bg-blue-500 text-white rounded mt-4 mb-12"
        onClick={generateFact}
      >
        Generate Fact
      </button>
    </div>
  );
}
