import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">Who We Are</h1>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="prose prose-lg prose-green mx-auto text-gray-600">
                    <p className="mb-6">
                        <strong>Shree Sanjeevni</strong> is a premier "Atyadhunik Panchkarma Vibhag" (Advanced Panchkarma Department) dedicated to bringing the ancient science of Ayurveda to the modern world. We are committed to holistic healing, focusing on the root cause of ailments rather than just symptoms.
                    </p>

                    <h2 className="text-2xl font-display font-bold text-primary mt-12 mb-6">Panchkarma Philosophy</h2>
                    <p className="mb-6">
                        Panchkarma is not just a massage; it is a complete detoxification process. According to Ayurveda, health is a state of balance between the body's three Doshas: Vata, Pitta, and Kapha. Accumulation of toxins (Ama) disrupts this balance, leading to disease.
                    </p>
                    <p className="mb-6">
                        Our philosophy is simple: <strong>Cleansing, Rejuvenating, and Preserving.</strong> We use time-tested methods to expel toxins, restore digestve fire (Agni), and strengthen the immune system.
                    </p>

                    <h2 className="text-2xl font-display font-bold text-primary mt-12 mb-6">Traditional Ayurveda + Modern Facilities</h2>
                    <p className="mb-6">
                        While we strictly adhere to the classical texts of Ayurveda for our treatments, our facility is designed for the modern individual. We offer:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                        <li>Hygienic, private therapy rooms using modern amenities.</li>
                        <li>Strict sterilization protocols for all equipment.</li>
                        <li>Comfortable recovery areas.</li>
                        <li>Expert consultation using both pulse diagnosis (Nadi Pariksha) and modern diagnostic tools.</li>
                    </ul>

                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-primary mt-12">
                        <p className="text-primary font-medium italic">
                            "Our mission is to create a disease-free society by adopting the 'Way of Life' preached by Ayurveda."
                        </p>
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-green-800 transition-colors"
                        >
                            Visit Our Center
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
