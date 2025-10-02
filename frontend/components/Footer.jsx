import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Bike and Rickshaw Rental</li>
            <li className="hover:text-white cursor-pointer">Guided Tours of Lucca</li>
            <li className="hover:text-white cursor-pointer">Guided Bike Tour of Lucca</li>
            <li className="hover:text-white cursor-pointer">Trip In The Tuscan Hills</li>
            <li className="hover:text-white cursor-pointer">Transportation With Luxury Cars</li>
            <li className="hover:text-white cursor-pointer">Wine Tours By Bus With Guide</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Tour Packages</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Terms of Use</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Help</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Contacts</li>
            <li className="hover:text-white cursor-pointer">Social Media</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>Piazza Napoleone, Lucca, Tuscany</li>
            <li>📞 +39 346 368 5708</li>
            <li>📧 italiainlimo@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
