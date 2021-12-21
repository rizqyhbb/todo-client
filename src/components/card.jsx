/* eslint-disable react/prop-types */
import classNames from 'classnames';
import { BsXCircle } from 'react-icons/bs';
import { Button } from './button';

export const Card = ({ children, onDelete, onChange, defaultChecked, className }) => {
  return (
    <div className="card-component d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <input
          className="card-component__input"
          type="checkbox"
          onChange={onChange}
          defaultChecked={defaultChecked}
        />
        <p className={classNames('card-component__text mb-0 ms-2', className)}>{children}</p>
      </div>
      <div>
        <Button className="mx-1 fs-6">
          <BsXCircle onClick={onDelete} />
        </Button>
      </div>
    </div>
  );
};
