import icon1 from '../assets/icons/1.png'
import icon2 from '../assets/icons/2.png'
import icon3 from '../assets/icons/3.png'
import icon4 from '../assets/icons/4.png'
const OurComponents = () => {
    return (
        <div className='bg-[#ECEAE3] w-full'>
            <div className='md:w-[75%]  mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14'>
                <div className='space-y-4 p-6'>
                    <img className='w-[60px]' src={icon1} alt="" />
                    <h1 className='text-3xl text-[#331A15]'>Awesome Aroma</h1>
                    <p className='text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='space-y-4 p-6'>
                    <img className='w-[60px]' src={icon2} alt="" />
                    <h1 className='text-3xl text-[#331A15]'>High Quality</h1>
                    <p className='text-[#1B1A1A]'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='space-y-4 p-6'>
                    <img className='w-[60px]' src={icon3} alt="" />
                    <h1 className='text-3xl text-[#331A15]'>Pure Grades</h1>
                    <p className='text-[#1B1A1A]'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='space-y-4 p-6'>
                    <img className='w-[60px]' src={icon4} alt="" />
                    <h1 className='text-3xl text-[#331A15]'>Proper Roasting</h1>
                    <p className='text-[#1B1A1A]'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default OurComponents;