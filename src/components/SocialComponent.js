// SocialComponent.js
import React from 'react';

const SocialComponent = () => {
    return (
        <div className="bg-gray-200 p-10 rounded-lg">
            <div className="flex flex-col items-center space-y-4 md:space-y-0 md:space-x-4">
                <h2 className="text-lg">We're social</h2>
                <p className="text-gray-600">@exoticwheels.com</p>
                <a
                    href="https://linktr.ee/exoticwheels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-navyblue py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
                >
                    Visit Linktree
                </a>
            </div>
        </div>
    );
};

export default SocialComponent;
