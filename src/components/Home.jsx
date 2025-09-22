import React from "react";

const Home = () => {
    return (
        <div
            className="bg-cover bg-center h-screen flex items-center justify-center"
            style={{ backgroundImage: "url('/images/hero.png')" }}
        >
            <div className="bg-white bg-opacity-5 h-full w-full flex items-center justify-center">
                <div className="text-center px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-500 font-bold mb-2">
                        એક પગલું સ્વસ્થ જીવન તરફ
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold mb-8">

                    </h3>

                    <p className="text-base sm:text-lg md:text-xl text-black max-w-2xl mx-auto mb-10">
                        આરોગ્ય વાનગીઓ — ચૂલા વિણાનું રસોડું” એ સ્વસ્થ જીવન તરફનો સાદો પણ શક્તિશાળી પ્રયત્ન છે. અહીં તમને મળશે કાચા ખોરાકની સરળ રેસિપીઓ, પ્રાકૃતિક ઉપચાર તથા પૌષ્ટિક જીવન જીવવાની પ્રેરણા
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        

                        <a href="/">
                            <button className="bg-transparent border-2 border-black text-black hover:bg-white hover:text-gray-800 px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1">
                                રેસિપીઝ જુઓ
                            </button>
                        </a>
                        <a href="/">
                            <button className="bg-transparent border-2 border-black text-black hover:bg-white hover:text-gray-800 px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1">
                                વિડિઓ શીખો
                            </button>
                        </a>
                        <a href="/">
                            <button className="bg-transparent border-2 border-black text-black hover:bg-white hover:text-gray-800 px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1">
                                વર્કશોપમાં નોંધણી કરો
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
