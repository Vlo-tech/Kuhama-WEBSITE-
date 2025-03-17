// src/pages/Listings.jsx
import ApartmentCard from "../components/ApartmentCard";

const Listings = () => {
  // For now, use dummy data:
  const apartments = [
    { id: 1, title: "Cozy Studio", price: 800, image: "/apartment1.jpg" },
    { id: 2, title: "2-Bedroom Apartment", price: 1200, image: "/apartment2.jpg" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Apartments</h1>
      <div className="grid grid-cols-2 gap-4">
        {apartments.map((apt) => (
          <ApartmentCard key={apt.id} {...apt} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
