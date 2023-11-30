// ProgressBar.js
import React from 'react';

const ProgressBar = ({ skill, percentage }) => {
  return (
    <div className="progress">
      <span className="skill">{skill} <i className="val">{percentage}%</i></span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
