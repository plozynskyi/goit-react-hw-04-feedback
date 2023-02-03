import PropTypes from 'prop-types';

import { Block, BlockTitle } from './section.styled';

const Section = ({ children, title }) => {
  return (
    <Block>
      <BlockTitle>{title}</BlockTitle>
      {children}
    </Block>
  );
};

export default Section;

Section.prototypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
