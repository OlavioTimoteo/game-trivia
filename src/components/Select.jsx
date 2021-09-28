import { func, string, arrayOf } from 'prop-types';
import React from 'react';

const Select = (props) => {
  const { labelText, id, value, change, name, options } = props;

  return (
    <label htmlFor={ id }>
      <p className="label-select">{labelText}</p>
      <select
        id={ id }
        className={ id }
        data-testid={ id }
        value={ value }
        onChange={ change }
        name={ name }
      >
        {
          options.map((option) => <option key={ option }>{option}</option>)
        }
      </select>
    </label>
  );
};

Select.propTypes = {
  labelText: string.isRequired,
  id: string.isRequired,
  value: string,
  change: func.isRequired,
  name: string.isRequired,
  options: arrayOf(string).isRequired,
};

Select.defaultProps = {
  value: 'Not found',
};

export default Select;
