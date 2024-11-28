export const About = () => {
  return (
    <div className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473177104440-ffee2f376098')] bg-cover bg-fixed opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 gradient-text">Our Legacy</h2>
          <p className="text-xl text-elite-cream/80 mb-8 leading-relaxed">
            In the heart of Malta's vibrant nightlife, Elite Cocktails stands as a testament to refined taste and masterful mixology. Our artisans craft each drink with precision and passion, using only the finest ingredients and innovative techniques.
          </p>
          <p className="text-xl text-elite-cream/80 leading-relaxed">
            Step into our elegant space where modern luxury meets timeless hospitality. Every evening promises an unforgettable journey through sophisticated flavors and ambient excellence.
          </p>
        </div>
      </div>
    </div>
  );
};