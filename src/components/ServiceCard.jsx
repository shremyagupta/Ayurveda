import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, link }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 flex flex-col h-full">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">{title}</h3>
            <p className="text-gray-600 mb-6 flex-grow">{description}</p>
            <Link
                to={link || '/services'}
                className="inline-flex items-center text-accent hover:text-primary font-medium transition-colors"
            >
                Learn more <ArrowRight size={16} className="ml-1" />
            </Link>
        </div>
    );
};

export default ServiceCard;
