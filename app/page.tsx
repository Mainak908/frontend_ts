"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

import { useAuthStore } from "@/store";
import { FaOpencart } from "react-icons/fa6";

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

const Header = () => {
  const { cartItems } = useAuthStore();

  let len = cartItems.length;
  return (
    <header className="header fixed w-screen z-50">
      <div className="logo">
        <span className="logo-text">motox-part</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search: Fogg Lamps" />
        <select className="category-dropdown">
          <option>All categories</option>
        </select>
        <button className="search-button">🔍</button>
      </div>
      <div className="user-options flex">
        <Link href={"/signin"}>
          <Button variant="outline">SignIn</Button>
        </Link>

        <Link href={"/signin"}>
          <Button variant="outline">SignUp</Button>
        </Link>
      </div>
      <Link className="mr-4" href={"/Cart"}>
        <div className="relative">
          <FaOpencart className="relative flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full shadow-lg" />

          {len > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {len}
            </span>
          )}
        </div>
      </Link>
    </header>
  );
};

const NavBar = () => (
  <nav className="navbar fixed w-screen mt-[62px] z-50">
    <a href="#">Home</a>
    <a href="#">All Collections</a>
    <a href="#">Shop By Bike ▼</a>
    <a href="#">Shop By Spares ▼</a>
    <a href="#">Shop By Accessories ▼</a>
    <a href="#">Wholesale Price</a>
    <a href="#">Track Order ▼</a>
    <a href="#">FAQ</a>
    <a href="#">Contact Us</a>
  </nav>
);

const ShopByBike = () => (
  <section className="shop-by-bike">
    <h2>𝐒𝐡𝐨𝐩 𝐁𝐲 𝐁𝐢𝐤𝐞</h2>

    <Carousel className="w-[1290px] mx-auto scrollbar-hide">
      <CarouselContent className="">
        {bikes.map((bike, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5">
            <Link className="item" key={index} href={`/Parts/?bike=${bike.id}`}>
              <img src={bike.image} alt="" />
              <p className="text-black">{bike.name}</p>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
);
const Helmets = () => {
  const { addToCart } = useAuthStore();

  return (
    <section className="helmets">
      <h1 className="text-black text-xl">𝐎𝐮𝐫 𝐇𝐞𝐥𝐦𝐞𝐭𝐬</h1>
      <div className="helmet-container">
        {[
          { src: "helmate1.png", name: "Srm", price: 100, quantity: 1, id: 1 },
          {
            src: "helmate2.png",
            name: "Saber Single Colors Helmet",
            price: 120,
            quantity: 1,
            id: 2,
          },
          {
            src: "helmate3.png",
            name: "Saber X-Sport color Helmet",
            price: 150,
            quantity: 1,
            id: 3,
          },
        ].map((helmet, index) => (
          <div className="helmet-item" key={index}>
            <img src={helmet.src} alt={helmet.name} className="helmet-image" />
            <h3 className="text-black">{helmet.name}</h3>
            <p className="price text-black">${helmet.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(helmet)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {[
        {
          title: "Information",
          links: [
            "Contact Us",
            "FAQs",
            "Track Order",
            "Terms Of Service",
            "Refund Policy",
          ],
        },
        {
          title: "About Us",
          links: [
            "About Us",
            "Privacy Policy",
            "Terms And Conditions",
            "Refund / Cancellation Policy",
            "Shipping Policy",
          ],
        },
      ].map((section, index) => (
        <div className="footer-section" key={index}>
          <h3>{section.title}</h3>
          <ul>
            {section.links.map((link, idx) => (
              <li key={idx}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="footer-section">
        <h3>Subscribe to our emails</h3>
        <p>
          Subscribe to get notified about product launches, special offers, and
          news.
        </p>
        <form>
          <input type="email" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-country">
        <label htmlFor="country">Country/region</label>
        <select id="country">
          <option value="india">India | INR ₹</option>
        </select>
      </div>
      <p>© 2024, Motox Parts</p>
      <p>Made with love by ❤️ GNIT BOYS</p>
    </div>
    <div className="footer-social">
      {[
        "facebook-icon.png",
        "instagram-icon.png",
        "linkedin-icon.png",
        "youtube-icon.png",
      ].map((icon, index) => (
        <a href="#" key={index}>
          <img src={icon} alt={icon.split("-")[0]} />
        </a>
      ))}
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="">
      <Header />
      <NavBar />
      <div className="pt-[105px]">
        <img src="jaydeb.png" alt="" className="h-full w-full" />
        <div>
          <i className="fa-brands fa-facebook"></i>
        </div>
      </div>
      <ShopByBike />
      <Helmets />
      <Footer />
    </div>
  );
};

export default App;
