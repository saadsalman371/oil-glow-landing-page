
const Reviews = () => {
  const reviews = [
    {
      name: "Fatima Khan",
      location: "Karachi",
      rating: 5,
      review: "I've been using HairFix for 3 months now, and the transformation is incredible! My hair went from dry and brittle to soft and shiny. Best investment I've made for my hair care routine.",
      image: "👩‍💼"
    },
    {
      name: "Ayesha Ahmed",
      location: "Lahore",
      rating: 5,
      review: "After trying countless hair oils, HairFix is the only one that actually delivered results. My hair growth has noticeably improved, and the texture is so much better now.",
      image: "👩‍🎓"
    },
    {
      name: "Zara Ali",
      location: "Islamabad",
      rating: 5,
      review: "The best part about HairFix is that it's not greasy at all! It absorbs quickly and leaves my hair feeling nourished without that heavy, oily feeling. Highly recommend!",
      image: "👩‍💻"
    },
    {
      name: "Sana Malik",
      location: "Faisalabad",
      rating: 5,
      review: "I was skeptical at first, but HairFix proved me wrong. Within 2 weeks, I could see less hair fall and more shine. My hairdresser even asked what I was using!",
      image: "👩‍🏫"
    },
    {
      name: "Maryam Sheikh",
      location: "Multan",
      rating: 5,
      review: "Love how natural and effective this product is. No harsh chemicals, just pure goodness for my hair. The results speak for themselves - healthier, stronger hair.",
      image: "👩‍⚕️"
    },
    {
      name: "Rabia Hussain",
      location: "Peshawar",
      rating: 5,
      review: "HairFix has become an essential part of my weekly hair care routine. The repair and restoration it provides is unmatched. My hair feels like it's been professionally treated.",
      image: "👩‍🎨"
    },
    {
      name: "Hina Javed",
      location: "Quetta",
      rating: 5,
      review: "Amazing results! My hair was severely damaged from constant styling, but HairFix brought it back to life. Now I get compliments on my hair everywhere I go!",
      image: "👩‍💼"
    },
    {
      name: "Nadia Tariq",
      location: "Rawalpindi",
      rating: 5,
      review: "I've recommended HairFix to all my friends and family. It's truly a game-changer for anyone struggling with hair problems. Worth every penny!",
      image: "👩‍🎓"
    },
    {
      name: "Sadia Raza",
      location: "Gujranwala",
      rating: 5,
      review: "The texture of my hair has completely changed since using HairFix. It's softer, more manageable, and has a natural shine that I never had before.",
      image: "👩‍💻"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our 
            <span className="text-transparent bg-gradient-to-r from-green-600 to-green-800 bg-clip-text">
              Happy Customers
            </span>
            {" "}Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of women across Pakistan who have transformed their hair with HairFix. Here are some of their amazing stories.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="flex text-yellow-400">
              {"★".repeat(5)}
            </div>
            <span className="text-lg font-semibold text-gray-700 ml-2">4.9/5</span>
            <span className="text-gray-600">based on 2,847 reviews</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  {review.image}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </div>
              
              <div className="flex text-yellow-400 mb-4">
                {"★".repeat(review.rating)}
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Hair?</h3>
            <p className="text-lg mb-6">Join thousands of satisfied customers who chose HairFix</p>
            <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
              Order HairFix Now - PKR 2,999
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
