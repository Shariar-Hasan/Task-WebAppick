import { navbarRoutes } from '../utilites/routes';
import Button from './shared/Button';

const Navbar = () => {
    return (
        <nav className='w-full py-4'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <a href='#' className='text-2xl font-bold'>
                        Skill <span className='text-brand'>Shoot</span>
                    </a>
                    <ul className='flex items-center space-x-10 font-light'>
                        {navbarRoutes.map(({ title, path }) => (
                            <li>
                                <a
                                    href={path}
                                    className={
                                        path === '/' ? 'font-semibold' : ''
                                    }
                                >
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex items-center space-x-2'>
                        <Button>Login</Button>
                        <Button isBrand>Register</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
