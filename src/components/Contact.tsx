export const Contact = () => {
  return (
    <div className="py-32 bg-gradient-to-b from-black to-elite-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center gradient-text">
            Visit Us
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-elite-gold">Location</h3>
                <p className="text-elite-cream/80 text-xl mb-2">123 Marina Street</p>
                <p className="text-elite-cream/80 text-xl">St. Julian's, Malta</p>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-6 text-elite-gold">Hours</h3>
                <p className="text-elite-cream/80 text-xl mb-2">Tuesday - Sunday</p>
                <p className="text-elite-cream/80 text-xl">6:00 PM - 2:00 AM</p>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-elite-gold">Contact</h3>
                <p className="text-elite-cream/80 text-xl mb-2">+356 2134 5678</p>
                <p className="text-elite-cream/80 text-xl">info@elitecocktails.mt</p>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-6 text-elite-gold">Reservations</h3>
                <p className="text-elite-cream/80 text-xl">
                  For groups of 6 or more, please call or email us to make a reservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};