import { RiFacebookCircleFill } from 'react-icons/ri';
import footerBg from '../assets/more/10.png'
import logo from '../assets/more/logo1.png'
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { LiaLinkedinIn } from 'react-icons/lia';
import { BiEnvelope, BiPhone } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import footerFootBg from '../assets/more/24.jpg'

const Footer = () => {
    return (
        <div className='w-full bg-cover pt-10' style={{ backgroundImage: `url(${footerBg})` }}>
            <div className='md:w-[75%] mx-auto flex flex-col md:flex-row gap-8 lg:gap-24 items-center'>
                <div className='space-y-8 max-w-[650px] px-6'>
                    <img className='w-16' src={logo} alt="" />
                    <h1 className='text-3xl font-bold'>Expresso Emporium</h1>
                    <p className=''>
                        Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                    </p>
                    <div className='flex gap-5 text-3xl text-black'>
                        <RiFacebookCircleFill />
                        <BsTwitter />
                        <BsInstagram />
                        <LiaLinkedinIn />
                    </div>
                    <h2 className='text-3xl font-bold'>Get In Touch</h2>
                    <h2 className='text-black flex gap-6 items-center'><BiPhone className='font-bold text-xl'></BiPhone> +91200000203</h2>
                    <h2 className='text-black flex gap-6 items-center'><BiEnvelope className='font-bold text-xl'></BiEnvelope> abc@gmail.com</h2>
                    <h2 className='text-black flex gap-6 items-center'><CiLocationOn className='font-bold text-xl'></CiLocationOn>72, Wall street, King Road, Dhaka</h2>
                </div>
                <div className='flex-grow min-w-[320px]'>
                    <h2 className='text-3xl font-bold'>Contact With Us</h2>
                    <div className='flex flex-col gap-4'>
                        <input className='px-4 py-2 rounded-md' type="text" placeholder='Name' />
                        <input className='px-4 py-2 rounded-md' type="text" placeholder='Email' />
                        <input className='px-4 py-2 rounded-md pb-10' type="text" placeholder='Message' />
                        <div>
                            <button className='btn border-2 border-black rounded-full px-4 py-2'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center py-3 bg-cover bg-center mt-8 text-white' style={{backgroundImage:`url(${footerFootBg})`}}>
                <p>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;