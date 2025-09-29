import { FaStar, FaGlobe, FaThumbsUp, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Why = () => {
  const cards = [
    {
      title: "શરૂઆત",
      icon: FaStar,
      overlayColor: "bg-black/60",
      p: "આરોગ્ય રસોઈનો જન્મ એક સરળ અવલોકનમાંથી થયો હતો: પુષ્કળ પ્રમાણમાં સ્વસ્થ ખોરાક અને પરંપરાગત જ્ઞાન હોવા છતાં, ઘણા પરિવારો જીવનશૈલી સંબંધિત સ્વાસ્થ્ય સમસ્યાઓનો સામનો કરી રહ્યા હતા. અમને સમજાયું કે ગુજરાતી ભોજનનું પ્રાચીન જ્ઞાન, ખાસ કરીને કાચા ખાદ્ય પદાર્થો અને કુદરતી ઘટકો, આધુનિક સ્વાસ્થ્ય પડકારોનો ઉકેલ ધરાવે છે.",
    },
    {
      title: "સમુદાયનું નિર્માણ",
      icon: FaGlobe,
      overlayColor: "bg-blue-900/60",
      p: "મિત્રો અને પરિવાર સાથે વાનગીઓ શેર કરવાથી જે શરૂ થયું તે એક ચળવળમાં ફેરવાઈ ગયું. અમે વર્કશોપ યોજવાનું, વિડિઓ ટ્યુટોરિયલ્સ બનાવવાનું અને પરંપરાગત, કુદરતી ખોરાક બનાવવાની પદ્ધતિઓની શક્તિમાં વિશ્વાસ રાખતા સ્વાસ્થ્ય પ્રત્યે સભાન વ્યક્તિઓનો સમુદાય બનાવવાનું શરૂ કર્યું.",
    },
    {
      title: "વધતી જતી અસર",
      icon: FaThumbsUp,
      overlayColor: "bg-green-900/60",
      p: "આજે, આરોગ્ય રસોઈ ગુજરાત અને ભારતભરમાં હજારો પરિવારોને સેવા આપે છે, તેમને સ્વસ્થ આહારનો આનંદ ફરીથી શોધવામાં મદદ કરે છે. અમારી વાનગીઓનું પરીક્ષણ કરવામાં આવે છે, અમારી વર્કશોપ આકર્ષક છે, અને અમારો સમુદાય દરરોજ મજબૂત બની રહ્યો છે.",
    },
  ];

  const [centerIndex, setCenterIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const getWrappedIndex = (i) => (i + cards.length) % cards.length;

  const rotateRight = () => {
    setCenterIndex((prev) => getWrappedIndex(prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        rotateRight();
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="relative w-full min-h-screen bg-white py-20 overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/choose.png')" }}
        initial={{ scale: 1.2, opacity: 0.3 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0 bg-white z-0" />

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-green-500 mb-2">આપણી વાર્તા</h2>
          <div className="w-24 h-2 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg max-w-2xl mx-auto text-black font-bold">
            આરોગ્ય રસોઈ કેવી રીતે જીવંત થઈ
          </p>
        </div>

        {/* Cards */}
        <div className="relative flex justify-center items-center h-[400px]">
          {[0, 1, 2].map((offset) => {
            const index = getWrappedIndex(centerIndex + offset - 1);
            const card = cards[index];
            const Icon = card.icon;

            const position = offset - 1;
            let transformStyle = "";

            if (position === -1)
              transformStyle =
                "-translate-x-[220px] rotate-[-6deg] scale-90 opacity-80 z-10";
            else if (position === 0)
              transformStyle =
                "translate-x-0 rotate-0 scale-110 z-20";
            else if (position === 1)
              transformStyle =
                "translate-x-[220px] rotate-[6deg] scale-90 opacity-80 z-10";

            const handleHover = position === 0
              ? {
                  onMouseEnter: () => setIsHovered(true),
                  onMouseLeave: () => setIsHovered(false),
                }
              : {};

            return (
              <motion.div
                key={card.title}
                onClick={() => setCenterIndex(index)}
                {...handleHover}
                className={`group absolute w-64 h-[430px] rounded-3xl bg-white shadow-xl text-center cursor-pointer transform transition-all duration-700 ease-in-out ${transformStyle}`}
              >
                <div
                  className={`absolute inset-0 ${card.overlayColor} opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10 rounded-3xl`}
                />
                <div className="relative z-20 p-6">
                  <div className="bg-blue-400 text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl group-hover:bg-white group-hover:text-blue-400 transition-colors duration-300">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-white transition-colors duration-300 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
                    {card.p}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Why;
