import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const services = [
        { title: 'Vaman', description: 'Therapeutic emesis for Kapha disorders. Helps in respiratory and skin conditions.' },
        { title: 'Virechan', description: 'Therapeutic purgation for Pitta disorders. Effective for liver and digestive health.' },
        { title: 'Basti', description: 'Medicated enema therapy. Considered the best treatment for Vata disorders.' },
        { title: 'Nasya', description: 'Nasal administration of medication. beneficial for head and neck related ailments.' },
        { title: 'Raktmokshan', description: 'Bloodletting therapy for removing toxic blood. Used in skin diseases and swelling.' },
    ];

    return (
        <div className="bg-white">
            <Hero />

            {/* About Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="bg-green-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                                <span className="text-primary opacity-50 font-display text-4xl">Image Placeholder</span>
                                {/* Replace with actual image later */}
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Traditional Ayurveda + Modern Facilities</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    At <strong>Shree Sanjeevni</strong>, we believe in the timeless wisdom of Ayurveda tailored for modern lifestyles.
                                    Our "Atyadhunik Panchkarma Vibhag" bridges the gap between ancient healing traditions and contemporary comfort.
                                </p>
                                <p>
                                    We are dedicated to providing authentic detoxification and rejuvenation therapies that restore balance
                                    to your body's vital energies (Doshas). Our approach helps in managing stress, chronic ailments,
                                    and promoting longevity without making unrealistic medical claims.
                                </p>
                                <Link to="/about" className="inline-block mt-4 text-primary font-bold hover:text-accent transition-colors">
                                    Read more about our philosophy &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Core Therapies</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We specialize in the five classical detoxification procedures (Panchkarma) to cleanse the body and specialized treatments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                link="/services"
                            />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-primary transition-colors"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
