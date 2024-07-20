"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Icon components
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const KeyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
  </svg>
);

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

// PricingPlan component
interface PricingPlanProps {
  name: string;
  price: number;
  description: string;
  apiCalls: string;
  buttonText: string;
  featured?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  name, 
  price, 
  description, 
  apiCalls, 
  buttonText, 
  featured = false 
}) => (
  <div className={`bg-white rounded-lg shadow-lg p-6 flex flex-col ${featured ? 'border-4 border-blue-500 transform scale-105' : ''}`}>
    <h3 className={`text-xl font-bold mb-2 ${featured ? 'text-blue-600' : ''}`}>{name}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="text-3xl font-bold mb-4">${price}<span className="text-sm font-normal">/month</span></div>
    <div className="bg-gray-100 rounded-full py-2 px-4 mb-4 text-center">
      {apiCalls}
    </div>
    <button 
      className={`mt-auto py-2 px-4 rounded-full font-semibold ${
        buttonText === 'Coming Soon' 
          ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
    >
      {buttonText}
    </button>
  </div>
);

// PricingSection component
const PricingSection: React.FC = () => {
  const plans: PricingPlanProps[] = [
    { name: 'Free', price: 0, description: 'Single CRM sub-account', apiCalls: '50 API calls/month', buttonText: 'Get Started' },
    { name: 'Basic', price: 29, description: 'Single CRM sub-account', apiCalls: '10,000 API calls/month', buttonText: 'Get Started', featured: true },
    { name: 'Standard', price: 49, description: '10 CRM sub-accounts', apiCalls: '10,000 API calls/month', buttonText: 'Coming Soon' },
    { name: 'Premium', price: 79, description: 'Unlimited CRM sub-accounts', apiCalls: '10,000 API calls/month', buttonText: 'Coming Soon' },
  ];

  return (
    <>
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Join over 20,000 developers building with V2 Simplify
      </h2>
      <p className="text-xl text-center text-gray-600 mb-12">
        Get started with a free account. No credit card required.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan) => (
          <PricingPlan key={plan.name} {...plan} />
        ))}
      </div>
    </>
  );
};

// FAQ components
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-600 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs: FAQItemProps[] = [
    {
      question: "Couldn't I build this myself and save money?",
      answer: "You could, but there are good reasons for not doing so. The vast majority of the cost to use V2 Simplify is provider fees which you would have to incur anyway. While we do add a small base fee, this is more than offset by the fact that we support and maintain the whole system, and continue to reduce latency and improve the experience. You even have the option of bringing your own Provider Keys, and only paying us for the value we provide. We specialize in API integration and it's where we devote our time and resources, so we'll always be leading the way. This lets you keep your focus on building exceptional products."
    },
    {
      question: "Sounds good — but I'm building a custom integration for my business...",
      answer: "We'd be happy to discuss your specific use case and how we can help. Our platform is designed to be flexible and can accommodate a wide range of custom integrations. Please reach out to our sales team for a customized solution."
    },
    {
      question: "Is it going to be hard to set up?",
      answer: "Not at all! We've designed our system to be as user-friendly as possible. Our documentation provides step-by-step guides, and our support team is always ready to assist you if you encounter any issues. Most users are up and running within minutes."
    },
  ];

  return (
    <>
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </>
  );
};

// Footer component
const Footer: React.FC = () => {
  const navLinks = ['Docs', 'Pricing', 'Security', 'Enterprise', 'Blog', 'Privacy Policy', 'Terms of Service'];
  
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <span className="text-2xl font-bold mr-8 mb-4 md:mb-0">VAPI</span>
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-300 text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {/* Social media icons */}
        </div>
      </div>
    </footer>
  );
};

// ComparisonSection component
const ComparisonSection: React.FC = () => {
  const comparisons = [
    { before: "Manually Respond To Every Inbound Lead", after: "Automatically Respond To Multiple Leads At Once" },
    { before: "Slow Response Times", after: "Instant Responses" },
    { before: "Wasted Time & Energy", after: "Dedicate Time & Energy Elsewhere" },
    { before: "Working Afterhours", after: "Coverage 24 Hours Per Day, 7 Days Per Week, 365 Days Out Of The Year" },
    { before: "Limited Brand Accessibility", after: "Increased Brand Trust" },
    { before: "Manually Answer FAQs, Book Appointments & Update Contacts", after: "Automate Small Time Consuming Tasks" },
    { before: "Decreased Sales", after: "Increase Sales & Conversions" },
    { before: "Deal With Poor Quality Leads", after: "Qualify Every Inbound Lead On Autopilot" },
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Tons of Messages, But Short On Time?
        </h2>
        <p className="text-xl text-center text-gray-600 mb-8">
          Streamline your communications, save time, and drive your business towards greater profitability with ZappyChat.
        </p>
        <div className="flex justify-center mb-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg">
            Experience ZappyChat Today
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <Image 
                src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/get-token-0a59vx/assets/ngpx2b8297eg/stress.gif"
                alt="Before ZappyChat"
                width={200}
                height={200}
              />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Before ZappyChat</h3>
            <ul className="space-y-2">
              {comparisons.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-red-500 mr-2">✗</span>
                  {item.before}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-gray-800 text-white rounded-full p-4">
              VS
            </div>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <Image 
                src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/get-token-0a59vx/assets/e54tz6y3soui/Happy.gif"
                alt="With ZappyChat"
                width={200}
                height={200}
              />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">With ZappyChat</h3>
            <ul className="space-y-2">
              {comparisons.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {item.after}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main UpgradeFlow component
const UpgradeFlow: React.FC = () => {
  const integrations = [
    {
      name: 'Make',
      logo: 'https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/get-token-0a59vx/assets/2968wffoe9n5/make-logo-freelogovectors.net_.png'
    },
    {
      name: 'Zapier',
      logo: 'https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/get-token-0a59vx/assets/tsh91f2x71ue/zapier-2.svg'
    },
    {
      name: 'Pabbly',
      logo: 'https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/get-token-0a59vx/assets/yjjfjx38wioj/Pabbly-SVG.svg'
    },
    {
      name: 'n8n',
      logo: 'https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/get-token-0a59vx/assets/f8b34d55h0pp/pngwing.com.png'
    }
  ];

  const steps = [
    {
      title: "Connect",
      icon: <ArrowRightIcon />,
      description: "Log in to your GoHighLevel account and link your Agency and Sub-accounts.",
      image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/get-token-0a59vx/assets/apmx6fhhx7lh/Step_1.jpg"
    },
    {
      title: "Authenticate",
      icon: <KeyIcon />,
      description: "Obtain your access token through a simple REST API GET request.",
      image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/get-token-0a59vx/assets/apmx6fhhx7lh/Step_1.jpg"
    },
    {
      title: "Automate",
      icon: <ZapIcon />,
      description: "Start creating powerful, custom automations in seconds.",
      image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/get-token-0a59vx/assets/apmx6fhhx7lh/Step_1.jpg"
    },
    {
      title: "Optimize",
      icon: <ZapIcon />,
      description: "Access all API functionality for peak performance and scalability.",
      image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/get-token-0a59vx/assets/apmx6fhhx7lh/Step_1.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-purple-600 p-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white">V2 Simplify</h1>
        <nav>
          <button className="mr-4 bg-transparent border border-white text-white px-4 py-2 rounded">LOGIN</button>
          <button className="bg-white text-purple-600 px-4 py-2 rounded">SIGN UP</button>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section and Integrations */}
        <section className="w-full bg-gradient-to-br from-purple-600 to-pink-500 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-white mb-4">Upgrade HighLevel V2 API Instantly</h2>
            <p className="text-xl text-white mb-8">
              Create automation seamlessly.<br />
              Access all functionality in a split second.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg mb-16">
              GET FREE TRIAL
            </button>

            <div className="integrations-container flex flex-wrap justify-center items-center gap-8">
              {integrations.map((tool) => (
                <div key={tool.name} className="integration-box bg-white p-4 rounded-lg shadow-md flex items-center justify-center w-40 h-20">
                  <Image 
                    src={tool.logo} 
                    alt={`${tool.name} logo`} 
                    width={100} 
                    height={40} 
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full bg-white py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">How It Works:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                  <div className="relative w-full pb-[56.25%]">
                    <Image 
                      src={step.image}
                      alt={`Step ${index + 1}: ${step.title}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 text-blue-600">
                        {step.icon}
                      </div>
                      <h4 className="text-xl font-semibold">{`${index + 1}. ${step.title}`}</h4>
                    </div>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <ComparisonSection />

        {/* Pricing Section */}
        <section className="w-full bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <PricingSection />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-white py-16">
          <div className="container mx-auto px-4">
            <FAQ />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UpgradeFlow;