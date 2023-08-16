import React from 'react';

export const BoilerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    width={45}
    height={45}
  >
    <image
      xlinkHref="data:image/png;base64,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"
      width={45}
      height={45}
    />
  </svg>
);
