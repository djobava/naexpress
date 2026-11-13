import logo from "./assets/logo.png";
import { LuPhone  } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <img src={logo} alt="N&A Express Logo" className="w-40 mb-4" />

          <p className="text-sm leading-relaxed">
            N&A Express LLC is a nationwide logistics company providing
            reliable freight transportation services with cargo vans,
            sprinters, and box trucks across the United States.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>

          <ul className="space-y-2 text-sm">
            <li>Cargo Van Freight</li>
            <li>Sprinter Delivery</li>
            <li>Box Truck Loads</li>
            <li>Expedited Shipping</li>
            <li>Dedicated Routes</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-2">
              <LuPhone size={16} /> <a href="tel:+13158701050" className="hover:text-blue-500 transition">+1 (315) 870-1050</a>
            </li>

            <li className="flex items-center gap-2">
              <LuMail size={16} /> <a href="mailto:hr@naexpressllc.com" className="hover:text-blue-500 transition">hr@naexpressllc.com</a>
            </li>

            <li className="flex items-center gap-2">
              <LuMapPin size={16} /><a
    href="https://www.google.com/maps/search/?api=1&query=2363+JAMES+ST+%23+595+SYRACUSE,+NY+13206"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-center hover:text-blue-500 transition"> 2363 JAMES ST # 595  
  </a>
            </li>

          </ul>

       
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © {new Date().getFullYear()} N&A Express LLC. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
