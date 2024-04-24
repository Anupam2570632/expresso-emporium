import headerBg from '../assets/more/15.jpg';
import logoImg from '../assets/more/logo1.png';
const Header = () => {
    return (
        <div className="bg-cover bg-center object-cover w-full flex items-center justify-center" style={{ backgroundImage: `url(${headerBg})` }}>
            <div className='py-4 flex gap-4 items-center'>
                <img className='h-20' src={logoImg} alt="" />
                <h1 className='text-2xl md:text-4xl font-bold text-white'>Expresso Emporium</h1>
            </div>
        </div>
    );
};

export default Header;