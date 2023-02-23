import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

// Alan API key from https://alan.app/
const alanKey =
  "4ba4dc8755863d0d5659ce36d60ac6862e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>Alan Ai App</h1>
    </div>
  );
};

export default App;
