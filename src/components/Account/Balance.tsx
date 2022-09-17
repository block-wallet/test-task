import {Link} from 'react-router-dom';

import arrowUp from '../../assets/img/icons/arrowUp.svg';
import defaults from '../../utils/constants';

const Balance = () => {
  return (
    <>
        <div className="flex flex-col bg-backgroundBalance w-full rounded my-3 justify-center align-middle items-center py-8">
            <h1 className='font-bold text-3xl'>{defaults.accountBalance} ETH</h1>
            <p className="text-sm text-slate-500 mb-5 "> ${defaults.accountBalance*defaults.ethPrice} USD</p>
            <Link to='/send'>
              <div className='flex flex-col  justify-center align-middle items-center hover:cursor-pointer'>
                <img src={arrowUp} alt="" className='w-1/5 h-1/5 mb-2 hover:scale-110' />
                <p>Send</p>
              </div>
            </Link>
          </div>
    </>
  );
};

export default Balance;
