import React from 'react';

export const PhoneIcon: (
  color?: string,
  width?: number,
  height?: number
) => JSX.Element = (color = '#000000', width = 18, height = 18) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill={color}
  >
    <path d="M.3 1.5C-.7 4.2 1.9 13.4 5 18.3c1.6 2.6 4.8 6 7.1 7.7 4.6 3.3 13.5 6.3 17.1 5.8 2-.3 2.3-.9 2.3-5.3v-5l-4.9-.8c-4-.6-5.2-.5-6.8 1-1.7 1.6-2.2 1.6-4.5.3-1.4-.8-3.5-2.7-4.7-4.3-1.9-2.6-1.9-2.9-.3-5.6 1.2-2.1 1.5-3.9.9-7.2L10.5.5 5.7.2C2.1 0 .8.3.3 1.5z" />
  </svg>
);
