import { GoArrowUpRight } from 'react-icons/go';
import Navbar from './Navbar';
import Button from './shared/Button';
import SpecialText from './shared/SpecialText';
import { FaDiscord, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
const HeroSection = () => {
    return (
        <header className='bg-primary text-white'>
            <Navbar />
            <div className='grid grid-cols-2 container mx-auto gap-4'>
                <div className='flex items-start justify-center flex-col pr-[146px]'>
                    <h1 className='text-4xl font-semibold leading-[60px]'>
                        There is <SpecialText>always</SpecialText> something new
                        for us to learn
                    </h1>
                    <p className='text-white  leading-[30px] font-light py-3'>
                        we have created more than 100+ materials on various
                        things that will help your career, with mentors who are
                        experienced in their fields.
                    </p>
                    <div className='flex items-center justify-around space-x-3 py-3'>
                        <Button
                            isBrand
                            className='flex items-center space-x-2 font-semibold'
                        >
                            Start Journey <GoArrowUpRight />
                        </Button>
                        <ul className='flex items-center space-x-4 text-xl'>
                            <li>
                                <a href='#'>
                                    <FaSquareInstagram />
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <FaDiscord />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img
                        src={'/assets/hero-right.png'}
                        alt='Hero Image'
                        className='w-full'
                    />
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
