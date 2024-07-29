import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description";
import Feedback from "./components/Feedback";
import Options from "./components/Options";

function App() {
  const feedbackTypeInitial = JSON.parse(
    localStorage.getItem("feedbackCount") || { good: 0, neutral: 0, bad: 0 }
  );

  const [feedbackCount, setFeedbackCount] = useState(feedbackTypeInitial);

  useEffect(() => {
    localStorage.setItem("feedbackCount", JSON.stringify(feedbackCount));
  }, [feedbackCount]);

  const onFeedbackCountAdd = (feedbackName) => {
    setFeedbackCount({
      ...feedbackCount,
      [feedbackName]: feedbackCount[feedbackName] + 1,
    });
  };

  const feedbackTotal =
    feedbackCount.good + feedbackCount.neutral + feedbackCount.bad;

  const resetFeedback = () => {
    setFeedbackCount({ good: 0, neutral: 0, bad: 0 });
  };

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
              good={feedbackCount.good}
              neutral={feedbackCount.neutral}
              bad={feedbackCount.bad}
              total={feedbackTotal}
              onFeedbackCountAdd={onFeedbackCountAdd}
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
}

export default App;
