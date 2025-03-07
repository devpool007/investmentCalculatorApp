import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const results = calculateInvestmentResults(input);
  console.log(results);
  let totalInterest = 0;

  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
            totalInterest+=result.interest

            return (
              <tr key={index}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(result.valueEndOfYear - totalInterest)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
