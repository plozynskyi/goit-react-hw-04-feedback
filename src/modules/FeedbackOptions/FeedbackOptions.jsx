import PropTypes from 'prop-types';

import Button from '../../shared/components/Button/Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = options.map(name => (
    <p key={name}>
      <Button onClick={() => onLeaveFeedback(name)} type="button">
        {name}
      </Button>
    </p>
  ));
  return <>{elements}</>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
