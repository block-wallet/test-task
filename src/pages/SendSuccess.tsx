import {Link} from 'react-router-dom';

import successIcon from "../assets/img/icons/checkmark_notes.svg";

const SendSuccess = () => {
  return (
      <div className="bg-backgroundMain w-screen h-screen py-10">
        <div className="bg-backgroundSecondary w-3/12 h-5/6 mx-auto rounded shadow-lg py-6">
        <div className="flex flex-col h-full w-full">
          
          <div className="h-2/3 flex flex-col justify-center items-center space-y-2">
              <img src={successIcon} alt="" className="w-30 h-30" />
              <p className="font-bold text-2xl">Success.</p>
              <p className="text-md text-slate-500 px-20 text-center">You've successfully sent your funds.</p>
              <a href='https://etherscan.io/' target='_blank' rel="noreferrer">
                <p  className='text-md text-blue-600'>
                  View on Etherscan
                </p> 
              </a>
          </div>

          <div className="h-1/3 flex flex-col justify-end w-full">
            <div className="border-t pt-4 w-full px-6">
              <Link to='/'>
                <button className="text-black py-3 px-10 rounded font-bold border-black border-2 text-sm w-full hover:font-extrabold">Done</button>
              </Link>
            </div>
          </div>

        </div>
          
        </div>
      </div>
  );
};

export default SendSuccess;
