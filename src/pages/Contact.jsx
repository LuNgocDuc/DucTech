import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Contact to <span className="text-blue-600">DucTech</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-gray-700 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold">Contact Information</h3>
                            <p className="text-gray-600"> Have a question or need assistance with a fashion product? Contact us.</p>
                        </div>
                        <div className="space-y-1">
                            <p><strong>📍 Address:</strong> Saigon Intela Apartment, Ward 5 Phong Phu, Binh Chanh</p>
                            <p><strong>📧 Email:</strong> duclu1304@gmail.com</p>
                            <p><strong>📞 Phone:</strong> +84 949 338 397</p>
                        </div>
                    </div>
                    {/* Form Section */}
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-1 font-medium">Your name ?</label>
                            <input type="text" placeholder="Your name..." className="w-full px-3 py-2 border border-gray-400 rounded-md placeholder-gray-500 focus:border-blue-500 focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1 font-medium">Email ?</label>
                            <input type="email" placeholder="abc@example.com" className="w-full px-3 py-2 border border-gray-400 rounded-md placeholder-gray-500 focus:border-blue-500 focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1 font-medium">Content</label>
                            <textarea rows="4" placeholder="Enter your message..." className="w-full px-3 py-2 border border-gray-400 rounded-md placeholder-gray-500 focus:border-blue-500 focus:outline-none"></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-150 cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;