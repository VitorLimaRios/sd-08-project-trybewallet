import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);