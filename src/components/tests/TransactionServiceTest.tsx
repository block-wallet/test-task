import { TransactionsService } from "../../services/TransactionsService";
import { useEffect } from "react";
import defaults from "../../utils/constants";

const TransactionServiceTest = () => {
  const transactionsService = new TransactionsService({transactions:[]});

  const getAllTransactions = async () => {
    transactionsService.getListOfTransactions().then((transactions) => {
        console.log(`All transactions:`);
        console.log(transactions);
    });
  };

  const addDefaultTransactions = () => {
    Promise.all(Object.values(defaults.pastTransactions).map(async (transaction) => {
      transactionsService.addTransaction({
        to: transaction.recipient,
        from: defaults.publicAddress,
        value: Number(transaction.amount),
        date: new Date(transaction.date),
        })
    }));
  };

  const addTransaction = async () => {
    await transactionsService.addTransaction({
        to: "0x566De3423e145E3F34C3D4D951634D8FA7A19F06",
        from: defaults.publicAddress,
        value: 100,
        date: new Date(),
      })
  };

  const test = async () => {
    await addDefaultTransactions();
    await getAllTransactions();
    await addTransaction();
    getAllTransactions();
  };

  useEffect( () => {
    test();
  }, []);

  return (
    <>
      <h1>Testing the TransactionsService:</h1>
      <h4>Check console!</h4>
    </>
  );
};

export default TransactionServiceTest;
