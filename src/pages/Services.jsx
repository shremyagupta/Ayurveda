import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const services = [
        {
            title: 'Vaman (Therapeutic Emesis)',
            description: 'A medicated emesis therapy primarily used for Kapha disorders. It helps in eliminating toxins from the respiratory and gastric tract, managing conditions like asthma, allergies, and skin disorders.'
        },
        {
            title: 'Virechan (Therapeutic Purgation)',
            description: 'A medicated purgation therapy ideal for Pitta disorders. It cleanses the liver and gall bladder, effective for skin diseases, jaundice, acidity, and digestion issues.'
        },
        {
            title: 'Basti (Medicated Enema)',
            description: 'Considered the mother of all treatments, Basti is highly effective for Vata disorders. It involves introducing herbal decoctions or oils into the colon to treat arthritis, neurological issues, and constipation.'
        },
        {
            title: 'Nasya (Nasal Administration)',
            description: 'Administration of herbal oils or powders through the nostrils. It is beneficial for ailments of the head and neck, including migraines, sinusitis, and memory improvement.'
        },
        {
            title: 'Raktmokshan (Bloodletting)',
            description: 'A parasurgical procedure to remove toxic blood from the body. It is typically effective for localized skin complications, eczema, and certain types of pain and swelling.'
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">Our Services</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        At Shree Sanjeevni, we offer authentic Panchkarma therapies under the guidance of experienced Vaidyas.
                        Each treatment is personalized to your Prakriti (body constitution).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow">
                            <div className="md:w-1/3 bg-green-100 flex items-center justify-center p-8">
                                {/* Placeholder for service image */}
                                <div className="text-primary font-display font-medium text-xl opacity-60">{service.title.split(' ')[0]}</div>
                            </div>
                            <div className="p-8 md:w-2/3">
                                <h3 className="text-2xl font-display font-bold text-primary mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
