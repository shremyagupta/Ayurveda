import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("This is a static demo. In a real app, this would send an email.");
    };

    return (
        <div className="bg-gray-50 py-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-gray-600">Get in touch to book your consultation or therapy session.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-white rounded-xl shadow-sm p-8">
                        <h2 className="text-2xl font-display font-bold text-primary mb-8">Get In Touch</h2>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MapPin className="text-accent mt-1 mr-4" size={24} />
                                <div>
                                    <h3 className="font-bold text-gray-900">Our Location</h3>
                                    <p className="text-gray-600">Shree Sanjeevni Ayurveda Department<br />123 Health Avenue, Wellness City<br />State, India - 400001</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Phone className="text-accent mt-1 mr-4" size={24} />
                                <div>
                                    <h3 className="font-bold text-gray-900">Phone</h3>
                                    <p className="text-gray-600">+91 98765 43210</p>
                                    <p className="text-gray-600">+91 12345 67890</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Mail className="text-accent mt-1 mr-4" size={24} />
                                <div>
                                    <h3 className="font-bold text-gray-900">Email</h3>
                                    <p className="text-gray-600">info@shreesanjeevni.com</p>
                                    <p className="text-gray-600">booking@shreesanjeevni.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="text-accent mt-1 mr-4" size={24} />
                                <div>
                                    <h3 className="font-bold text-gray-900">Opening Hours</h3>
                                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                    <p className="text-gray-600">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-xl shadow-sm p-8">
                        <h2 className="text-2xl font-display font-bold text-primary mb-8">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary focus:outline-none"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary focus:outline-none"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary focus:outline-none"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-green-800 transition-colors shadow-sm"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
