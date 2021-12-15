/* eslint-disable react/prop-types */

import classNames from 'classnames';

export const Input = ({ className, placeholder, value, onChange, type }) => {
  return (
    <input
      className={classNames(className)}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      type={type}
    />
  );
};
