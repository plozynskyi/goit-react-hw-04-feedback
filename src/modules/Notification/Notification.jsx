import PropTypes from 'prop-types';

import { NotificationText } from './notification.styled';

const Notification = ({ text }) => {
  return <NotificationText>{text}</NotificationText>;
};

export default Notification;

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
