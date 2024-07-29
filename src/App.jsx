import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description";
import Feedback from "./components/Feedback";
import Options from "./components/Options";

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

  const feedbackTotal =
    feedbackCount.good + feedbackCount.neutral + feedbackCount.bad;

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
              // onFeedbackCountAdd={onFeedbackCountAdd}
            />
          </section>
        </div>
      ) : (
        <div>
          <Options onFeedbackCountAdd={onFeedbackCountAdd} />
          <p>No feedback yet</p>
        </div>
      )}
    </div>
  );
};

export default App;
