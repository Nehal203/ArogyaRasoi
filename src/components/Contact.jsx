import React from "react";
import { motion } from "framer-motion";
// import contactImg from "../assets/contact.svg";


const Contact = () => {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* <motion.div
        className="relative h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactImg})` }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl font-bold">CONTACT US</h1>
          <p className="mt-2">Home &gt;&gt; Contact Us</p>
        </div>
      </motion.div> */}

      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        {[
          { icon: "📍", title: "PANDITJEE ONLINE", desc: "255, Satyam Mall, Near Mansi Cross Road, Satellite, Ahmedabad – 380015, (Gujarat) – India" },
          { icon: "📧", title: "EMAIL ADDRESS", desc: "info@panditjeeonline.in", descClass: "text-red-600" },
          { icon: "📞", title: "PHONE NUMBER", desc: "+91 96620 01600\n+91 70160 73654" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 shadow-md p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="text-red-600 text-3xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className={`text-sm mt-2 whitespace-pre-line ${item.descClass ? item.descClass : ""}`}>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 pb-12 grid md:grid-cols-2 gap-6">

        <motion.div
          className="bg-gray-50 shadow-md p-6 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-red-600 text-xl font-bold mb-4">ACCOUNT DETAILS</h3>
          <p><span className="font-bold">A/c Holder Name: </span>MILLENNIALS VENTURES</p>
          <p><span className="font-bold">Bank: </span>HDFC BANK</p>
          <p><span className="font-bold">IFSC: </span>HDFC0000783</p>
          <p><span className="font-bold">A/c No: </span>5020007303614</p>
          <h3 className="text-red-600 text-xl font-bold mt-6 mb-2">UPI QR CODE</h3>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=example@upi"
            alt="UPI QR Code"
            className="w-40 h-40 mx-auto"
          />
        </motion.div>

        <motion.div
          className="bg-gray-50 shadow-md p-6 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-red-600 text-xl font-bold mb-4">INQUIRY FORM</h3>
          <form 
          
           className="space-y-4">

            <input
              type="text"
              placeholder="નામ"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="ઈમેલ"
              placeholder="ઈમેલ આઈડી"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="tel"
              placeholder="ફોન નં."
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="મેસેજ...."
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500 h-28"
            ></textarea>
            <motion.button
              type="સંદેશ મોકલો"
              className="cursor-pointer bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >સંદેશ મોકલો
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
