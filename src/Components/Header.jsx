import React, { useState, useEffect, useRef } from "react";
import {
  faLocationDot,
  faSearch,
  faCartShopping,
  faUser,
  faChevronDown,
  faHeart,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const langs = [
  { code: "us", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "bd", name: "Bangla" },
];

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
  const [lang, setLang] = useState(langs[0]);
  const [cat, setCat] = useState(cats[0]);
  const [openLang, setOpenLang] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  const [user, setUser] = useState(() => {

    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loc, setLoc] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const langRef = useRef(null);
  const catRef = useRef(null);
  const profRef = useRef(null);

  const auth = getAuth();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(prev => ({
          ...prev,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL
        }));
      }
    });
    return () => unsubscribe();
  }, [auth]);


  const handleLogout = async () => {
    await signOut(auth);
    setOpenProfile(false);
    setUser(null);
    localStorage.removeItem("user");
  };


  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();
        if (data && data.city && data.country) {
          setLoc({ city: data.city, country: data.country });
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchLocation();
  }, []);


  useEffect(() => {
    const close = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setOpenLang(false);
      if (catRef.current && !catRef.current.contains(e.target)) setOpenCat(false);
      if (profRef.current && !profRef.current.contains(e.target)) setOpenProfile(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);


  useEffect(() => {
    if (darkMode) document.body.classList.add("dark", "bg-gray-800");
    else document.body.classList.remove("dark", "bg-gray-800");
  }, [darkMode]);

  const firstName = user?.name?.split(" ")[0] || user?.displayName?.split(" ")[0] || "";

  return (
    <>
      <section className="bg-gray-900 p-3 flex items-center justify-center space-x-10 sticky z-50 top-0 shadow-lg border-b border-gray-700">
        <div></div>
        <div>
          <h1 className="font-bold text-3xl text-green-600">
            Glo<span className="text-white">Bus</span>
          </h1>
        </div>

        <div className="text-white flex items-center">
          <FontAwesomeIcon icon={faLocationDot} className="text-2xl mr-2" />
          <div className="font-semibold leading-tight">
            <h1 className="text-xs">Deliver to</h1>
            <h1 className="text-sm font-bold">
              {loc ? `${loc.city}, ${loc.country}` : "Fetching..."}
            </h1>
          </div>
        </div>

        <div className="flex flex-1 mx-6 max-w-xl relative">
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
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-blue-50 ${cat === c ? "bg-blue-100 text-blue-800" : "text-gray-800"
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
            className="flex-1 px-4 h-11 text-black outline-none bg-white border-t border-b border-gray-300"
          />

          <button className="bg-gray-50 px-5 h-11 rounded-r-md flex items-center justify-center">
            <FontAwesomeIcon icon={faSearch} className="text-black text-lg" />
          </button>
        </div>

        <div className="relative" ref={langRef}>
          <button
            className="flex items-center text-white px-2 py-1 rounded hover:outline-1 hover:outline-white"
            onClick={() => setOpenLang(!openLang)}
          >
            <span className="font-bold flex items-center">
              <img src={`https://flagcdn.com/${lang.code}.svg`} alt={lang.name} className="w-5 h-4 mr-2 object-cover" />
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
                  className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-blue-50 ${lang.code === l.code ? "bg-blue-100 text-blue-800" : "text-gray-800"
                    }`}
                  onClick={() => {
                    setLang(l);
                    setOpenLang(false);
                  }}
                >
                  <img src={`https://flagcdn.com/${l.code}.svg`} alt={l.name} className="w-5 h-4 mr-2 object-cover" />
                  <span>{l.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="text-white cursor-pointer flex items-center">
          <FontAwesomeIcon icon={faCartShopping} />
          <h1 className="mx-1">Cart</h1>
        </div>

        <div className="text-white cursor-pointer flex items-center">
          <FontAwesomeIcon icon={faHeart} />
          <h1 className="mx-1">Wishlist</h1>
        </div>


        <button
          onClick={() => setDarkMode(!darkMode)}
          className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-400 dark:bg-gray-700 transition"
        >
          <span className="absolute left-1 text-xs text-yellow-400">
            <FontAwesomeIcon icon={faSun} />
          </span>
          <span className="absolute right-1 text-xs text-white">
            <FontAwesomeIcon icon={faMoon} />
          </span>

          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${darkMode ? "translate-x-6" : "translate-x-1"
              }`}
          ></span>
        </button>

        {user ? (
          <div ref={profRef} className="relative">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setOpenProfile(!openProfile)}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                <img
                  src={
                    user?.photoURL
                      ? user.photoURL.startsWith("http://")
                        ? user.photoURL.replace("http://", "https://")
                        : user.photoURL
                      : "/placeholder.png"
                  }
                  alt={firstName}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-white font-medium">{firstName}</span>
            </div>

            {openProfile && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg py-2 z-50">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/SignIn">
            <div className="text-white cursor-pointer flex items-center">
              <FontAwesomeIcon icon={faUser} />
              <h1 className="mx-1">Sign In</h1>
            </div>
          </Link>
        )}
      </section>

      <section>
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="6"
          className="bg-orange-100 p-1"
        >
          দ্রষ্টব্য: পণ্য গ্রহণ করার আগে প্যাকেট খুলে দেখুন—ড্যামেজ আছে কি না নিশ্চিত করুন। সমস্যা থাকলে অবিলম্বে রাইডারকে দেখান ও গ্রহণ বর্জন/রিপোর্ট করুন।
        </marquee>
      </section>
    </>
  );
};

export default Header;
