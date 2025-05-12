"use client";
import { useSearchParams } from "next/navigation";
const bikes = [
  {
    id: 1,
    name: "Bajaj",
    description: "Affordable and reliable motorcycles for daily use.",
    price: 1200,
    image: "bajaj.png",
  },
  {
    id: 2,
    name: "BMW",
    description: "Premium bikes with advanced features and luxury designs.",
    price: 15000,
    image: "bmw.png",
  },
  {
    id: 3,
    name: "Hero",
    description: "Fuel-efficient bikes designed for the everyday rider.",
    price: 800,
    image: "hero.png",
  },
  {
    id: 4,
    name: "Honda",
    description: "Innovative and durable motorcycles with excellent mileage.",
    price: 1000,
    image: "honda.png",
  },
  {
    id: 5,
    name: "Benelli",
    description:
      "Stylish bikes with a perfect balance of power and performance.",
    price: 4000,
    image: "benelli.png",
  },
  {
    id: 6,
    name: "Kawasaki",
    description: "High-performance sports bikes for thrill-seekers.",
    price: 8000,
    image: "kawasaki.png",
  },
  {
    id: 7,
    name: "KTM",
    description: "Lightweight bikes with superior handling and power.",
    price: 5000,
    image: "ktm.png",
  },
  {
    id: 8,
    name: "Yamaha",
    description: "Reliable bikes with a legacy of innovation and speed.",
    price: 3000,
    image: "yamaha.png",
  },
  {
    id: 9,
    name: "TVS",
    description: "Budget-friendly bikes with robust build quality.",
    price: 900,
    image: "tvs.png",
  },
];

const ProductPage = () => {
  const searchParam = useSearchParams();
  const id = searchParam.get("bike");
  if (!id) return;
  const bike = bikes.find((bike) => bike.id === parseInt(id));

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-xl text-gray-500">Bike not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-2xl">
        <img
          src={bike.image}
          alt={bike.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{bike.name}</h1>
          <p className="text-gray-600 mb-6">{bike.description}</p>
          <p className="text-xl font-semibold text-blue-500">
            Price: ${bike.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
