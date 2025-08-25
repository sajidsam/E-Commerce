import React, { useState, useEffect, useRef } from "react";
import {
  faLocationDot,
  faSearch,
  faUser,
  faChevronDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Languages
const langs = [
  { code: "us", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "bd", name: "Bangla" },
];

// Categories
const cats = [
  "All",
  "Electronics",
  "Books",
  "Home & Kitchen",
  "Fashion",
  "Beauty",
  "Sports",
  "Toys",
  "Groceries",
  "Automotive",
];

const Header = () => {
  // Static location
  const loc = { city: "Dhaka", country: "Bangladesh" };

  const [lang, setLang] = useState(langs[0]);
  const [cat, setCat] = useState(cats[0]);
  const [openLang, setOpenLang] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  const langRef = useRef(null);
  const catRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const close = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setOpenLang(false);
      if (catRef.current && !catRef.current.contains(e.target)) setOpenCat(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <section className="bg-gray-900 p-3 flex items-center space-x-10 justify-center sticky z-50 top-0">
      {/* Logo */}
      <div>
        <h1 className="font-bold text-3xl text-green-600">
          Glo<span className="text-white">Bus</span>
        </h1>
      </div>

      {/* Location */}
      <div className="text-white flex items-center">
        <FontAwesomeIcon icon={faLocationDot} className="text-2xl mr-2" />
        <div className="font-semibold leading-tight">
          <h1 className="text-xs">Deliver to</h1>
          <h1 className="text-sm font-bold">
            {`${loc.city}, ${loc.country}`}
          </h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 mx-6 max-w-3xl relative">
        {/* Category Dropdown */}
        <div className="relative" ref={catRef}>
          <button
            onClick={() => setOpenCat(!openCat)}
            className="bg-gray-100 text-gray-700 px-4 h-11 rounded-l-md border-r border-gray-300 text-sm font-medium flex items-center hover:bg-gray-200 transition"
          >
            {cat}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`ml-2 text-xs transition-transform ${openCat ? "rotate-180" : ""}`}
            />
          </button>

          {openCat && (
            <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-2 z-50">
              {cats.map((c) => (
                <button
                  key={c}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-blue-50 ${
                    cat === c ? "bg-blue-100 text-blue-800" : "text-gray-800"
                  }`}
                  onClick={() => {
                    setCat(c);
                    setOpenCat(false);
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder={`Search in ${cat}...`}
          className="flex-1 px-4 h-11 text-black outline-none bg-white border-t border-b border-gray-300 focus:ring-2 focus:ring-orange-400"
        />

        <button className="bg-gradient-to-r from-orange-400 to-orange-500 px-5 h-11 rounded-r-md hover:from-orange-500 hover:to-orange-600 transition flex items-center justify-center">
          <FontAwesomeIcon icon={faSearch} className="text-white text-lg" />
        </button>
      </div>

      {/* Language Selector */}
      <div className="relative" ref={langRef}>
        <button
          className="flex items-center text-white px-2 py-1 rounded hover:outline-1 hover:outline-white"
          onClick={() => setOpenLang(!openLang)}
        >
          <span className="font-bold flex items-center">
            <img
              src={`https://flagcdn.com/${lang.code}.svg`}
              alt={lang.name}
              className="w-5 h-4 mr-2 object-cover"
            />
            {lang.name}
          </span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`ml-1 text-xs transition-transform ${openLang ? "rotate-180" : ""}`}
          />
        </button>

        {openLang && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            {langs.map((l) => (
              <button
                key={l.code}
                className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-blue-50 ${
                  lang.code === l.code ? "bg-blue-100 text-blue-800" : "text-gray-800"
                }`}
                onClick={() => {
                  setLang(l);
                  setOpenLang(false);
                }}
              >
                <img
                  src={`https://flagcdn.com/${l.code}.svg`}
                  alt={l.name}
                  className="w-5 h-4 mr-2 object-cover"
                />
                <span>{l.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Cart */}
      <div className="text-white text-sm cursor-pointer flex items-center">
        <FontAwesomeIcon icon={faCartShopping} />
        <h1 className="mx-1">Cart</h1>
      </div>

      {/* Sign In */}
      <div className="text-white text-sm cursor-pointer flex items-center">
        <FontAwesomeIcon icon={faUser} />
        <h1 className="mx-1">Sign In</h1>
      </div>
    </section>
  );
};

export default Header;
