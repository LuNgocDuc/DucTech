import banner from '../assets/banner1.jpg'
const MidBanner = () => {
    return (
        <div className="bg-gray-100 md:py-24">
            <div 
                className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]" 
                style={{
                    backgroundImage: `url('${banner}')`,
                    backgroundPosition: "center", 
                    backgroundAttachment: "fixed" 
                }}
            >
                <div className="absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4">
                        Unbeatable Black Friday Deals — Up to 70% Off!
                    </h1>
                    <p className="text-lg md:text-xl mb-5">
                        Don’t miss our biggest sale of the year! Grab your favorite electronics at unbeatable prices and enjoy massive discounts before time runs out.
                    </p>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MidBanner;