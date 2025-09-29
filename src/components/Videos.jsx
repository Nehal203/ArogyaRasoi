import React, { useState } from 'react';
import { Play, Clock, Eye, ThumbsUp, Filter, Search } from 'lucide-react';

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'બધા વિડિઓઝ' },
    { id: 'recipes', name: 'રેસીપી ટ્યુટોરિયલ્સ' },
    { id: 'workshops', name: 'આરોગ્ય કાર્યશાળાઓ' },
    { id: 'tips', name: 'રસોઈ ટિપ્સ' },
    { id: 'nutrition', name: 'પોષણ માર્ગદર્શિકા' }
  ];

  const videos = [
    {
      id: 1,
      title: "કાચા કેળા નું શાક બનાવવાની રીત",
      titleEn: "How to Make Raw Banana Curry",
      category: 'recipes',
      thumbnail: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "૧૫:૩૦",
      views: "૧૨.૫ હજાર",
      likes: "૮૯૨",
      description: "પરંપરાગત ગુજરાતી કાચા કેળાની કરી રેસીપી વિગતવાર પગલા-દર-પગલાની સૂચનાઓ સાથે",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      publishDate: "2 દિવસ પહેલા"
    },
    {
      id: 2,
      title: "કાચા ખોરાકના આહારના ફાયદા - આરોગ્ય કાર્યશાળા",
      titleEn: "Complete Guide to Raw Food Benefits",
      category: 'workshops',
      thumbnail: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "૪૫:૨૦",
      views: "૮.૭ હજાર",
      likes: "૬૫૪",
      description: "કાચા ખાદ્ય આહારના ફાયદા અને તેનો અમલ કેવી રીતે કરવો તે અંગે વ્યાપક વર્કશોપ",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      publishDate: "1 અઠવાડિયા પહેલા"
    },
    {
      id: 3,
      title: "લીંબુ ધાણા શરબત - સમર સ્પેશ્યલ",
      titleEn: "Lemon Coriander Drink - Summer Special",
      category: 'recipes',
      thumbnail: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "૮:૪૫",
      views: "૧૫.૨ હજાર",
      likes: "૧.૨ હજાર",
      description: "ઉનાળાની ગરમી માટે પરફેક્ટ તાજગી આપતું લીંબુ ધાણા પીણું",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      publishDate: "3 દિવસ પહેલા"
    },
    {
      id: 4,
      title: "સ્વસ્થ રસોઈ માટે મસાલા પસંદગી ટિપ્સ",
      titleEn: "Complete Guide to Healthy Spices",
      category: 'tips',
      thumbnail: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "૨૨:૧૫",
      views: "૬.૩ હજાર",
      likes: "૪૪૫",
      description: "મહત્તમ સ્વાસ્થ્ય લાભ માટે મસાલા કેવી રીતે પસંદ કરવા અને તેનો ઉપયોગ કેવી રીતે કરવો તે જાણો",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      publishDate: "5 દિવસ પહેલા"
    },
    {
      id: 5,
      title: "આંવળા મધ નો રસ - રોગપ્રતિકારક શક્તિ વધારવા",
      titleEn: "Amla Honey Juice for Immunity",
      category: 'nutrition',
      thumbnail: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "૧૨:૩૦",
      views: "૯.૮ હજાર",
      likes: "૭૨૧",
      description: "આમળા અને મધ સાથે કુદરતી રોગપ્રતિકારક શક્તિ વધારનાર પીણું",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      publishDate: "1 અઠવાડિયા પહેલા"
    },
    {
      id: 6,
      title: "Complete Meal Planning for Healthy Family",
      titleEn: "Weekly Meal Planning Guide",
      category: 'workshops',
      thumbnail: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "38:45",
      views: "11.4K",
      likes: "856",
      description: "Workshop on planning nutritious meals for the entire family",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      publishDate: "2 weeks ago"
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.titleEn.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-0">
      <section className="bg-green-300 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            વિડિઓ ટ્યુટોરિયલ્સ
          </h1>
          <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
            અમારી વ્યાપક વિડિઓ લાઇબ્રેરી દ્વારા સ્વસ્થ રસોઈ તકનીકો અને પોષણ ટિપ્સ શીખો
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="વિડિઓઝ શોધો..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600 font-medium">શ્રેણીઓ:</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${selectedCategory === category.id
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-md'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {filteredVideos.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">ફીચર્ડ વિડિઓ</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto">
                  <iframe
                    src={filteredVideos[0].videoUrl}
                    title={filteredVideos[0].title}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${filteredVideos[0].category === 'recipes' ? 'bg-green-100 text-green-600' :
                        filteredVideos[0].category === 'workshops' ? 'bg-blue-100 text-blue-600' :
                          filteredVideos[0].category === 'tips' ? 'bg-orange-100 text-orange-600' :
                            'bg-purple-100 text-purple-600'
                      }`}>
                      {categories.find(cat => cat.id === filteredVideos[0].category)?.name}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{filteredVideos[0].title}</h3>
                  {/* <p className="text-lg text-gray-600 mb-4">{filteredVideos[0].titleEn}</p> */}
                  <p className="text-gray-700 mb-6">{filteredVideos[0].description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{filteredVideos[0].duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{filteredVideos[0].views} દૃશ્યો</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{filteredVideos[0].likes}</span>
                      </div>
                    </div>
                    <span>{filteredVideos[0].publishDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">બધા વિડિઓઝ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white/90 backdrop-blur-sm p-4 rounded-full text-green-600 hover:bg-white transition-colors">
                      <Play className="h-6 w-6 fill-current" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${video.category === 'recipes' ? 'bg-green-500 text-white' :
                        video.category === 'workshops' ? 'bg-blue-500 text-white' :
                          video.category === 'tips' ? 'bg-orange-500 text-white' :
                            'bg-purple-500 text-white'
                      }`}>
                      {categories.find(cat => cat.id === video.category)?.name}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {video.title}
                  </h3>
                  {/* <p className="text-sm text-gray-500 mb-3">{video.titleEn}</p> */}
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{video.description}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{video.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="h-3 w-3" />
                        <span>{video.likes}</span>
                      </div>
                    </div>
                    <span>{video.publishDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📹</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No videos found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter</p>
            </div>
          )}
        </section>

        <section className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">અમારી યુટ્યુબ ચેનલ પર સબ્સ્ક્રાઇબ કરો</h2>
          <p className="text-xl mb-8 opacity-90">
            નવા રેસીપી ટ્યુટોરિયલ્સ અને આરોગ્ય વર્કશોપ વિશે સૂચના મેળવો
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center space-x-2"
            >
              <Play className="h-5 w-5 fill-current" />
              <span>હવે સબ્સ્ક્રાઇબ કરો</span>
            </a>
            <div className="text-sm opacity-75">
              સાપ્તાહિક સ્વસ્થ રસોઈ સામગ્રી માટે ૫૦,૦૦૦+ સબ્સ્ક્રાઇબર્સમાં જોડાઓ
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Videos;
