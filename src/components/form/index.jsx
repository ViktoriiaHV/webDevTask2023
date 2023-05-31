import "./index.css";

import FormInput from "../formInput";

const Form = ({ inputRows, inputHandler, formState }) => {
  return (
    <form className="form">
      {inputRows.map((inputRow, idx) => {
        return (
          <div key={idx} className="form--row">
            {inputRow.map((input) => {
              const width = `${100 / inputRow.length}%`;
              return (
                <FormInput
                  key={input.id}
                  type={input.type || "text"}
                  id={input.id}
                  name={input.name}
                  value={formState[input.name] || ''}
                  onChange={inputHandler}
                  placeholder={input.placeholder}
                  required={input.required || false}
                  disabled={input.disabled || false}
                  width={width}
                />
              );
            })}
          </div>
        );
      })}
    </form>
  );
};

export default Form;
