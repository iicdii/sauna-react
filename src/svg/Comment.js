import React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      d="M18.286 4.143H5.714a1.569 1.569 0 0 0-1.563 1.571l-.008 14.143 3.143-3.143h11a1.576 1.576 0 0 0 1.571-1.571V5.714a1.576 1.576 0 0 0-1.571-1.571z"
      data-name="패스 16"
      stroke="#707070"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill="none"
    />
    <path d="M0 0h24v24H0z" data-name="패스 17" fill="none" />
    <path d="M11 1h2v22h-2z" data-name="사각형 9" fill="#fff" />
  </svg>
);

export default SvgComponent;
