
import Header from '../Components/Header';
import AdvBanner from '../Components/AdvBanner';
import Footer from '../Components/Footer';
import MenuItem from '../Components/MenuItem';
import PromotionCard from '../Components/PromotionCard';
import Timer from '../Components/Timer';
import ContactUs from '../Components/ContactUs';
import Products from '../Components/Products';
const Home = () => {

    return (
        <>



            <div className='flex space-x-2 mx-44'>
                <div className='flex flex-col '>
                    <MenuItem></MenuItem>
                    <Timer></Timer>
                </div>
                <AdvBanner></AdvBanner>
                {/* <PromotionCard></PromotionCard> */}
            </div>
            <Products></Products>
            <ContactUs></ContactUs>



        </>
    );
};

export default Home;