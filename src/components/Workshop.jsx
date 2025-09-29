import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star, CheckCircle, MessageCircle, Phone, Mail } from 'lucide-react';

const Workshops = () => {
    const [selectedWorkshop, setSelectedWorkshop] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        workshop: '',
        experience: '',
        message: ''
    });

    const upcomingWorkshops = [
        {
            id: 1,
            title: "કાચા ખોરાકની સંપૂર્ણ માર્ગદર્શિકા",
            titleEn: "Complete Raw Food Guide Workshop",
            date: "૨૦૨૫-૦૨-૧૫",
            time: "સવારે ૧૦:૦૦ - સાંજે ૪:૦૦",
            location: "અમદાવાદ કોમ્યુનિટી સેન્ટર",
            price: "₹૨,૫૦૦",
            seats: 25,
            booked: 18,
            level: "શિખાઉ માણસ થી અદ્યતન",
            duration: "૬ કલાક",
            image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "કાચા ખોરાકના ફાયદા, તૈયારી પદ્ધતિઓ અને દૈનિક જીવનમાં કેવી રીતે સામેલ કરવું તેની સંપૂર્ણ માહિતી.",
            highlights: [
                "કાચા ખોરાકની તૈયારીની તકનીકો",
                "પોષણના ફાયદા સમજાવ્યા",
                "વ્યવહારુ રસોઈ સત્ર",
                "ઘરે લઈ જવા માટેની રેસીપી બુક",
                "વ્યક્તિગત પરામર્શ શામેલ છે"
            ],
            instructor: "કાળુભાઈ અને રસીલાબેન સાવલીયા"
        },
        {
            id: 2,
            title: "પરંપરાગત ગુજરાતી સ્વસ્થ રસોઈ",
            titleEn: "Traditional Gujarati Healthy Cooking",
            date: "૨૦૨૫-૦૨-૨૨",
            time: "સવારે ૯:૦૦ - બપોરે ૩:૦૦",
            location: "સુરત કલ્ચરલ હોલ",
            price: "₹૨,૦૦૦",
            seats: 30,
            booked: 12,
            level: "બધા સ્તરો",
            duration: "૬ કલાક",
            image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "પરંપરાગત ગુજરાતી વાનગીઓને સ્વસ્થ રીતે બનાવવાની કળા શીખો. કાંદા-લસણ વિનાની રેસિપીઓનો સમાવેશ.",
            highlights: [
                "પરંપરાગત મસાલા સંયોજનો",
                "તેલ રહિત રસોઈ પદ્ધતિઓ",
                "સાત્વિક રસોઈ સિદ્ધાંતો",
                "કૌટુંબિક ભોજન આયોજન",
                "ઇન્ટરેક્ટિવ રસોઈ ડેમો"
            ],
            instructor: "રસીલાબેન સાવલીયા"
        },
        {
            id: 3,
            title: "નેચરલ જ્યુસ અને ડિટોક્સ વર્કશોપ",
            titleEn: "Complete Detox & Juice Therapy",
            date: "૨૦૨૫-૦૩-૦૧",
            time: "સવારે ૧૦:૦૦ - બપોરે ૨:૦૦",
            location: "વડોદરા વેલનેસ સેન્ટર",
            price: "₹૧,૫૦૦",
            seats: 20,
            booked: 8,
            level: "શિખાઉ માણસ",
            duration: "૪ કલાક",
            image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "કુદરતી જ્યુસ, ડિટોક્સ ડ્રિંક્સ અને શરીરની આંતરિક સફાઈ માટેની અસરકારક પદ્ધતિઓ શીખો.",
            highlights: [
                "તાજા રસના સંયોજનો",
                "ડિટોક્સ પીણાંની વાનગીઓ",
                "શરીર શુદ્ધિકરણ પદ્ધતિઓ",
                "મોસમી રસ માર્ગદર્શિકા",
                "આરોગ્ય પરામર્શ"
            ],
            instructor: "કાળુભાઈ સાવલીયા"
        },
        {
            id: 4,
            title: "કૌટુંબિક આરોગ્ય અને પોષણ આયોજન",
            titleEn: "Complete Family Nutrition Workshop",
            date: "૨૦૨૫-૦૩-૦૮",
            time: "સવારે ૧૦:૦૦ - સાંજે ૪:૦૦",
            location: "રાજકોટ કોમ્યુનિટી સેન્ટર",
            price: "₹૩,૦૦૦",
            seats: 15,
            booked: 5,
            level: "બધા સ્તરો",
            duration: "૬ કલાક",
            image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "સમગ્ર પરિવાર માટે સંતુલિત આહાર યોજના, બાળકોનું પોષણ અને વિવિધ ઉંમરના લોકો માટે ખાસ માર્ગદર્શન.",
            highlights: [
                "વય-વિશિષ્ટ પોષણ",
                "બાળકો માટે સ્વસ્થ વાનગીઓ",
                "ભોજન તૈયાર કરવાની વ્યૂહરચનાઓ",
                "બજેટ-ફ્રેન્ડલી આયોજન",
                "કૌટુંબિક રસોઈ પ્રવૃત્તિઓ"
            ],
            instructor: "કાળુભાઈ અને રસીલાબેન સાવલીયા"
        }
    ];

    const pastWorkshops = [
        {
            title: "આહાર દ્વારા ડાયાબિટીસ નિયંત્રણ",
            date: "૨૦૨૫-૦૧-૧૫",
            attendees: 35,
            rating: 4.9
        },
        {
            title: "શિયાળામાં રોગપ્રતિકારક શક્તિ વધારનારા",
            date: "૨૦૨૫-૦૧-૦૮",
            attendees: 28,
            rating: 4.8
        },
        {
            title: "હૃદય સ્વસ્થ રસોઈ",
            date: "૨૦૨૪-૧૨-૧૮",
            attendees: 42,
            rating: 4.9
        }
    ];

    const whatsappNumber = "+૯૧૯૮૭૬૫૪૩૨૧૦";

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `નમસ્તે! હું આ માટે નોંધણી કરાવવા માંગુ છું: ${formData.workshop}\n\nનામ: ${formData.name}\nઇમેઇલ: ${formData.email}\nફોન: ${formData.phone}\n\nઅનુભવ: ${formData.experience}\nસંદેશ: ${formData.message}`;
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);
    };

    const handleQuickRegister = (workshopTitle) => {
        const message = `નમસ્તે! હું વર્કશોપ માટે નોંધણી કરાવવા માંગુ છું: ${workshopTitle}. કૃપા કરીને મને વધુ વિગતો મોકલો.`;
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);
    };

    return (
        <div className="py-0">
            <div className="py-0">
                <section className="bg-green-300 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                            આરોગ્ય કાર્યશાળાઓ
                        </h1>
                        <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
                            ઇન્ટરેક્ટિવ વર્કશોપ અને સેમિનાર દ્વારા સ્વસ્થ રસોઈ અને જીવનશૈલીની પદ્ધતિઓ શીખો
                        </p>
                    </div>
                </section>

                {/* <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-green-600">100+</div>
                                <div className="text-gray-600">Workshops Conducted</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-green-600">3000+</div>
                                <div className="text-gray-600">Students Trained</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-green-600">4.9/5</div>
                                <div className="text-gray-600">Average Rating</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-green-600">95%</div>
                                <div className="text-gray-600">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">આગામી વર્કશોપ</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {upcomingWorkshops.map((workshop) => (
                                <div key={workshop.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="relative">
                                        <img
                                            src={workshop.image}
                                            alt={workshop.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {workshop.level}
                                        </div>
                                        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                            {workshop.seats - workshop.booked} બાકી બેઠકો
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{workshop.title}</h3>
                                        {/* <p className="text-gray-600 mb-4">{workshop.titleEn}</p> */}
                                        <p className="text-gray-700 text-sm mb-4">{workshop.description}</p>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center text-sm text-gray-600">
                                                <Calendar className="h-4 w-4 mr-2" />
                                                <span>{new Date(workshop.date).toLocaleDateString('en-GB')}</span>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <Clock className="h-4 w-4 mr-2" />
                                                <span>{workshop.time} ({workshop.duration})</span>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <MapPin className="h-4 w-4 mr-2" />
                                                <span>{workshop.location}</span>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <Users className="h-4 w-4 mr-2" />
                                                <span>{workshop.instructor} દ્વારા</span>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                            <h4 className="font-semibold text-gray-900 mb-2">વર્કશોપ હાઇલાઇટ્સ:</h4>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                {workshop.highlights.map((highlight, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="text-2xl font-bold text-green-600">{workshop.price}</div>
                                            <button
                                                onClick={() => handleQuickRegister(workshop.title)}
                                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center space-x-2"
                                            >
                                                <MessageCircle className="h-4 w-4" />
                                                <span>અત્યારે નોંધાવો</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white" id="register">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">વર્કશોપ નોંધણી</h2>
                                <p className="text-xl text-gray-600">નીચે આપેલ ફોર્મ ભરો અથવા સીધો અમારો સંપર્ક કરો</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">સંપર્કમાં રહો</h3>
                                        <div className="space-y-4">
                                            <a
                                                href={`https://wa.me/${whatsappNumber}`}
                                                className="flex items-center p-4 bg-gray-100 hover:bg-gray-300 border border-black rounded-xl transition-colors group"
                                            >
                                                <MessageCircle className="h-8 w-8 text-green-600 mr-4" />
                                                <div>
                                                    <div className="font-semibold text-gray-900">વોટ્સએપ નોંધણી</div>
                                                    <div className="text-gray-600">વોટ્સએપ દ્વારા ઝડપી અને સરળ નોંધણી</div>
                                                </div>
                                            </a>

                                            <a
                                                href="tel:+919876543210"
                                                className="flex items-center p-4 bg-gray-100 hover:bg-gray-300 border border-black rounded-xl transition-colors"
                                            >
                                                <Phone className="h-8 w-8 text-green-600 mr-4" />
                                                <div>
                                                    <div className="font-semibold text-gray-900">નોંધણી માટે કૉલ કરો</div>
                                                    <div className="text-gray-600">+૯૧ ૯૮૭૬૫ ૪૩૨૧૦</div>
                                                </div>
                                            </a>

                                            <a
                                                href="mailto:workshops@arogyarasoi.com"
                                                className="flex items-center p-4 bg-gray-100 hover:bg-gray-300 border border-black rounded-xl transition-colors"
                                            >
                                                <Mail className="h-8 w-8 text-green-600 mr-4" />
                                                <div>
                                                    <div className="font-semibold text-gray-900">ઇમેઇલ નોંધણી</div>
                                                    <div className="text-gray-600">workshops@arogyarasoi.com</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                                        <h4 className="font-bold text-yellow-800 mb-3">વર્કશોપના લાભો:</h4>
                                        <ul className="space-y-2 text-yellow-700">
                                            <li className="flex items-center">
                                                <CheckCircle className="h-4 w-4 mr-2" />
                                                પ્રમાણિત પ્રશિક્ષકો તરફથી નિષ્ણાત માર્ગદર્શન
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle className="h-4 w-4 mr-2" />
                                                રસોઈનો વ્યવહારુ અનુભવ
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle className="h-4 w-4 mr-2" />
                                                રેસીપી પુસ્તકો અને સામગ્રી શામેલ છે
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle className="h-4 w-4 mr-2" />
                                                વ્યક્તિગત આરોગ્ય સલાહ
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle className="h-4 w-4 mr-2" />
                                                આજીવન સમુદાય ઍક્સેસ
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-2xl p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">નોંધણી ફોર્મ</h3>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">પૂરું નામ *</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">ઈમેલ સરનામું *</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                                placeholder="Enter your email address"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">ફોન નંબર *</label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">વર્કશોપ પસંદ કરો *</label>
                                            <select
                                                required
                                                value={formData.workshop}
                                                onChange={(e) => setFormData({ ...formData, workshop: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                            >
                                                <option value="">વર્કશોપ પસંદ કરો</option>
                                                {upcomingWorkshops.map((workshop) => (
                                                    <option key={workshop.id} value={workshop.title}>
                                                        {workshop.title} - {new Date(workshop.date).toLocaleDateString()}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">રસોઈનો અનુભવ</label>
                                            <select
                                                value={formData.experience}
                                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                            >
                                                <option value="">તમારું સ્તર પસંદ કરો</option>
                                                <option value="beginner">શિખાઉ માણસ</option>
                                                <option value="intermediate">મધ્યવર્તી</option>
                                                <option value="advanced">અદ્યતન</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">વધારાનો સંદેશ</label>
                                            <textarea
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                                placeholder="કોઈ ચોક્કસ પ્રશ્નો અથવા આહારની જરૂરિયાતો?"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                                        >
                                            <MessageCircle className="h-5 w-5" />
                                            <span>વોટ્સએપ દ્વારા નોંધણી કરો</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">તાજેતરની વર્કશોપ</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {pastWorkshops.map((workshop, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                                    <h3 className="font-bold text-gray-900 mb-2">{workshop.title}</h3>
                                    <p className="text-gray-600 mb-4">{new Date(workshop.date).toLocaleDateString()}</p>
                                    <div className="flex justify-center items-center space-x-4 text-sm">
                                        <div className="flex items-center">
                                            <Users className="h-4 w-4 text-gray-400 mr-1" />
                                            <span>{workshop.attendees} હાજરી આપનારાઓ</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                            <span>{workshop.rating}/5</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Workshops;
