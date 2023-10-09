import React from 'react';

export default function Loader() {
  return (
    <div class="loader">
      <svg class="circular-loader" viewBox="25 25 50 50">
        <circle
          className="loader-path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="#d2b863"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
