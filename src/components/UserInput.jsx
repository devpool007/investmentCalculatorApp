export default function UserInput({userInput, setUserInput}) {

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserInput((prev) => ({ ...prev, [name]: +value }));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment </label>
          <input
            type="number"
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={handleInputChange}
            required
          />
        </p>
        <p>
          <label>Annual Investment </label>
          <input
            type="number"
            name="annualInvestment"
            value={userInput.annualInvestment}
            onChange={handleInputChange}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return </label>
          <input
            type="number"
            name="expectedReturn"
            value={userInput.expectedReturn}
            onChange={handleInputChange}
            required
          />
        </p>
        <p>
          <label>Duration </label>
          <input
            type="number"
            name="duration"
            value={userInput.duration}
            onChange={handleInputChange}
            required
          />
        </p>
      </div>
    </section>
  );
}
