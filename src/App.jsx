import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 6,
    duration: 10,
});

const inputIsValid = userInput.initialInvestment >=0 && userInput.annualInvestment >=0 && userInput.expectedReturn >=0 && userInput.duration > 0; 

  return (
    <>
      <Header />
      <UserInput userInput={userInput} setUserInput={setUserInput} />
      {!inputIsValid && <p className="center">Please enter valid input. Negatives are not allowed!</p>}
      {inputIsValid && <Results input={userInput}/>}
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
