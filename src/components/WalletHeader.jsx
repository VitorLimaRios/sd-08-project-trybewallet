import React from 'react';
import { useSelector } from 'react-redux';

function WalletHeader() {
  const email = useSelector((state) => state.user.email);
  const wallet = useSelector((state) => state.wallet);

  function calcExp() {
    return wallet.expenses.reduce((acc, cur) => acc + Number(cur.value), 0);
  }

  return (
    <header className="wallet-header">
      <div className="wallet-header-content">
        <span className="wallet-header-email">E-mail:</span>
        <span data-testid="email-field">{email}</span>
      </div>
      <div className="wallet-header-content">
        <span>Despesa Total:</span>
        <span data-testid="total-field">
          {calcExp() || 0}
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    </header>
  );
}

export default WalletHeader;