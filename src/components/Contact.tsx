export const Contact = () => {
  return (
    <div className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529604278261-8bfcdb00a7b9')] bg-cover bg-fixed opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-6xl font-bold mb-20 text-center">
          <span className="gradient-text">Visit</span>
          <br />
          <span className="text-elite-cream">Us</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-20 max-w-4xl mx-auto">
          <div className="space-y-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-elite-gold">Location</h3>
              <p className="text-elite-cream/80 text-xl">
                123 Marina Street
                <br />
                St. Julian's, Malta
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-elite-gold">Hours</h3>
              <p className="text-elite-cream/80 text-xl">
                Tuesday - Sunday
                <br />
                6:00 PM - 2:00 AM
              </p>
            </div>
          </div>
          <div className="space-y-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-elite-gold">Contact</h3>
              <p className="text-elite-cream/80 text-xl">
                +356 2134 5678
                <br />
                info@elitecocktails.mt
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-elite-gold">Reservations</h3>
              <p className="text-elite-cream/80 text-xl">
                For groups of 6 or more,
                <br />
                please call or email us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};