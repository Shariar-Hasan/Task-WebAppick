import { FaDiscord, FaSquareInstagram, FaTwitter } from 'react-icons/fa6';
import { Route, SocialRoute } from './type/routes';

export const navbarRoutes: Route[] = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Course',
        path: '#',
    },
    {
        title: 'Subscribe',
        path: '#',
    },
    {
        title: 'About',
        path: '#',
    },
    {
        title: 'Testimoni',
        path: '#',
    },
];
export const socialRoutes: SocialRoute[] = [
    {
        title: 'Instagram',
        path: '#',
        icon: <FaSquareInstagram />,
    },
    {
        title: 'Twitter',
        path: '#',
        icon: <FaTwitter />,
    },
    {
        title: 'Discord',
        path: '#',
        icon: <FaDiscord />,
    },
];
