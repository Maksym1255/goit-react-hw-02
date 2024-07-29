const Feedback = ({ feedbackCount, feedbackTotal }) => {
  const positivFeedback = Math.round(
    ((feedbackCount.good + feedbackCount.neutral) / feedbackTotal) * 100
  );
  return (
    <ul>
      <li>Good: {feedbackCount.good}</li>
      <li>Neutral: {feedbackCount.neutral}</li>
      <li>Bad: {feedbackCount.bad}</li>
      <li>Total: {feedbackTotal}</li>
      <li>Positiv Feedback:{positivFeedback}%</li>
    </ul>
  );
};

export default Feedback;
