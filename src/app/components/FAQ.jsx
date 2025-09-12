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
    <section className="max-w-2xl mx-auto my-12 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="border rounded group">
            <summary className="cursor-pointer py-3 px-4 font-semibold text-lg bg-gray-50 group-open:bg-blue-50 group-open:text-blue-700 transition">
              {faq.question}
            </summary>
            <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
