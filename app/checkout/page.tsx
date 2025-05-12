"use client";
import { useAuthStore } from "@/store";
import { useState, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  name: string;
  address: string;
  phone: string;
};

export default function Checkout() {
  const { cartItems, removeAll } = useAuthStore();

  const [form, setForm] = useState<FormData>({
    name: "",
    address: "",
    phone: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    console.log("Order placed:", { ...form, cartItems, payment: "COD" });
    removeAll();
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white shadow-2xl rounded-2xl w-full max-w-xl p-8"
      >
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Checkout</h1>

        <AnimatePresence>
          {cartItems.length === 0 && !success ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-500"
            >
              Your cart is empty.
            </motion.p>
          ) : success ? (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-600 text-lg font-medium"
            >
              🎉 Order placed successfully with COD!
            </motion.p>
          ) : (
            <>
              <motion.ul
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-4 space-y-2"
              >
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between bg-blue-100 p-2 rounded-md text-blue-900"
                  >
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </motion.ul>

              <div className="space-y-3">
                <input
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  name="address"
                  placeholder="Address"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                onClick={handleOrder}
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold tracking-wide shadow-lg hover:bg-blue-700 transition"
              >
                Place Order (COD)
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
