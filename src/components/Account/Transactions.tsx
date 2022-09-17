import Transaction from "./TransactionDetails";
import AppContext from "../../context/background/AppContext";
import { useContext } from "react";

const Transactions = () => {
  const { state } = useContext(AppContext);
  
  return (
    <>
      <div className="flex flex-col divide-y">
        {state.transactions.map((transaction ,index) => {
          if (index <=3)
            return <Transaction transaction={transaction} key={index} />;
        })}
      </div>
    </>
  );
};

export default Transactions;
