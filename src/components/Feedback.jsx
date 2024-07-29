const Feedback = ({ feedbackCount, feedbackTotal, positivFeedback }) => {
  const { good, neutral, bad } = feedbackCount;
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {feedbackTotal}</li>
      <li>Positiv Feedback:{positivFeedback}%</li>
    </ul>
  );
};

export default Feedback;
