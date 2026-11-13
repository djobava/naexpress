import bgContacts from "./assets/bg-contacts.png";
import { LuPhone  } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";



function Contact() {
  return (
    <section
      className="w-full min-h-105 bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: `url(${bgContacts})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center text-white py-16 px-4">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We are always ready to help you and answer your questions
        </h2>

        <p className="text-gray-200 mb-10 max-w-2xl mx-auto">
          Contact our logistics team anytime. We provide fast responses,
          load updates, scheduling assistance, and full dispatch support.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">

  {/* Card */}
  <div className="flex-1 max-w-xs bg-white/95 text-gray-800 rounded-2xl shadow-xl p-6 hover:scale-105 transition flex flex-col items-center">
    <LuPhone  className="text-blue-700 mb-3" size={32} />
    <h4 className="font-semibold mb-2">Call Us</h4>
    <a href="tel:+13158701050" className="hover:text-blue-500 transition">
      +1 (315) 870-1050
    </a>
  </div>

  {/* Card */}
  <div className="flex-1 max-w-xs bg-white/95 text-gray-800 rounded-2xl shadow-xl p-6 hover:scale-105 transition flex flex-col items-center">
    <LuMail className="text-blue-700 mb-3" size={32} />
    <h4 className="font-semibold mb-2">Email Us</h4>
    <a href="mailto:hr@naexpressllc.com" className="hover:text-blue-500 transition">
     hr@naexpressllc.com
    </a>
  </div>

  {/* Card */}
  <div className="flex-1 max-w-xs bg-white/95 text-gray-800 rounded-2xl shadow-xl p-6 hover:scale-105 transition flex flex-col items-center">
    <LuMapPin className="text-blue-700 mb-3" size={32} />

    <a
    href="https://www.google.com/maps/search/?api=1&query=2363+JAMES+ST+%23+595+SYRACUSE,+NY+13206"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-center hover:text-blue-500 transition"
  >
    2363 JAMES ST # 595 <br />
    SYRACUSE, NY 13206 <br />
    MC# 1634256 DOT# 4226127
  </a>
  </div>

</div>


        {/* CTA Button (optional) */}
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow transition"
          >
            Send Message
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
