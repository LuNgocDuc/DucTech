import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
                <h1 className="text-4xl font-bold text-center">About DucTech</h1>

                <p className="text-gray-700 text-lg">
                    Welcome to <span className="font-semibold text-red-600">DucTech</span>, where modern comfort meets timeless style. We are your go-to destination for high-quality, everyday apparel and wardrobe essentials. Our mission is to combine innovative fabric technology with clean, minimalist design to offer clothing that feels as good as it looks.
                </p>

                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-red-600">Our Philosophy</h2>
                    <p className="text-gray-700 text-base">
                        At DucTech, we believe that great style should be effortless and sustainable. We focus on curating a collection of durable, versatile pieces designed to seamlessly integrate into your busy life. We commit to transparency and ethical sourcing in every step of our creation process.
                    </p>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-red-600">Why Choose DucTech?</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Quality First: Durable fabrics and meticulous craftsmanship.</li>
                        <li>Modern Minimalist Design: Versatile styles that stay current.</li>
                        <li>Fair Pricing: Premium quality without the high markup.</li>
                        <li>Hassle-Free Experience: Easy returns and fast shipping for effortless shopping.</li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-red-600">Our Vision</h2>
                    <p className="text-gray-700 text-base">
                        We envision DucTech as a leader in essential wear, known for setting the standard in comfort and long-lasting style. We are committed to constantly seeking out better materials and innovating our processes to reduce our environmental footprint.
                    </p>
                </div>

                <div className="text-center mt-10">
                    <h3 className="text-xl font-semibold text-red-600 mb-2">Build Your Wardrobe with DucTech</h3>
                    <p className="text-gray-700 mb-4">
                        Discover the difference that quality and thoughtful design make to your everyday look.
                    </p>
                    <Link to={'/products'}><button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300 cursor-pointer">
                        Explore Collection
                    </button></Link> 
                </div>
            </div>
        </div>
    );
};

export default About;