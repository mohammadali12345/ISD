import PropTypes from 'prop-types';

// Shared Tailwind CSS class strings with enhanced styles
const sharedClasses = {
    paragraph: 'mb-4 text-gray-700',
    heading2: 'text-2xl font-semibold mb-4 text-gray-900',
    listItem: 'mb-2 text-gray-600',
    sectionContainer: 'bg-white p-6 rounded-lg shadow-lg mb-8 border-2 border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl',
    container: 'bg-gray-100 text-gray-900 p-8 max-w-4xl mx-auto my-8 rounded-lg shadow-lg',
    mainHeading: 'text-3xl font-bold mb-6 text-gray-900'
};

const Section = ({ title, children }) => (
    <div className={sharedClasses.sectionContainer}>
        <h2 className={sharedClasses.heading2}>{title}</h2>
        {children}
    </div>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

const TermsAndConditions = () => {
    return (
        <div className={sharedClasses.container}>
            <h1 className={sharedClasses.mainHeading}>Terms and Conditions</h1>
            <p className={`${sharedClasses.paragraph} text-gray-800`}>
                Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [Your Company Name]s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
            </p>
            <Section title="1. Terms">
                <p className={sharedClasses.paragraph}>
                    The use of this website is subject to the following terms of use:
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                    <li className={sharedClasses.listItem}>
                        The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                    </li>
                    <li className={sharedClasses.listItem}>
                        This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, personal information may be stored by us for use by third parties.
                    </li>
                    <li className={sharedClasses.listItem}>
                        Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                    </li>
                </ul>
            </Section>
            <Section title="2. License to Use Website">
                <p className={sharedClasses.paragraph}>
                    Unless otherwise stated, [Your Company Name] and/or its licensors own the intellectual property rights published on this website and materials used on [Your Company Name]. Subject to the license below, all these intellectual property rights are reserved.
                </p>
                <p className={sharedClasses.paragraph}>
                    You may view, download for caching purposes only, and print pages, files or other content from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
                </p>
            </Section>
            <Section title="3. Acceptable Use">
                <p className={sharedClasses.paragraph}>
                    You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of [Your Company Name] or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.
                </p>
                <p className={sharedClasses.paragraph}>
                    You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.
                </p>
            </Section>
            <Section title="4. Restricted Access">
                <p className={sharedClasses.paragraph}>
                    Access to certain areas of this website is restricted. [Your Company Name] reserves the right to restrict access to other areas of this website, or indeed this entire website, at [Your Company Name]s discretion.
                </p>
                <p className={sharedClasses.paragraph}>
                    If [Your Company Name] provides you with a user ID and password to enable you to access restricted areas of this website or other content or services, you must ensure that the user ID and password are kept confidential.
                </p>
            </Section>
            <Section title="5. Revisions">
                <p className={sharedClasses.paragraph}>
                    [Your Company Name] may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the use of this website from the date of the publication of the revised terms and conditions on this website. Please check this page regularly to ensure you are familiar with the current version.
                </p>
            </Section>
            <Section title="6. Entire Agreement">
                <p className={sharedClasses.paragraph}>
                    These terms and conditions, together with our Privacy Policy, constitute the entire agreement between you and [Your Company Name] in relation to your use of this website, and supersede all previous agreements in respect of your use of this website.
                </p>
            </Section>
            <Section title="7. Contact Information">
                <p className={sharedClasses.paragraph}>
                    If you have any questions about these Terms, please contact us at [Your Contact Information].
                </p>
            </Section>
        </div>
    );
};

export default TermsAndConditions;
