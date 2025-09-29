// import React from "react";

// const Home = () => {
//     return (
//         <div
//             className="bg-cover bg-center h-screen flex items-center justify-center"
//             style={{ backgroundImage: "url('/images/hero.png')" }}
//         >
//             <div className="bg-white bg-opacity-5 h-full w-full flex items-center justify-center">
//                 <div className="text-center px-4">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-500 font-bold mb-2">
//                         એક પગલું સ્વસ્થ જીવન તરફ
//                     </h2>
//                     <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold mb-8">

//                     </h3>

//                     <p className="text-base sm:text-lg md:text-xl text-black max-w-2xl mx-auto mb-10">
//                         આરોગ્ય વાનગીઓ — ચૂલા વિણાનું રસોડું” એ સ્વસ્થ જીવન તરફનો સાદો પણ શક્તિશાળી પ્રયત્ન છે. અહીં તમને મળશે કાચા ખોરાકની સરળ રેસિપીઓ, પ્રાકૃતિક ઉપચાર તથા પૌષ્ટિક જીવન જીવવાની પ્રેરણા
//                     </p>

//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">


//                         <a href="/">
//                             <button className="bg-transparent border-2 border-black text-black hover:bg-white hover:text-gray-800 px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1">
//                                 રેસિપીઝ જુઓ
//                             </button>
//                         </a>
//                         <a href="/">
//                             <button className="bg-transparent border-2 border-black text-black hover:bg-white hover:text-gray-800 px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1">
//                                 વિડિઓ શીખો
//                             </button>
//                         </a>
//                         <a href="/">
//                             <button className="bg-transparent border-2 border-black text-black hover:bg-white hover:text-gray-800 px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1">
//                                 વર્કશોપમાં નોંધણી કરો
//                             </button>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, BookOpen, Star, MessageCircle, Heart, Utensils, Leaf } from 'lucide-react';

const Home = () => {
    const whatsappNumber = "+૯૧૯૮૭૬૫૪૩૨૧૦";
    const whatsappMessage = "નમસ્તે! હું આરોગ્ય રસોઇની સ્વસ્થ વાનગીઓ વિશે વધુ જાણવા માંગુ છું.";

    const testimonials = [
        {
            id: 1,
            name: "રિયા પટેલ",
            text: "આરોગ્ય રસોઈની રેસિપીઓ અજમાવીને મારું સ્વાસ્થ્ય સુધર્યું છે. આભાર!",
            rating: 5,
            location: "અમદાવાદ"
        },
        {
            id: 2,
            name: "રાજેશ શાહ",
            text: "કાચા ખોરાકની વાનગીઓએ મારા ઉર્જા સ્તરને સંપૂર્ણપણે બદલી નાખ્યું છે!",
            rating: 5,
            location: "સુરત"
        },
        {
            id: 3,
            name: "મીરા જોશી",
            text: "આ વર્કશોપ અતિ માહિતીપ્રદ અને વ્યવહારુ છે. ખૂબ ભલામણ!",
            rating: 5,
            location: "વડોદરા"
        }
    ];

    return (
        <div className="space-y-0">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    <span className="text-green-600">આરોગ્ય</span> રસોઇ
                                </h1>
                                <p className="text-xl lg:text-2xl text-black font-bold">
                                    સ્વસ્થ જીવન તરફ એક પગલું
                                </p>
                                <p className="text-lg text-gray-600 font-bold leading-relaxed">
                                    આધુનિક પોષણ વિજ્ઞાન સાથે ગુજરાતી ભોજનના પ્રાચીન જ્ઞાનને શોધો. કાચા ખોરાકની વાનગીઓ, પરંપરાગત સ્વસ્થ વાનગીઓ શીખો અને તમારી જીવનશૈલીને કુદરતી રીતે બદલો.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/recipes"
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200 flex items-center justify-center space-x-2 group"
                                >
                                    <BookOpen className="h-5 w-5" />
                                    <span>રેસિપિનું અન્વેષણ કરો</span>
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-8 py-4 rounded-full font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    <span>શરૂ કરો</span>
                                </a>
                            </div>

                            <div className="flex items-center space-x-8 pt-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600">૫૦૦+</div>
                                    <div className="text-sm text-gray-600">સ્વસ્થ વાનગીઓ</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600">૧૦૦૦+</div>
                                    <div className="text-sm text-gray-600">સુખી પરિવારો</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600">૫૦+</div>
                                    <div className="text-sm text-gray-600">વિડિઓ ટ્યુટોરિયલ્સ</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                <img
                                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="સ્વસ્થ ગુજરાતી થાળી"
                                    className="w-full h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-xl font-semibold">પરંપરાગત ગુજરાતી થાળી</h3>
                                    <p className="text-sm opacity-90">પૌષ્ટિક • સ્વાદિષ્ટ • સ્વસ્થ</p>
                                </div>
                            </div>

                            {/* Floating elements */}
                            {/* <div className="absolute -top-4 -right-4 bg-green-500 text-white p-4 rounded-full shadow-lg animate-pulse">
                <Leaf className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white p-4 rounded-full shadow-lg">
                <Heart className="h-6 w-6" />
              </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">અમારા પ્લેટફોર્મનું અન્વેષણ કરો</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            સ્વસ્થ જીવનશૈલીની સફર માટે તમને જે જોઈએ છે તે બધું
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link to="/recipes" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                                <Utensils className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">સ્વસ્થ વાનગીઓ</h3>
                            <p className="text-gray-600 mb-6">શ્રેષ્ઠ પોષણ માટે કાચો ખોરાક, પરંપરાગત વાનગીઓ, રસ અને સલાડ</p>
                            <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                                <span>રેસિપિનું અન્વેષણ કરો</span>
                                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <Link to="/videos" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                                <Play className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">વિડિઓ ટ્યુટોરિયલ્સ</h3>
                            <p className="text-gray-600 mb-6">નિષ્ણાતો તરફથી સ્ટેપ-બાય-સ્ટેપ રસોઈ વિડિઓઝ અને આરોગ્ય કાર્યશાળાઓ</p>
                            <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                                <span>વિડિઓઝ જુઓ</span>
                                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <Link to="/workshops" className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                                <Users className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">વર્કશોપ</h3>
                            <p className="text-gray-600 mb-6">સ્વસ્થ રસોઈ અને જીવનશૈલીમાં પરિવર્તન પર ઇન્ટરેક્ટિવ સત્રો</p>
                            <div className="flex items-center text-orange-600 font-medium group-hover:text-orange-700">
                                <span>વર્કશોપમાં જોડાઓ</span>
                                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">આપણો સમુદાય શું કહે છે</h2>
                        <p className="text-xl text-gray-600">જે લોકોએ પોતાના સ્વાસ્થ્યમાં પરિવર્તન લાવ્યું તેમની વાસ્તવિક વાર્તાઓ</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/testimonials"
                            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-lg group"
                        >
                            <span>વધુ સફળતાની વાર્તાઓ વાંચો</span>
                            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            તમારી સ્વાસ્થ્ય યાત્રા શરૂ કરવા માટે તૈયાર છો?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            આરોગ્ય રસોઈની સ્વસ્થ વાનગીઓ અને જીવનશૈલી માર્ગદર્શનથી હજારો પરિવારો સાથે જોડાઓ જેમણે પોતાનું જીવન બદલી નાખ્યું છે.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 group"
                            >
                                <MessageCircle className="h-5 w-5" />
                                <span>વોટ્સએપ ચેટ શરૂ કરો</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <Link
                                to="/workshop"
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-bold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                            >
                                <Users className="h-5 w-5" />
                                <span>વર્કશોપમાં જોડાઓ</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;