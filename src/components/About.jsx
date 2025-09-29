
import React from 'react';
import { Heart, Target, Users, Award, Leaf, Star } from 'lucide-react';
import Why from './Why';

const About = () => {
  return (
    <div className="py-0 space-y-16">
      <section className="bg-green-300 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            આરોગ્ય રસોઈ વિશે
          </h1>
          <p className="text-xl font-bold text-gray-600 max-w-3xl mx-auto leading-relaxed">
            સભાન આહાર અને કુદરતી ઘટકો દ્વારા સ્વસ્થ જીવનને પ્રોત્સાહન આપવા માટે પરંપરાગત ગુજરાતી જ્ઞાનને આધુનિક પોષણ વિજ્ઞાન સાથે જોડવું.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">અમારું ધ્યેય</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                આરોગ્ય રસોઈમાં, અમારું ધ્યેય <strong className='text-green-600'> સ્વસ્થ ખોરાક અને કાચા વાનગીઓને પ્રોત્સાહન આપવાનું છે </strong> જે શરીર અને આત્મા બંનેને પોષણ આપે છે. અમે માનીએ છીએ કે ખોરાક એ દવા છે, અને પરંપરાગત રસોઈ પદ્ધતિઓ શ્રેષ્ઠ સ્વાસ્થ્યની ચાવી ધરાવે છે.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                અમે ગુજરાત અને તેની બહારના પરિવારો માટે સ્વસ્થ ભોજન સુલભ, આનંદપ્રદ અને ટકાઉ બનાવવા માટે સમર્પિત છીએ. અમારી વાનગીઓ, વર્કશોપ અને સમુદાય સહાય દ્વારા, અમે એક સમયે એક ભોજન, સ્વસ્થ આવતીકાલ બનાવવાનું લક્ષ્ય રાખીએ છીએ.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">૫૦૦૦+</div>
                <div className="text-sm text-gray-600">પરિવારોને મદદ મળી</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">૫૦૦+</div>
                <div className="text-sm text-gray-600">સ્વસ્થ વાનગીઓ</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://th.bing.com/th/id/R.dd5d9fbdd03a3b47d21baa8633231e67?rik=a3iMyOmV0XwEwA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-2%2fFood-HD-Wallpapers-04864.jpg&ehk=oCGq87EnzGa53wpyGPk3aNhI03hKYPPWLQVzqCKdPe0%3d&risl=&pid=ImgRaw&r=0"
              alt="Traditional cooking methods"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-red-500" />
                <span className="font-semibold text-gray-800">પ્રેમથી બનેલું</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-0">
        {/* <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">આપણી વાર્તા</h2>
              <p className="text-xl text-gray-600">આરોગ્ય રસોઈ કેવી રીતે જીવંત થઈ</p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">The Beginning</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Arogya Rasoi was born from a simple observation: despite having access to abundant healthy foods and traditional knowledge, many families were struggling with lifestyle-related health issues. We realized that the ancient wisdom of Gujarati cuisine, particularly raw food preparations and natural ingredients, held the answers to modern health challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Building Community</h3>
                    <p className="text-gray-600 leading-relaxed">
                      What started as sharing recipes with friends and family grew into a movement. We began conducting workshops, creating video tutorials, and building a community of health-conscious individuals who believe in the power of traditional, natural food preparation methods.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Growing Impact</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Today, Arogya Rasoi serves thousands of families across Gujarat and India, helping them rediscover the joy of healthy eating. Our recipes are tested, our workshops are engaging, and our community continues to grow stronger every day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Why/>
      </section>

      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">અમારા સ્થાપકોને મળો</h2>
          <p className="text-xl text-gray-600">આરોગ્ય રસોઇ પાછળ પ્રખર મન</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-green-600">કાળુભાઈ</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">કાળુભાઈ સાવલીયા</h3>
            <p className="text-green-600 font-medium mb-4">આરોગ્ય અને પોષણ નિષ્ણાત</p>
            <p className="text-gray-600 leading-relaxed">
              પરંપરાગત ગુજરાતી રસોઈ અને કુદરતી સ્વાસ્થ્ય પ્રથાઓમાં દાયકાઓનો અનુભવ ધરાવતા, કાલુભાઈ દરેક રેસીપીમાં અધિકૃત જ્ઞાન અને જુસ્સો લાવે છે.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-purple-600">રસીલાબેન</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">રસીલાબેન સાવલીયા</h3>
            <p className="text-purple-600 font-medium mb-4">પરંપરાગત રસોઈ નિષ્ણાત</p>
            <p className="text-gray-600 leading-relaxed">
              રસીલાબેનની કાચા ખોરાકની તૈયારી અને પરંપરાગત ગુજરાતી ભોજનમાં કુશળતા અમારા રેસીપી સંગ્રહ અને વર્કશોપ શિક્ષણનું હૃદય બનાવે છે.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/authors"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-lg group"
          >
            <span>અમારા લેખકો વિશે વધુ જાણો</span>
            <Star className="h-5 w-5 ml-2 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">અમારા મુખ્ય મૂલ્યો</h2>
            <p className="text-xl opacity-90">આપણે જે કંઈ કરીએ છીએ તેનું માર્ગદર્શન કરતા સિદ્ધાંતો</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">પ્રમાણિકતા</h3>
              <p className="opacity-90">દરેક રેસીપી પરંપરાગત શાણપણમાં મૂળ ધરાવે છે અને પેઢીઓથી પરીક્ષણ કરાયેલ છે.</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">કુદરતી સ્વાસ્થ્ય</h3>
              <p className="opacity-90">અમે કુદરતી, પ્રક્રિયા વગરના ઘટકોની ઉપચાર શક્તિમાં માનીએ છીએ.</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">સમુદાય</h3>
              <p className="opacity-90">એક એવો સહાયક સમુદાય બનાવવો જે સાથે મળીને વિકાસ પામે અને શીખે.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;