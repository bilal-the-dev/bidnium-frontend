<template>
    <NavBar />
    <div>
        <!-- Hero Section -->
        <section class="relative bg-gray-900 text-white py-24 px-4 md:px-8">
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div class="relative container mx-auto text-center">
                <h1 class="text-4xl md:text-5xl font-semibold mb-4">About Us</h1>
                <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                    We are a leading provider of online bidding software, revolutionizing the way auctions are conducted. Our platform is designed to provide seamless, secure, and transparent bidding experiences.
                </p>
            </div>
        </section>

        <!-- Our Mission Section -->
        <section class="py-24 px-4 md:px-8 bg-gray-800 text-white">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-6">Our Mission</h2>
                <p class="text-lg text-gray-400 max-w-2xl mx-auto">
                    Our mission is to empower both bidders and sellers by providing an intuitive, transparent, and fair auction platform. We aim to offer the best user experience through innovation and dedication to our community.
                </p>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-24 px-4 md:px-8">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-12">Our Features</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Feature 1 -->
                    <div class="bg-gray-900 p-8 rounded-lg shadow-lg">
                        <div class="flex items-center justify-center mb-4">
                            <i class="pi pi-wallet text-4xl text-blue-500"></i>
                        </div>
                        <h3 class="text-2xl font-semibold mb-4">Secure Bidding</h3>
                        <p class="text-gray-600">Our platform offers top-notch security, ensuring your bids are protected and transparent at all times. Feel confident bidding with us.</p>
                    </div>
                    <!-- Feature 2 -->
                    <div class="bg-gray-900 p-8 rounded-lg shadow-lg">
                        <div class="flex items-center justify-center mb-4">
                            <i class="pi pi-clock text-4xl text-blue-500"></i>
                        </div>
                        <h3 class="text-2xl font-semibold mb-4">Real-Time Updates</h3>
                        <p class="text-gray-600">Stay updated with real-time notifications for every bid placed. Never miss a moment and track auctions as they happen.</p>
                    </div>
                    <!-- Feature 3 -->
                    <div class="bg-gray-900 p-8 rounded-lg shadow-lg">
                        <div class="flex items-center justify-center mb-4">
                            <i class="pi pi-chart-line text-4xl text-blue-500"></i>
                        </div>
                        <h3 class="text-2xl font-semibold mb-4">Analytics & Insights</h3>
                        <p class="text-gray-600">Get detailed analytics and insights to track bidding trends, top sellers, and auction performance, helping you make smarter decisions.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Team Section -->
        <section class="py-24 px-4 md:px-8 bg-gray-900 text-white">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-12">Meet Our Team</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Team Member 1 -->
                    <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <!-- <img src="/images/team1.jpg" alt="Team Member 1" class="w-32 h-32 rounded-full mx-auto mb-4" /> -->
                        <h3 class="text-2xl font-semibold mb-2">John Doe</h3>
                        <p class="text-lg text-gray-400">CEO & Founder</p>
                    </div>
                    <!-- Team Member 2 -->
                    <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <!-- <img src="/images/team2.jpg" alt="Team Member 2" class="w-32 h-32 rounded-full mx-auto mb-4" /> -->
                        <h3 class="text-2xl font-semibold mb-2">Jane Smith</h3>
                        <p class="text-lg text-gray-400">CTO</p>
                    </div>
                    <!-- Team Member 3 -->
                    <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <!-- <img src="/images/team3.jpg" alt="Team Member 3" class="w-32 h-32 rounded-full mx-auto mb-4" /> -->
                        <h3 class="text-2xl font-semibold mb-2">Michael Lee</h3>
                        <p class="text-lg text-gray-400">Lead Developer</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="py-24 px-4 md:px-8 bg-gray-800 text-white">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-12">What Our Clients Say</h2>
                <div class="flex justify-center space-x-12">
                    <!-- Testimonial 1 -->
                    <div class="bg-gray-900 p-8 rounded-lg shadow-lg max-w-xs">
                        <p class="text-gray-600 mb-4">"This platform has made online bidding so easy! I love the transparent process and real-time updates."</p>
                        <p class="font-semibold text-gray-900">Emily R.</p>
                        <p class="text-gray-400">Bidding Enthusiast</p>
                    </div>
                    <!-- Testimonial 2 -->
                    <div class="bg-gray-900 p-8 rounded-lg shadow-lg max-w-xs">
                        <p class="text-gray-600 mb-4">"As a seller, I've seen great results! The platform is user-friendly, and the bidding process is smooth."</p>
                        <p class="font-semibold text-gray-900">Mark H.</p>
                        <p class="text-gray-400">Top Seller</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';

// No need for additional logic, as this page is static with basic sections.
</script>

<style scoped>
/* Add any custom styling here */
</style>
