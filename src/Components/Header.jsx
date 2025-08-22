import React, { useState, useEffect, useRef } from 'react';
import { faLocationDot, faSearch, faUser, faChevronDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const languages = [
  { code: 'us', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'bd', name: 'Bangla' }
];

const Header = () => {
  const [location, setLocation] = useState(null);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch('https://ipwho.is/')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setLocation(data);
      })
      .catch((err) => console.error('Error fetching location:', err));
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (language) => {
    setSelectedLang(language);
    setIsLangDropdownOpen(false);
  };

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
            <h1 className="text-xs">Deliver to</h1>
            <h1 className="text-sm font-bold">{location ? `${location.city}, ${location.country}` : 'Loading...'}</h1>
          </div>
        </div>



        {/* Search Section */}
        <div className='flex flex-1 mx-4'>
          <select className='bg-gray-100 text-black px-2 rounded-l-md border-none outline-none text-sm'>
            <option>All</option>
            <option>Electronics</option>
            <option>Books</option>
            <option>Home & Kitchen</option>
          </select>
          <input
            type='text'
            placeholder='Search GloBus'
            className='flex-1 px-3 py-1 text-black outline-none bg-white'
          />
          <button className='bg-orange-400 px-4 rounded-r-md hover:bg-orange-500 transition-colors'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>


  {/* Language Selector */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center text-white px-2 py-1 rounded hover:outline-1 hover:outline-white"
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
          >

            <span className="font-bold flex items-center">
              <img
                src={`https://flagcdn.com/${selectedLang.code}.svg`}
                alt={selectedLang.name}
                className="w-5 h-4 mr-2 object-cover"
              />
              {selectedLang.name}
            </span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`ml-1 text-xs transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isLangDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">

              {languages.map((language) => (
                <button
                  key={language.code}
                  className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-blue-50 ${selectedLang.code === language.code ? 'bg-blue-100 text-blue-800' : 'text-gray-800'
                    }`}
                  onClick={() => handleLanguageSelect(language)}
                >
                  <img
                    src={`https://flagcdn.com/${language.code}.svg`}
                    alt={language.name}
                    className="w-5 h-4 mr-2 object-cover"
                  />
                  <span>{language.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>



        {/* Sign in */}
        <div className='text-white leading-tight mx-0 flex items-center'>
          <FontAwesomeIcon icon={faUser} className='text-white mr-1' />
          <button className='rounded px-2 font-semibold  py-1'>
            Sign in
          </button>
        </div>

      </section>
    </>
  );
};

export default Header;
