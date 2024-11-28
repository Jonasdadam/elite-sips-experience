export const About = () => {
  return (
    <div className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2')] bg-cover bg-fixed opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-16">
            <span className="gradient-text">Our</span>
            <br />
            <span className="text-elite-cream">Story</span>
          </h2>
          <div className="space-y-8 text-xl text-elite-cream/80 leading-relaxed">
            <p>
              Nestled in the heart of Malta's most prestigious district, Elite Cocktails 
              represents the pinnacle of mixology artistry. Our master craftsmen blend 
              tradition with innovation, creating experiences that transcend the ordinary.
            </p>
            <p>
              Each evening, we transform premium spirits and carefully sourced ingredients 
              into liquid masterpieces. Our commitment to excellence extends beyond the 
              glass, creating an atmosphere where every detail contributes to an 
              unforgettable journey of taste and refinement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};