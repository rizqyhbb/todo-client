/* eslint-disable react/prop-types */
export const Card = ({ key, children }) => {
  return (
    <div key={key}>
      <input className="form-check-input" type="checkbox" />
      <p>{children}</p>
    </div>
  );
};
