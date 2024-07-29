import css from "./Options.module.css";

const Options = ({ onFeedbackCountAdd, feedbackTotal, resetFeedback }) => {
  return (
    <div>
      <button
        className={css.button}
        onClick={() => {
          onFeedbackCountAdd("good");
        }}
      >
        Good
      </button>
      <button
        className={css.button}
        onClick={() => {
          onFeedbackCountAdd("neutral");
        }}
      >
        Ntutral
      </button>
      <button
        className={css.button}
        onClick={() => {
          onFeedbackCountAdd("bad");
        }}
      >
        Bad
      </button>

      {feedbackTotal > 0 && (
        <button className={css.button} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
