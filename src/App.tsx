import AboutSection from './components/AboutSection';
import DiscountSection from './components/DiscountSection';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import JoinSection from './components/JoinSection';
import MediaSection from './components/MediaSection';
import PriceSection from './components/PriceSection';
import ProductSection from './components/ProductSection';
import ProfileSecton from './components/ProfileSecton';
import TestimoniSection from './components/TestimoniSection';

function App() {
    return (
        <>
            {/* As this is a single page/route, i am not using any other pages folder or routing mechanism */}
            <HeroSection />
            <MediaSection />
            <DiscountSection />
            <ProfileSecton />
            <ProductSection />
            <AboutSection />
            <JoinSection />
            <PriceSection />
            <TestimoniSection />
            <FooterSection />
        </>
    );
}

export default App;
