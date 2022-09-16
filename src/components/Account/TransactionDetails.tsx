import ETHIcon from '../../assets/img/icons/ETH.svg';
import { Transaction } from '../../services/TransactionsService';
import defaults from '../../utils/constants';

interface TransactionProps {
  transaction: Omit<Transaction,"id">;
}

const TransactionDetails = ({transaction}: TransactionProps) => {
  
  return (
    <>
      <div className='flex justify-between py-3'>  
        <div className='flex space-x-4'>
          <div className="font-bold text-white rounded-full bg-white flex items-center justify-center font-mono border-gray-100 border" style={{height: "45px", width: "45px", fontSize: "15px"}}>
            <img src={ETHIcon} alt="" />
          </div>
          <div>
            <h4 className="text-md font-medium">Sent Ether</h4>
            <p className="text-xs text-slate-500">{`${transaction.date.toISOString().split("T")[0]} ${transaction.date.toISOString().split("T")[1].split(":")[0]}:${transaction.date.toISOString().split("T")[1].split(":")[1]}`}</p>
          </div>
        </div>
          <div className='flex flex-col items-end'>
            <h4 className="text-md font-medium">-{transaction.value} ETH</h4>
            <p className="text-xs text-slate-500">-${transaction.value * defaults.ethPrice } USD</p>
          </div>
        </div>    
    </>
  );
};

export default TransactionDetails;
