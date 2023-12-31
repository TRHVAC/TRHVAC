import React from 'react';

export const MaintenanceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    width={47}
    height={47}
  >
    <image
      xlinkHref="data:image/png;base64,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"
      width={47}
      height={47}
    />
  </svg>
);
