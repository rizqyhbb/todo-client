/* eslint-disable react/prop-types */
import { BsXCircle, BsPencil } from 'react-icons/bs';
import { Button } from './button';

export const Card = ({ children, onDelete, onUpdate, onStatus }) => {
  return (
    <div className="card-component d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <input className="card-component__input" type="checkbox" onChange={onStatus} />
        <p className="card-component__text mb-0 ms-2">{children}</p>
      </div>
      <div>
        <Button>
          <BsPencil onClick={onUpdate} />
        </Button>
        <Button>
          <BsXCircle onClick={onDelete} />
        </Button>
      </div>
    </div>
  );
};
