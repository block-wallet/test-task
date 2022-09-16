import AccountDetails from '../components/Account/AccountDetails';
import Balance from '../components/Account/Balance';
import Transactions from '../components/Account/Transactions';

const Account = () => {
  return (
      <div className="bg-backgroundMain w-screen h-screen py-10">
        <div className="bg-backgroundSecondary w-3/12 h-5/6 mx-auto rounded shadow-lg p-6">
          <AccountDetails/>
          <Balance/>
          <Transactions/> 
        </div>
      </div>
  );
};

export default Account;
