
import Header from '../Components/Header';
import AdvBanner from '../Components/AdvBanner';
import Footer from '../Components/Footer';
import MenuItem from '../Components/MenuItem';
import PromotionCard from '../Components/PromotionCard';
import Timer from '../Components/Timer';
import ContactUs from '../Components/ContactUs';
const Home = () => {
    return (
        <>

            <Header></Header>

            <div className='flex ml-10 space-x-5'>

                <div className='flex flex-col'>
                    
                    <MenuItem></MenuItem>
                    <Timer></Timer>

                </div>
                
                <AdvBanner></AdvBanner>
                <PromotionCard></PromotionCard>
            </div>

            <ContactUs></ContactUs>
            <Footer></Footer>


        </>
    );
};

export default Home;