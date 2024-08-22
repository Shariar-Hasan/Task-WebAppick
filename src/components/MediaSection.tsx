import { supportedBrandList } from '../utilites/lists';
import SpecialText from './shared/SpecialText';

const MediaSection = () => {
    return (
        <section className='py-32 text-center space-y-3'>
            <h3 className='text-3xl font-medium'>
                Trusted more than <SpecialText isBranded>100+</SpecialText> in
                the world{' '}
            </h3>
            <p className='py-10'>
                they have asked us more than 3 times to teach their employees
                about various things. to improve their skills
            </p>
            <div className='flex flex-wrap gap-20 justify-center items-center'>
                {supportedBrandList.map(({ title, src }) => (
                    <img src={src} alt={title} className='max-w-fit' />
                ))}
            </div>
        </section>
    );
};

export default MediaSection;
