import React from 'react';
import './CircleFAB.css';

export default function CircleFAB(props) {
  const { tag, className, childrenm, ...otherProps } = props;

  return React.createElement(
    props.tag,
    {
      className: ['circleFAB', props.className].join(' '),
      ...otherProps
    },
    props.children
  );
}

CircleFAB.defaultProps ={
  tag: 'a',
};