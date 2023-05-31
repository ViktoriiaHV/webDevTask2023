import './index.css'

const FormInput = ({ type, name, value, onChange, placeholder, required, disabled, width }) => {

  // const formStyle = style === 'full' ? 'formInput formInput-full' : 'formInput formInput-half';

  const formStyle = {
    width: width 
  }

  return (
    <input
      // className={formStyle}
      className="formInput"
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      style={formStyle}
    />
  );
};

export default FormInput;
