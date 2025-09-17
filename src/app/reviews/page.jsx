'use client'
import React, { useState } from 'react'

export default function ReviewsPage() {
    const testimonials = [
        {
            name: "Shihab Uddin",
            image: "https://i.ibb.co.com/v4wz678M/shihab-img.jpg",
            text: "RoomEase helped me find the perfect apartment quickly. The booking was easy and the support was excellent!",
            role: "Frontend Web Developer",
        },
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
        {
            name: "Rifat Chowdhury",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            text: "Easy to use and very reliable. Found my flat in just a few days!",
            role: "Developer, Dhaka",
        },
        {
            name: "Maliha Noor",
            image: "https://randomuser.me/api/portraits/women/21.jpg",
            text: "Loved the user interface and the quick responses from hosts.",
            role: "Teacher, Rajshahi",
        },
        {
            name: "Imran Hossain",
            image: "https://randomuser.me/api/portraits/men/12.jpg",
            text: "Booking was simple and secure. Highly recommend RoomEase!",
            role: "Banker, Barisal",
        },
        {
            name: "Farzana Akter",
            image: "https://randomuser.me/api/portraits/women/33.jpg",
            text: "Great selection of properties and honest reviews.",
            role: "Doctor, Khulna",
        },
        {
            name: "Shuvo Rahman",
            image: "https://randomuser.me/api/portraits/men/23.jpg",
            text: "The best platform for students looking for hostels.",
            role: "Student, Dhaka",
        },
        {
            name: "Nusrat Jahan",
            image: "https://randomuser.me/api/portraits/women/56.jpg",
            text: "I could compare many options before booking. Very helpful!",
            role: "Designer, Sylhet",
        },
        {
            name: "Arif Mahmud",
            image: "https://randomuser.me/api/portraits/men/67.jpg",
            text: "Support team was quick to resolve my queries.",
            role: "Engineer, Chattogram",
        },
        {
            name: "Meherun Nesa",
            image: "https://randomuser.me/api/portraits/women/77.jpg",
            text: "Safe and secure payment system. Loved it!",
            role: "Teacher, Rajshahi",
        },
        {
            name: "Rashedul Islam",
            image: "https://randomuser.me/api/portraits/men/88.jpg",
            text: "Easy to navigate and lots of choices.",
            role: "Banker, Barisal",
        },
        {
            name: "Sumaiya Haque",
            image: "https://randomuser.me/api/portraits/women/99.jpg",
            text: "I found a beautiful apartment for my family.",
            role: "Doctor, Khulna",
        },
        {
            name: "Jubayer Alam",
            image: "https://randomuser.me/api/portraits/men/11.jpg",
            text: "RoomEase is the best for city living!",
            role: "Developer, Dhaka",
        },
        {
            name: "Mim Akter",
            image: "https://randomuser.me/api/portraits/women/22.jpg",
            text: "I could book instantly and get confirmation quickly.",
            role: "Student, Dhaka University",
        },
        {
            name: "Sabbir Hossain",
            image: "https://randomuser.me/api/portraits/men/33.jpg",
            text: "Very trustworthy platform. Will use again.",
            role: "Engineer, Chattogram",
        },
        {
            name: "Ruma Khatun",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "Loved the reviews and property details.",
            role: "Designer, Sylhet",
        },
        {
            name: "Shahriar Kabir",
            image: "https://randomuser.me/api/portraits/men/55.jpg",
            text: "Easy to communicate with hosts. Great experience!",
            role: "Banker, Barisal",
        },
        {
            name: "Moushumi Akter",
            image: "https://randomuser.me/api/portraits/women/66.jpg",
            text: "Quick booking and friendly support.",
            role: "Doctor, Khulna",
        },
        {
            name: "Raihan Uddin",
            image: "https://randomuser.me/api/portraits/men/77.jpg",
            text: "Lots of verified properties. Felt safe booking here.",
            role: "Developer, Dhaka",
        },
        {
            name: "Tania Sultana",
            image: "https://randomuser.me/api/portraits/women/88.jpg",
            text: "I could filter by location and price easily.",
            role: "Teacher, Rajshahi",
        },
        {
            name: "Fahim Hasan",
            image: "https://randomuser.me/api/portraits/men/99.jpg",
            text: "Booking was fast and secure.",
            role: "Engineer, Chattogram",
        },
        {
            name: "Shamima Nasrin",
            image: "https://randomuser.me/api/portraits/women/12.jpg",
            text: "Great for families and students alike.",
            role: "Designer, Sylhet",
        },
        {
            name: "Rony Ahmed",
            image: "https://randomuser.me/api/portraits/men/21.jpg",
            text: "I found my dream home through RoomEase.",
            role: "Banker, Barisal",
        },
        {
            name: "Mitu Akter",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
            text: "Very easy to use and lots of options.",
            role: "Doctor, Khulna",
        },
        {
            name: "Sakib Chowdhury",
            image: "https://randomuser.me/api/portraits/men/44.jpg",
            text: "The best property platform in Bangladesh!",
            role: "Developer, Dhaka",
        },
    ];

    // Pagination logic
    const [page, setPage] = useState(1);
    const perPage = 8;
    const totalPages = Math.ceil(testimonials.length / perPage);
    const paginated = testimonials.slice((page - 1) * perPage, page * perPage);

    return (
        <section className="my-10 py-16 px-4 bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100">
            <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10 drop-shadow-lg">
                What Our Users Say
            </h2>
            <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {paginated.map((t, i) => (
                    <div
                        key={i + (page - 1) * perPage}
                        className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-blue-100 hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={t?.image}
                            alt={t?.name}
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
            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-10 gap-2">
                <button
                    className="px-4 py-2 rounded bg-blue-100 text-blue-700 font-semibold disabled:opacity-50"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <span className="mx-2 text-lg font-bold text-blue-700">
                    Page {page} of {totalPages}
                </span>
                <button
                    className="px-4 py-2 rounded bg-blue-100 text-blue-700 font-semibold disabled:opacity-50"
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </section>
    );
}
