

const FrequentlyAskedQuestions = () => {
    const faqData = [
        {
          question: 'How do I create a listing?',
          answer: 'To create a new listing, go to your dashboard and click the "Create Listing" button. Fill out the required information and submit your listing for review.',
        },
        {
          question: 'How do I contact a service provider?',
          answer: 'You can contact a service provider by clicking on their profile and using the messaging feature to send them a message. You can discuss your project and requirements with them directly.',
        },
        {
          question: 'What payment methods are accepted?',
          answer: 'We accept various payment methods, including credit/debit cards, PayPal, and more. You can select your preferred payment option during the checkout process.',
        },
      ];
    
      return (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-semibold mb-4 text-center text-blue-700 ">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white rounded shadow-md p-4">
                <div className="font-semibold">{item.question}</div>
                <div className="text-gray-600 mt-2">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default FrequentlyAskedQuestions;