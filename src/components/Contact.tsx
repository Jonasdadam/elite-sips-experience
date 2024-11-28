export const Contact = () => {
  return (
    <div className="py-20 bg-elite-dark/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Visit Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-elite-gold">Location</h3>
              <p className="text-elite-cream/80 mb-2">123 Marina Street</p>
              <p className="text-elite-cream/80 mb-6">St. Julian's, Malta</p>
              
              <h3 className="text-2xl font-bold mb-4 text-elite-gold">Hours</h3>
              <p className="text-elite-cream/80 mb-2">Tuesday - Sunday</p>
              <p className="text-elite-cream/80">6:00 PM - 2:00 AM</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-elite-gold">Contact</h3>
              <p className="text-elite-cream/80 mb-2">+356 2134 5678</p>
              <p className="text-elite-cream/80 mb-6">info@elitecocktails.mt</p>
              
              <h3 className="text-2xl font-bold mb-4 text-elite-gold">Reservations</h3>
              <p className="text-elite-cream/80">
                For groups of 6 or more, please call or email us to make a reservation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};