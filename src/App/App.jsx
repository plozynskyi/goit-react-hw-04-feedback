import { Component } from 'react';

import FeedbackOptions from 'modules/FeedbackOptions/FeedbackOptions';
import Section from 'modules/Section/Section';
import Statistics from 'modules/Statistics/Statistics';

import { MainSection } from './app.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const totalGoodFeedback = good;
    const result = ((totalGoodFeedback / total) * 100).toFixed();
    return Number(result);
  }

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const feedbackOptions = Object.keys(this.state);

    return (
      <MainSection>
        <Section title="Leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics:">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </MainSection>
    );
  }
}

export default App;
