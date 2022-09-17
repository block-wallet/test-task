import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import { useContext } from "react";

import AppContext from "../../context/background/AppContext";
import Header from "../../components/Send/Header";
import defaults from "../../utils/constants";

type FormData = {
  to: string;
  amount: number;
};

const Form = () => {
  const { state, setState, addTransaction } = useContext(AppContext);

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit( async (data) => {
    const transaction = {to:data.to, value:data.amount, date: new Date(), from: defaults.publicAddress}
    await addTransaction(transaction);
  });

  return (
    <>
      <div className="flex flex-col h-full justify-between">
        <div>
              <Header/>
              <form onSubmit={onSubmit}>
                <div className="flex flex-col space-y-4 px-6">
                  {/* To Field */}
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="to" className="text-sm text-slate-500 font-medium">Add Recipient</label>
                    <input type="text" id="to" className="border-b-2 border-black py-2 focus:outline-none focus:border-slate-500 text-sm" placeholder='Enter Public Address' {...register("to")} onChange={(e)=>setValue("to",e.target.value)} />
                  </div>

                  {/* Amount Field */}
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="amount" className="text-sm text-slate-500 font-medium">Amount To Transfer</label>
                    <input type="number" id="amount" className="border-b-2 border-black py-2 w-1/2 focus:outline-none focus:border-slate-500 text-sm" placeholder='Enter ETH Amount' {...register("amount")} onChange={(e)=>setValue("amount",+e.target.value)}/>
                  </div>
                </div>
              </form>
            </div>
          
            <div className="flex px-6 py-4 pb-0 border-t space-x-4">
        <div className="w-1/2">
          <Link to='/'>
            <button className="text-black py-3 px-10 rounded font-bold border-black border-2 text-sm w-full hover:font-extrabold">Cancel</button>
          </Link>
        </div>
        <div className="w-1/2">
          <Link to='/send-success'>
            <button className="text-white py-3 px-10 rounded font-bold text-sm border-BackgroundNextButton border-2 bg-BackgroundNextButton w-full hover:font-extrabold" onClick={()=> onSubmit() }>Next</button>
          </Link>
        </div>
      </div>

        </div>
    </>
  );
};

export default Form;
