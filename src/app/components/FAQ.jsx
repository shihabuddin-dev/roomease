export default function FAQ() {
  const faqs = [
    {
      question: "What is RoomEase?",
      answer: "RoomEase is a platform for booking, managing, and listing properties or rooms with a seamless experience for both hosts and guests."
    },
    {
      question: "How do I create an account?",
      answer: "You can sign up using your Google account or register with your email and password on the Register page."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use secure authentication and store your data safely in our database."
    },
    {
      question: "How do I book a room?",
      answer: "Browse available properties, select your preferred room, and complete the booking form."
    },
    {
      question: "Can I manage my bookings?",
      answer: "Yes, you can view and manage all your bookings from your dashboard after logging in."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach out to our support team via the Contact page for any assistance."
    }
  ];

  return (
    <section className="max-w-5xl mx-auto my-16 px-4 py-10 bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 rounded-3xl shadow-xl">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10 drop-shadow-lg tracking-tight">
        Frequently Asked Questions
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 group hover:shadow-2xl transition duration-300"
            open={idx === 0}
          >
            <summary className="cursor-pointer py-2 px-3 font-semibold text-lg bg-gray-50 rounded-xl group-open:bg-blue-50 group-open:text-blue-700 transition flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full"></span>
              {faq.question}
            </summary>
            <div className="px-3 pt-3 text-gray-700 leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
