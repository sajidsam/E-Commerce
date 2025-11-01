import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCheckCircle, faLock, faHeadset } from '@fortawesome/free-solid-svg-icons';

const PromotionCard = () => {
    return (
        <div className='space-y-6 mt-30 mx-5 flex flex-col items-center'>
            <div className="oswald  bg-gray-100 text-black border-2 border-black font-bold text-xl p-4 rounded-xl flex items-center justify-center h-20 w-80 shadow-sm space-x-4">
                <span>Fast Delivery</span>
                <FontAwesomeIcon icon={faTruck} className="text-black" size="lg" />
            </div>
            <div className="oswald  bg-gray-100 text-black border-2 border-black font-bold text-xl p-4 rounded-xl flex items-center justify-center h-20 w-80 shadow-sm space-x-4">
                <span>Authorized Products</span>
                <FontAwesomeIcon icon={faCheckCircle} className="text-black" size="lg" />
            </div>
            <div className="oswald  bg-gray-100 text-black border-2 border-black font-bold text-xl p-4 rounded-xl flex items-center justify-center h-20 w-80 shadow-sm space-x-4">
                <span>Secure Payment</span>
                <FontAwesomeIcon icon={faLock} className="text-black" size="lg" />
            </div>
            <div className="oswald  bg-gray-100 text-black border-2 border-black font-bold text-xl p-4 rounded-xl flex items-center justify-center h-20 w-80 shadow-sm space-x-4">
                <span>24/7 Customer Support</span>
                <FontAwesomeIcon icon={faHeadset} className="text-black" size="lg" />
            </div>
        </div>
    );
};

export default PromotionCard;
