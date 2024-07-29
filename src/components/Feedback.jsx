const Feedback = ({ good, neutral, bad, total }) => {
  const positivFeedback = Math.round(((good + neutral) / total) * 100);
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positiv Feedback:{positivFeedback}%</li>
    </ul>
  );
};

export default Feedback;
