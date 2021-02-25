import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <div>TrybeWallet</div>
        <div>email</div>
        <div>
          <input value={ email } data-testid="email-field" />
        </div>
        <div>depesa total</div>
        <input value="0" data-testid="total-field" />
        <input value="BRT" data-testid="header-currency-field" />
      </div>
    );
  }
}
Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Header;