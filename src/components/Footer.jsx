import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-green-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-display text-2xl font-bold mb-4">Shree Sanjeevni</h3>
                        <p className="text-green-100 max-w-sm">
                            Atyadhunik Panchkarma Vibhag. Offering traditional Ayurveda therapies with modern standards for a holistic health experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-green-100 hover:text-accent transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-green-100 hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-green-100 hover:text-accent transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="text-green-100 hover:text-accent transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-green-100">
                            <li className="flex items-center gap-2">
                                <MapPin size={18} />
                                <span>Ayurveda Dept, City Center</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={18} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={18} />
                                <span>info@shreesanjeevni.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-green-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-green-200 text-sm">
                    <p>&copy; {new Date().getFullYear()} Shree Sanjeevni. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
