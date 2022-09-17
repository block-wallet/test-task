import { CopyToClipboard } from 'react-copy-to-clipboard';

import blockLogo from '../../assets/img/blocklogo.png';
import defaults from '../../utils/constants';
import copyIcon from '../../assets/img/icons/copy.svg';

const AccountDetails = () => {
  return (
    <>
        <div className="flex items-center space-x-4">
          <img src={blockLogo} alt="" className='w-8 h-8' />
          <CopyToClipboard text={defaults.publicAddress} onCopy={ ()=>{ alert("Public address copied!"); } }>
            <div className='hover:cursor-pointer'>
                <h4 className="text-md font-medium">Account 1</h4>
                <div className='flex space-x-1'>
                  <p className="text-xs text-slate-500 hover:text-slate-800">{defaults.publicAddress.substring(0,5)}...{defaults.publicAddress.slice(-4)}</p>
                  <img src={copyIcon} alt="" className='w-4 h-4' />
                </div>
            </div>
          </CopyToClipboard>
        </div>
    </>
  );
};

export default AccountDetails;
