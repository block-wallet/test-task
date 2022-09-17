import closeIcon from '../../assets/img/icons/close.svg';
import {Link} from 'react-router-dom';


const Header = () => {
  
  return (
    <>
      <div className="border-b w-full mb-5">
        <div className="flex justify-between items-center mb-5 px-6">
          <h1 className="font-medium">Send Ether</h1>
          <Link to='/'>
            <img src={closeIcon} alt="" className='w-2.5 h-2.5 hover:scale-110' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
