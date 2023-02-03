import { useState } from 'react';

import FeedbackOptions from 'modules/FeedbackOptions/FeedbackOptions';
import Section from 'modules/Section/Section';
import Statistics from 'modules/Statistics/Statistics';

import { MainSection } from './app.styled';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = name => {
    setFeedback(prevState => {
      const value = prevState[name];

      return { ...prevState, [name]: value + 1 };
    });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;

  const calcPercentage = () => {
    if (!total) {
      return 0;
    }
    const value = feedback.good;
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  };

  const positivePercentage = calcPercentage();
  const feedbackOptions = Object.keys(feedback);

  return (
    <MainSection>
      <Section title="Leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics:">
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </MainSection>
  );
};

export default App;
