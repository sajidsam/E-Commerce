import React, { useState, useEffect } from 'react';
import { faLocationDot, faSearch ,faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const languages = [
  { code: 'en', name: 'English', emoji: '🇺🇸' },
  { code: 'es', name: 'Spanish', emoji: '🇪🇸' },
  { code: 'fr', name: 'French', emoji: '🇫🇷' },
  { code: 'de', name: 'German', emoji: '🇩🇪' },
];

const Header = () => {
  const [location, setLocation] = useState(null);
  const [selectedLang, setSelectedLang] = useState(languages[0].code);

  useEffect(() => {
    fetch('https://ipwho.is/')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setLocation(data);
      })
      .catch((err) => console.error('Error fetching location:', err));
  }, []);

  return (
    <>
      {/* Upper Section */}
      <section className='bg-gray-900 p-3 flex items-center space-x-10'>



        {/* Brand Logo */}
        <div>
          <h1 className='text-white font-semibold text-2xl'>GloBus</h1>
        </div>





        {/* Delivery */}
        <div className='text-white flex items-center'>
          <FontAwesomeIcon icon={faLocationDot} className='text-2xl mr-2' />
          <div className='font-semibold leading-tight'>
            <h1>Deliver to</h1>
            <h1>{location ? `${location.city}, ${location.country}` : 'Loading...'}</h1>
          </div>
        </div>





        {/* Language Selector */}
        <div>



        </div>







        
        {/* Search Section */}
        <div className='flex mx-4'>
          <select className='bg-gray-100 text-black px-2 rounded-l-md border-none outline-none'>
            <option>All</option>
            <option>Electronics</option>
            <option>Books</option>
            <option>Home & Kitchen</option>
          </select>
          <input
            type='text'
            placeholder='Search Amazon'
            className='w-100 px-3 py-1 text-black outline-none bg-white'
          />
          <button className='bg-orange-400 px-4 rounded-r-md'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>





        {/*Sign in   */}
        <div className='text-white leading-tight mx-0'>
          <FontAwesomeIcon icon={faUser} className='text-white' />
          <button className='rounded  px-2 font-semibold '>Sign in</button>
        </div>





      </section>
    </>
  );
};

export default Header;
