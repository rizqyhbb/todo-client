/* eslint-disable react/prop-types */
import classNames from 'classnames';

export const Button = ({ className, disabled, children, onClick }) => {
  return (
    <button className={classNames('btn', className)} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
