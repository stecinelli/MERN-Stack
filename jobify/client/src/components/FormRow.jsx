/* eslint-disable react/prop-types */
const FormRow = ({ type, name, lebelText, defautValue }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {lebelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defautValue || ''}
        required
      />
    </div>
  );
};
export default FormRow;
