import react from "react";
import reactDom from "react-dom";
import Notification from "./Notification";
import propTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total > 0) {
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
  return <Notification message="There is no feedback" />;
};

export default Statistics;

Statistics.propTypes = {
  good: propTypes.string.isRequired,
  neutral: propTypes.string.isRequired,
  bad: propTypes.string.isRequired,
  total: propTypes.string.isRequired,
  positivePercentage: propTypes.string.isRequired,
};
