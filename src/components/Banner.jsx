import bannerBg from '../assets/more/3.png'
const Banner = () => {
    return (
        <div className='w-full flex justify-end bg-cover' style={{ backgroundImage: `url(${bannerBg})`, objectFit:'cover' }}>
            <div className='max-w-[700px] md:py-[260px] py-32 px-6 space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold text-white'>Would you like a Cup of Delicious Coffee?</h2>
                <p className='text-[#CCCC]'>It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='btn bg-[#E3B577] px-4 py-2'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;