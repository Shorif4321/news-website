import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4 py-10">
                {/* About Section */}
                <section id="about" className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
                    <p className="text-lg text-center">
                        We are a passionate team of individuals dedicated to providing the best service to our customers. Our goal is to innovate and deliver quality at every step.
                    </p>
                </section>

                {/* Service Section */}
                <section id="services" className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="service-card bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Service 1</h3>
                            <p>Our first service offers amazing features that benefit our clients in the long term.</p>
                        </div>
                        <div className="service-card bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Service 2</h3>
                            <p>We provide efficient and effective solutions that maximize productivity and growth.</p>
                        </div>
                        <div className="service-card bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Service 3</h3>
                            <p>Our service 3 is focused on delivering excellence in customer satisfaction and support.</p>
                        </div>
                    </div>
                </section>

                {/* Company Policy Section */}
                <section id="policy" className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Company Policy</h2>
                    <p className="text-lg">
                        We believe in transparency, honesty, and integrity. Our policies are designed to ensure the best outcomes for our clients while maintaining high standards of ethics and compliance.
                    </p>
                </section>

                {/* Newsletter Section */}
                <section id="newsletter" className="mb-12 bg-blue-500 text-white p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-center mb-6">Join Our Newsletter</h2>
                    <p className="text-lg text-center mb-6">
                        Stay updated with the latest news, offers, and services by joining our newsletter.
                    </p>
                    <div className="flex justify-center">
                        <input type="email" placeholder="Enter your email" className="p-3 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        <button className="bg-blue-700 text-white px-6 py-3 rounded-r-lg hover:bg-blue-800 focus:outline-none">
                            Subscribe
                        </button>
                    </div>
                </section>

                {/* Unique Section (Testimonials, FAQ, etc.) */}
                <section id="unique" className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
                    <div className="flex flex-col lg:flex-row justify-around">
                        <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg mb-6 lg:mb-0">
                            <p className="italic">This service completely changed the way we do business. Highly recommend</p>
                            <p className="font-semibold mt-4">John Doe</p>
                            <p className="text-gray-500">CEO, ABC Company</p>
                        </div>
                        <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg">
                            <p className="italic">Excellent customer support and great overall experience. Will be back!</p>
                            <p className="font-semibold mt-4">Jane Smith</p>
                            <p className="text-gray-500">Marketing Director, XYZ Corp</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;