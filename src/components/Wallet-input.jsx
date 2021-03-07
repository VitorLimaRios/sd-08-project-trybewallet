import React from 'react';
import PropTypes from 'prop-types';

class WalletInput extends React.Component {
  render() {
    const { label, name, options, type, value, ...restProps } = this.props;

    if (type === 'select') {
      return (
        <label htmlFor={ name }>
          {`${label}: `}
          <select name={ name } data-testid={ `${name}-input` } { ...restProps }>
            {options.map((option, index) => (
              <option key={ index } value={ option } data-testid={ option }>
                {option}
              </option>
            ))}
          </select>
        </label>
      );
    }

    return (
      <div>
        <label htmlFor={ name }>
          {`${label}: `}
          <input
            type={ type }
            data-testid={ `${name}-input` }
            name={ name }
            id={ name }
            value={ value }
            { ...restProps }
          />
        </label>
      </div>
    );
  }
}

WalletInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfTypes([PropTypes.string, PropTypes.array]),
  ),
  value: PropTypes.string.isRequired,
};

WalletInput.defaultProps = {
  type: 'text',
  options: null,
};

export default WalletInput;