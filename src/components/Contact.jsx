import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });

  const whatsappNumber = "+919876543210";
  const email = "info@arogyarasoi.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `હેલો! હું વેબસાઇટ મારફતે તમારા સાથે સંપર્ક કરી રહ્યો છું.\n\nનામ: ${formData.name}\nઈમેલ: ${formData.email}\nવિષય: ${formData.subject}\n\nસંદેશ: ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`);
  };

  const handleQuickWhatsApp = () => {
    const message = "હેલો! હું આરોગ્ય રસોઈની સ્વસ્થ રેસીપી અને વર્કશોપ વિશે વધુ જાણવા માટે રુચિ ધરાવું છું.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="py-0">
      <section className="bg-green-300 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            સંપર્કમાં આવો
          </h1>
          <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
            શું તમને સ્વસ્થ રાંધણ વિશે પ્રશ્નો છે કે અમારા સમુદાયમાં જોડાવા માંગો છો? અમે મદદ કરવા માટે અહીં છીએ!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">આપણે જોડાઈએ</h2>
              <p className="text-lg text-gray-600 mb-8">
                ભલે તમને અમારી રેસીપી વિશે પૂછવું હોય, વર્કશોપમાં જોડાવા માંગતા હોવ, કે વ્યક્તિગત આરોગ્ય માર્ગદર્શનની જરૂર હોય, અમે તમારા સ્વસ્થ જીવન યાત્રાને સમર્થન આપવા માટે અહીં છીએ.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleQuickWhatsApp}
                className="w-full flex items-center p-6 bg-gray-100 hover:bg-gray-300 rounded-xl transition-colors group border border-black"
              >
                <MessageCircle className="h-8 w-8 text-green-600 mr-4 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">વોટ્સએપ ચેટ</div>
                  <div className="text-green-600">તુરંત પ્રતિસાદ • ઉપલબ્ધ ૯ AM - ૭ PM</div>
                </div>
              </button>

              <a
                href={`tel:${whatsappNumber}`}
                className="w-full flex items-center p-6 bg-gray-100 hover:bg-gray-300 rounded-xl transition-colors group border border-black"
              >
                <Phone className="h-8 w-8 text-green-600 mr-4 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">ફોન કોલ</div>
                  <div className="text-green-600">+૯૧ ૯૮૭૬૫ ૪૩૨૧૦ • ઉપલબ્ધ - શનિવાર ૯ AM - ૭ PM</div>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="w-full flex items-center p-6 bg-gray-100 hover:bg-gray-300 rounded-xl transition-colors group border border-black"
              >
                <Mail className="h-8 w-8 text-green-600 mr-4 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">અમને ઈમેલ કરો</div>
                  <div className="text-green-600">info@arogyarasoi.com • અમે 24 કલાકની અંદર પ્રતિસાદ આપીશું</div>
                </div>
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">આપણી જગ્યા પર આવજો</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">આરોગ્ય રસોઈ કેન્દ્ર</div>
                    <div className="text-gray-600">
                      ૧૨૩ હેલ્થ સ્ટ્રીટ, વેલનેસ ક્વાર્ટર<br />
                      અમદાવાદ, ગુજરાત ૩૮૦૦૦૧<br />
                      ભારત
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">ઓપરેટિંગ કલાકો</div>
                    <div className="text-gray-600">
                      સોમવાર - શનિવાર: ૯:00 AM - ૭:00 PM<br />
                      રવિવાર: ૧૦:૦૦ AM - ૪:૦૦ PM<br />
                      <span className="text-green-600 font-medium">વર્કશોપ્સ વીકેન્ડ્સ પર</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">અમે સાથે જોડાઓ</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-colors"
                  title="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-colors"
                  title="YouTube"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">હમણાં અમને સંદેશ મોકલો</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  નામ *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="તમારું સંપૂર્ણ નામ દાખલ કરો"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ઇમેલ સરનામું *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="તમારો ઇમેલ સરનામું દાખલ કરો"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  વિષય
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">વિષય પસંદ કરો</option>
                  <option value="Recipe Question">રસોઈ પ્રશ્ન</option>
                  <option value="Workshop Inquiry">વર્કશોપ પૂછપરછ</option>
                  <option value="Health Consultation">આરોગ્ય સલાહકાર</option>
                  <option value="General Inquiry">સામાન્ય પૂછપરછ</option>
                  <option value="Collaboration">સહયોગ</option>
                  <option value="Feedback">પ્રતિસાદ</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  સંદેશ *
                </label>
                <textarea
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="અમને જણાવો કે કેવી રીતે અમે તમારી સ્વસ્થ જીવન યાત્રામાં મદદ કરી શકીએ..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>વોટ્સએપ પર મોકલો</span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                તમારો સંદેશ વધુ ઝડપી પ્રતિસાદ માટે વોટ્સએપ પર મોકલવામાં આવશે
              </p>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">અમે અહીં મળી શકીએ છીએ</h2>
          <div className="bg-gray-200 rounded-2xl overflow-hidden" style={{ height: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7225573677!2d72.5847!3d23.0445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84faa5a36071%3A0x9af7cd146bb535c!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1647834726127!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arogya Rasoi Location"
            ></iframe>
          </div>
        </div>

        {/* <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">વારંવાર પૂછાતા પ્રશ્નો</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">હું કેવી રીતે તમારી વર્કશોપમાં જોડાઈ શકું?</h3>
              <p className="text-gray-600">તમે વોટ્સએપ, ફોન, અથવા ઈમેલ મારફતે વર્કશોપ માટે નોંધણી કરી શકો છો. અમે અગાઉથી બુકિંગ કરવાની ભલામણ કરીએ છીએ કારણ કે સીટો મર્યાદિત છે.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">શું તમે વ્યક્તિગત આહાર સલાહકાર આપે છો?</h3>
              <p className="text-gray-600">હા, અમારા નિષ્ણાતો વ્યક્તિગત આરોગ્ય અને આહાર માર્ગદર્શન આપે છે. એક બેઠક માટે સંપર્ક કરો.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">શું આ રેસીપી તમામ વય જૂથો માટે યોગ્ય છે?</h3>
              <p className="text-gray-600">અમારી રેસીપી તમામ વય જૂથો માટે સ્વસ્થ છે. અમે બાળકો, પ્રૌઢો અને વયસ્કો માટે વિશિષ્ટ માર્ગદર્શન પણ આપીએ છીએ.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">તમે કઈ ભાષામાં વર્કશોપ કરાવ છો?</h3>
              <p className="text-gray-600">અમે મુખ્યત્વે ગુજરાતી અને હિન્દીમાં વર્કશોપ કરાવીએ છીએ, જ્યારે જરૂરી હોય તો અંગ્રેજી અનુવાદ પણ ઉપલબ્ધ છે.</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
