import React from 'react'

export default function Testimonials() {
    const testimonials = [
        {
            name: "Ayesha Rahman",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "RoomEase made finding my dream apartment effortless. The booking process was smooth and secure!",
            role: "Student, Dhaka University",
        },
        {
            name: "Tanvir Ahmed",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "I found a great place for my family. The support team was always available and very helpful.",
            role: "Engineer, Chattogram",
        },
        {
            name: "Sadia Islam",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            text: "The property details and reviews helped me make the right choice. Highly recommended!",
            role: "Designer, Sylhet",
        },
    ];

    return (
        <section className="my-10 py-16 px-4 bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100">
            <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10 drop-shadow-lg">
                What Our Users Say
            </h2>
            <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-blue-100 hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={t.image}
                            alt={t.name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-yellow-300 mb-4 shadow"
                        />
                        <blockquote className="italic text-gray-700 mb-4 leading-relaxed">
                            “{t.text}”
                        </blockquote>
                        <div className="font-bold text-blue-700 text-lg">{t.name}</div>
                        <div className="text-sm text-gray-500">{t.role}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
