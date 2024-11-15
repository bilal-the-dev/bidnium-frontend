<template>
    <NavBar />
    <section class="text-white py-24">
        <div class="container mx-auto px-6">
            <!-- Contact Title -->
            <h2 class="text-3xl font-bold text-center mb-12">Contact Us</h2>

            <div class="flex flex-col md:flex-row justify-between gap-12">
                <!-- Contact Info -->
                <div class="md:w-1/3">
                    <h3 class="text-xl font-semibold mb-4">Get in Touch</h3>
                    <p class="mb-4">We would love to hear from you. Whether you have questions, feedback, or need support, feel free to reach out to us!</p>

                    <!-- Address, Phone, Email -->
                    <div class="space-y-4">
                        <div class="flex items-center space-x-3">
                            <i class="pi pi-map-marker text-yellow-400 text-xl"></i>
                            <p class="text-gray-400">123 Bidding Lane, Suite 200, City, Country</p>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="pi pi-phone text-yellow-400 text-xl"></i>
                            <p class="text-gray-400">+1 (123) 456-7890</p>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="pi pi-envelope text-yellow-400 text-xl"></i>
                            <p class="text-gray-400">contact@biddingapp.com</p>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="md:w-2/3 bg-gray-900 p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-4">Send Us a Message</h3>
                    <form @submit.prevent="handleSubmit">
                        <div class="space-y-4">
                            <!-- Name Field -->
                            <div>
                                <label for="name" class="block text-gray-300">Name</label>
                                <input v-model="form.name" type="text" id="name" class="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
                            </div>

                            <!-- Email Field -->
                            <div>
                                <label for="email" class="block text-gray-300">Email</label>
                                <input v-model="form.email" type="email" id="email" class="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
                            </div>

                            <!-- Message Field -->
                            <div>
                                <label for="message" class="block text-gray-300">Message</label>
                                <textarea v-model="form.message" id="message" rows="5" class="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" required></textarea>
                            </div>

                            <!-- Submit Button -->
                            <div class="flex justify-center">
                                <button type="submit" class="px-8 py-3 bg-yellow-500 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Map Section -->
            <div class="mt-12">
                <h3 class="text-2xl font-semibold text-center mb-6">Find Us Here</h3>
                <div class="relative w-full h-96">
                    <iframe
                        class="absolute top-0 left-0 w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.3804819373786!2d-104.99890118462626!3d39.739235879750945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c36f7f45de978b%3A0x9a634636c2d402d!2s1600%20Broadway%2C%20Denver%2C%20CO%2030202!5e0!3m2!1sen!2sus!4v1635971200105!5m2!1sen!2sus"
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';

const form = ref({
    name: '',
    email: '',
    message: ''
});

const handleSubmit = () => {
    // Handle the form submission logic here
    alert('Your message has been sent!');
    form.value = { name: '', email: '', message: '' }; // Reset the form after submission
};
</script>

<style scoped>
/* You can add custom styles for the contact page here */
</style>
