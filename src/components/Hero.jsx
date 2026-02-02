import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative bg-green-50 overflow-hidden">
            {/* Background Pattern or Image Placeholder */}
            <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" className="text-primary" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
                        Atyadhunik Panchkarma Vibhag
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-700 font-medium mb-8">
                        Ayurveda-based detox & therapies for holistic wellness.
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                        Experience the healing power of traditional Panchkarma combined with modern care.
                        Rejuvenate your body, mind, and soul at Shree Sanjeevni.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/contact"
                            className="bg-primary text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-green-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="/services"
                            className="bg-white text-primary border border-primary px-8 py-3 rounded-full font-medium text-lg hover:bg-green-50 transition-colors"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
