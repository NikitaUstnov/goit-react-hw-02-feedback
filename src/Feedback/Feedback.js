import { Component } from 'react';
import FeedbackCounter from './FeedbackCounter';
import TotalCount from './TotalCount';
import Message from './Message';

class Feedback extends Component {
  static defaultProps = {
    message: 'No feedback given',
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  total = 0;
  positiveFeedback = 0;
  notifications = false;

  countTotalSumOfRate = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };

  countProcentageOfGoodRate = () => {
    this.setState(prevState => ({
      positiveFeedback: Math.round((prevState.good / prevState.total) * 100),
    }));
  };

  addRateFeedback = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: Number(prevState[event.target.name] + 1),
        notifications: true,
      };
    });
    this.countTotalSumOfRate();
    this.countProcentageOfGoodRate();
  };

  render() {
    return (
      <div>
        <FeedbackCounter
          title="Please leave feedback"
          addRate={this.addRateFeedback}
        />
        {this.state.notifications ? (
          <TotalCount
            title="Statistic"
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.neutral}
            total={this.state.total}
            procentage={this.state.positiveFeedback}
          />
        ) : (
          <Message message={this.props.message} />
        )}
      </div>
    );
  }
}

export default Feedback;
