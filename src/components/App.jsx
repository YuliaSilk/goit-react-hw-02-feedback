import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Statistic } from "./Statistic/Statistic";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
};

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
};

countPositiveFeedbackPercentage = () => {
 const { good } = this.state;
 const total = this.countTotalFeedback();
 return total > 0 ? Math.round((good / total) * 100) :0;
};

LeaveFeedback = option => {
  this.setState(prevState => ({
    [option]: prevState[option] + 1,
  }));
};


render() {
  const { good, neutral, bad } = this.state;
  const total = this.countTotalFeedback();
  const positivePercentage = this.countPositiveFeedbackPercentage();
  
  return (
    <Section tittle='Please leave feedback'>
      <FeedbackOptions 
        options={Object.keys(this.state)} 
        onLeaveFeedback={this.LeaveFeedback}
      />

      {this.countTotalFeedback() === 0 ? (
        <Notification messsage="There is no feedback"/>
      ) : (
        <Statistic
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={this.countTotalFeedback} 
        positivePercentage={this.countPositiveFeedbackPercentage}
        />
      )}
      </Section>
    
  );
}


