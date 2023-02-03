import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';

import { FeedbackName } from './statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total ? (
    <>
      <FeedbackName>Good: {good}</FeedbackName>
      <FeedbackName>Neutral: {neutral}</FeedbackName>
      <FeedbackName>Bad: {bad}</FeedbackName>
      <FeedbackName>Total: {total}</FeedbackName>
      <FeedbackName>Positive feedback: {positivePercentage}%</FeedbackName>
    </>
  ) : (
    <Notification text={'There is no feedback'} />
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
