import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Shared Tailwind CSS classes
const sharedClasses = {
    card: 'bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105',
    button: 'w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800',
    answer: 'mt-2 text-gray-600',
};

// FAQItem Component
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div 
            className={sharedClasses.card}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <button className={sharedClasses.button} onClick={toggleAnswer}>
                <span>{question}</span>
                <span className="text-gray-600">{isOpen ? '-' : '+'}</span>
            </button>
            <div className={`${sharedClasses.answer} ${isOpen ? '' : 'hidden'}`}>
                {answer}
            </div>
        </motion.div>
    );
};

FAQItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};

// FAQ Component
const FAQ = () => {
    const faqData = [
        {
            id: 'shipping',
            question: 'How long does shipping take?',
            answer: 'Shipping typically takes 5-7 business days. You will receive a tracking number once your order has been shipped.'
        },
        {
            id: 'international-shipping',
            question: 'Do you offer international shipping?',
            answer: 'Yes, we offer international shipping to most countries. Shipping costs and delivery times vary by location.'
        },
        {
            id: 'track-order',
            question: 'Can I track my order?',
            answer: 'Yes, once your order has been shipped, you will receive a tracking number via email.'
        },
        {
            id: 'return-policy',
            question: 'What is your return policy?',
            answer: 'You can return items within 30 days of receipt. Items must be in their original condition and packaging.'
        },
        {
            id: 'size-guide',
            question: 'How do I choose the right size?',
            answer: 'We provide a size guide on each product page to help you choose the right size. If you are between sizes, we recommend choosing the larger size.'
        },
        {
            id: 'defective-item',
            question: 'What should I do if I received a defective item?',
            answer: 'Please contact our customer service team as soon as possible. We will arrange for a replacement or refund for defective items.'
        },
        {
            id: 'payment-methods',
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards, PayPal, and Apple Pay. Payment information is securely processed.'
        },
        {
            id: 'account-required',
            question: 'Do I need an account to make a purchase?',
            answer: 'No, you can check out as a guest. However, creating an account allows you to track your orders and save your preferences.'
        }
    ];

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
            {faqData.map(faq => (
                <FAQItem key={faq.id} {...faq} />
            ))}
        </div>
    );
};

export default FAQ;
