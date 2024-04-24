import coffeImg1 from '../assets/cups/Rectangle 10.png'
import coffeImg2 from '../assets/cups/Rectangle 11.png'
import coffeImg3 from '../assets/cups/Rectangle 12.png'
import coffeImg4 from '../assets/cups/Rectangle 13.png'
import coffeImg5 from '../assets/cups/Rectangle 14.png'
import coffeImg6 from '../assets/cups/Rectangle 15.png'
import coffeImg7 from '../assets/cups/Rectangle 16.png'
import coffeImg8 from '../assets/cups/Rectangle 9.png'

const Follow = () => {
    return (
        <div className="pb-20 md:w-[75%] mx-auto">
            <div className="text-center space-y-4">
                <p className="font-thin">Follow Us Now</p>
                <h1 className="text-2xl md:text-4xl font-bold">Follow on Instagram</h1>
            </div>
            <div className='grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <img className='mx-auto' src={coffeImg1} alt="" />
                <img className='mx-auto' src={coffeImg2} alt="" />
                <img className='mx-auto' src={coffeImg3} alt="" />
                <img className='mx-auto' src={coffeImg4} alt="" />
                <img className='mx-auto' src={coffeImg5} alt="" />
                <img className='mx-auto' src={coffeImg6} alt="" />
                <img className='mx-auto' src={coffeImg7} alt="" />
                <img className='mx-auto' src={coffeImg8} alt="" />
            </div>
        </div>
    );
};

export default Follow;