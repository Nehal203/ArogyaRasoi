// src/pages/Testimonials.jsx
import React, { useState } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, Heart, CheckCircle, MapPin } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "પ્રિયા પટેલ",
      nameEn: "Priya Patel",
      location: "અમદાવાદ, ગુજરાત",
      image: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      category: "વજન ઘટાડો",
      testimonial: "આરોગ્ય રસોઈની રેસિપીઓ અજમાવીને મારું સ્વાસ્થ્ય સુધર્યું છે. 6 મહિનામાં 15 કિલો વજન ઘટ્યું છે અને એનર્જી લેવલ પણ વધ્યું છે. કાળુભાઈ અને રસીલાબેનનો આભાર!",
      testimonialEn: "Following Arogya Rasoi recipes has completely transformed my health. I lost 15kg in 6 months and my energy levels have increased significantly. Thank you Kalubhai and Rasilaben!",
      before: "વજન: 75 કિગ્રા, ઓછી ઉર્જા",
      after: "વજન: 60 કિગ્રા, ઉચ્ચ ઉર્જા",
      duration: "૬ મહિના",
      verified: true
    },
    {
      id: 2,
      name: "રાજેશ શાહ",
      nameEn: "Rajesg Shah",
      location: "સુરત, ગુજરાત",
      image: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      category: "ડાયાબિટીસ નિયંત્રણ",
      testimonial: "કાચા ખોરાકની વાનગીઓએ મને મારા ડાયાબિટીસને કુદરતી રીતે નિયંત્રિત કરવામાં મદદ કરી છે. મારા બ્લડ સુગરનું સ્તર હવે દવા વગર સ્થિર છે. વર્કશોપ અતિ માહિતીપ્રદ અને વ્યવહારુ હતા.",
      testimonialEn: "Raw food recipes have helped me control my diabetes naturally. My blood sugar levels are now stable without medication. The workshops were incredibly informative and practical.",
      before: "બ્લડ સુગર: ૧૮૦ મિલિગ્રામ/ડીએલ",
      after: "બ્લડ સુગર: ૧૧૦ મિલિગ્રામ/ડીએલ",
      duration: "૪ મહિના",
      verified: true
    },
    {
      id: 3,
      name: "મીરા જોશી",
      nameEn: "Meera Joshi",
      location: "વડોદરા, ગુજરાત",
      image: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      category: "કૌટુંબિક સ્વાસ્થ્ય",
      testimonial: "અમારા પરિવારનું સ્વાસ્થ્ય સુધાર્યું છે. બાળકો પણ આ સ્વસ્થ ખોરાક ખુશીથી ખાય છે. વર્કશોપ્સ ખૂબ જ માહિતીપ્રદ અને વ્યવહારિક છે. હંમેશા સપોર્ટ મળે છે.",
      testimonialEn: "Our entire family's health has improved. Even kids happily eat these healthy foods. The workshops are incredibly informative and practical. We always get great support.",
      before: "પરિવારમાં વારંવાર બીમારીઓ",
      after: "રોગપ્રતિકારક શક્તિમાં સુધારો, કોઈ બીમારી નહીં",
      duration: "૮ મહિના",
      verified: true
    },
    {
      id: 4,
      name: "અનિલ મહેતા",
      nameEn: "Anil Mehta",
      location: "રાજકોટ, ગુજરાત",
      image: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      category: "પાચન સ્વાસ્થ્ય",
      testimonial: "પાચન સંબંધી સમસ્યાઓ થી છુટકારો મળ્યો છે. કાચા ખોરાક અને પરંપરાગત રેસિપીઓથી પેટ સંબંધી તકલીફો દૂર થઈ છે. આ સત્વિક ખોરાક ખરેખર અસરકારક છે.",
      testimonialEn: "Got rid of digestive problems. Raw food and traditional recipes have eliminated stomach related issues. This sattvic food is really effective.",
      before: "ક્રોનિક પાચન સમસ્યાઓ",
      after: "સંપૂર્ણ પાચન સ્વાસ્થ્ય",
      duration: "૩ મહિના",
      verified: true
    },
    {
      id: 5,
      name: "કિરણ દવે",
      nameEn: "Kiran Dave",
      location: "ગાંધીનગર, ગુજરાત",
      image: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      category: "માનસિક સ્પષ્ટતા",
      testimonial: "માનસિક સ્પષ્ટતા અને એકાગ્રતા વધી છે. યોગ અને આ સ્વસ્થ ખોરાકનું કમ્બિનેશન ખૂબ જ અસરકારક છે. મૂડ પણ હંમેશા સારો રહે છે.",
      testimonialEn: "Mental clarity and concentration have improved. The combination of yoga and this healthy food is very effective. My mood is always good now.",
      before: "માનસિક ધુમ્મસ, મૂડ સ્વિંગ",
      after: "સ્પષ્ટ વિચારસરણી, સ્થિર મૂડ",
      duration: "૫ મહિના",
      verified: true
    },
    {
      id: 6,
      name: "નેહા શર્મા",
      nameEn: "Neha Sharma",
      location: "ભાવનગર, ગુજરાત",
      image: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      category: "ત્વચા આરોગ્ય",
      testimonial: "ત્વચા ચમકદાર બની છે અને વાળ પણ સ્વસ્થ થયા છે. આંતરિક સફાઈ અને પોષણથી બહારનો ફરક દેખાય છે. કુદરતી સુંદરતા મળી છે.",
      testimonialEn: "My skin has become glowing and hair has become healthier. Internal cleansing and nutrition shows external difference. I have achieved natural beauty.",
      before: "નિસ્તેજ ત્વચા, વાળની ​​સમસ્યાઓ",
      after: "ચમકતી ત્વચા, સ્વસ્થ વાળ",
      duration: "૪ મહિના",
      verified: true
    }
  ];

  const categories = [
    { name: "All Stories", count: testimonials.length },
    { name: "Weight Loss", count: testimonials.filter(t => t.category === "Weight Loss").length },
    { name: "Diabetes Control", count: testimonials.filter(t => t.category === "Diabetes Control").length },
    { name: "Family Health", count: testimonials.filter(t => t.category === "Family Health").length },
    { name: "Digestive Health", count: testimonials.filter(t => t.category === "Digestive Health").length },
    { name: "Mental Clarity", count: testimonials.filter(t => t.category === "Mental Clarity").length },
    { name: "Skin Health", count: testimonials.filter(t => t.category === "Skin Health").length }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-0">
      <section className="bg-green-300 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            સફળતા કહાણીઓ
          </h1>
          <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
            અમારા સમુદાયના સભ્યોએ આરોગ્યદાયક જીવનપદ્ધતિને અપનાવવાથી કરવામાં આવેલી વાસ્તવિક પરિવર્તનાઓ
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">૫૦૦૦+</div>
              <div className="text-gray-600">ખુશ જોયા પરિવાર</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">૯૫%</div>
              <div className="text-gray-600">સફળતા દર</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">૫૦૦+</div>
              <div className="text-gray-600">સત્યાપિત સમીક્ષાઓ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">૪.૯/૫</div>
              <div className="text-gray-600">સરેરાશ રેટિંગ</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">વિશેષિત સફળતા કથાઓ</h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{testimonials[currentSlide].name}</h3>
                      <p className="text-gray-600">{testimonials[currentSlide].nameEn}</p>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">{testimonials[currentSlide].location}</span>
                        {testimonials[currentSlide].verified && (
                          <CheckCircle className="h-4 w-4 text-blue-500 ml-2" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                    <span className="ml-2 text-gray-600 font-medium">{testimonials[currentSlide].category}</span>
                  </div>

                  <div className="relative mb-6">
                    {/* <Quote className="h-8 w-8 text-green-200 absolute -top-2 -left-2" /> */}
                    <p className="text-gray-700 italic leading-relaxed mb-4 pl-6">
                      {testimonials[currentSlide].testimonial}
                    </p>
                    {/* <p className="text-gray-600 text-sm pl-6">
                      {testimonials[currentSlide].testimonialEn}
                    </p> */}
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div><strong>પહેલાં:</strong> {testimonials[currentSlide].before}</div>
                      <div><strong>પછી:</strong> {testimonials[currentSlide].after}</div>
                      <div><strong>સમયગાળો:</strong> {testimonials[currentSlide].duration}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500 to-emerald-500 p-8 lg:p-12 text-white relative">
                  <div className="absolute top-4 right-4">
                    <Heart className="h-12 w-12 opacity-20" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">આરોગ્ય પરિવર્તન</h4>
                  <p className="text-lg opacity-90 mb-6">
                    સ્વાસ્થ્ય પ્રત્યે સભાન પરિવારોના અમારા સમુદાયની બીજી સફળતાની વાર્તા.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>ચકાસાયેલ પરિણામો</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>નિષ્ણાત માર્ગદર્શન</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>કુદરતી પદ્ધતિઓ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ArrowRight className="h-5 w-5 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Success by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="text-2xl font-bold text-green-600 mb-2">{category.count}</div>
                <div className="text-sm text-gray-600">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* All Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">બધી સફળતાની વાર્તાઓ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  {testimonial.verified && (
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                  )}
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{testimonial.category}</span>
                </div>

                <p className="text-gray-700 text-sm line-clamp-4 mb-4">
                  {testimonial.testimonial}
                </p>

                <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600">
                  <div><strong>સમયગાળો:</strong> {testimonial.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">તમારી સફળતાની વાર્તા લખવા માટે તૈયાર?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            આરોગ્ય રસોઇ સાથે હજારો પરિવારો સાથે જોડાઓ જેમણે પોતાના સ્વાસ્થ્યમાં પરિવર્તન લાવ્યું છે.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/workshops"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              તમારી યાત્રા શરૂ કરો
            </a>
            <a 
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              વ્યક્તિગત માર્ગદર્શન મેળવો
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Testimonials;
