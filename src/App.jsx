import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description";
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Notification from "./components/Notification";

const App = () => {
  const feedbackTypeInitial = JSON.parse(
    localStorage.getItem("feedbackCount")
  ) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackCount, setFeedbackCount] = useState(feedbackTypeInitial);

  useEffect(() => {
    localStorage.setItem("feedbackCount", JSON.stringify(feedbackCount));
  }, [feedbackCount]);

  const onFeedbackCountAdd = (feedbackName) => {
    setFeedbackCount((feedbackType) => ({
      ...feedbackType,
      [feedbackName]: feedbackType[feedbackName] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackCount({ good: 0, neutral: 0, bad: 0 });
  };

  const { good, neutral, bad } = feedbackCount;

  const feedbackTotal = good + neutral + bad;

  const positivFeedback = Math.round(((good + neutral) / feedbackTotal) * 100);

  const message = (
    <p>
      <b>No feedback yet</b>
    </p>
  );

  return (
    <div>
      <section>
        <Description />
      </section>
      {feedbackTotal > 0 ? (
        <div>
          <section>
            <Options
              onFeedbackCountAdd={onFeedbackCountAdd}
              feedbackTotal={feedbackTotal}
              resetFeedback={resetFeedback}
            />
          </section>
          <section>
            <Feedback
              feedbackCount={feedbackCount}
              feedbackTotal={feedbackTotal}
              positivFeedback={positivFeedback}
            />
          </section>
        </div>
      ) : (
        <div>
          <Options onFeedbackCountAdd={onFeedbackCountAdd} />
          <Notification message={message} />
        </div>
      )}
    </div>
  );
};

export default App;
