import AccountDetails from '../components/AccountDetails';
import Balance from '../components/Balance';
import Transactions from '../components/Transactions';

const Account = () => {
  return (
      <div className="bg-backgroundMain w-screen h-screen py-10">
        <div className="bg-backgroundSecondary w-3/12 mx-auto rounded shadow-lg p-6">
          <AccountDetails/>
          <Balance/>
          <Transactions/> 
        </div>
      </div>
  );
};

export default Account;
