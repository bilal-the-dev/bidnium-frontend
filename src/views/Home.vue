<template>
    <div class="min-h-screen">
        <!-- Navbar -->
        <NavBar />

        <!-- Hero Section -->
        <div class="flex flex-col gap-4 items-center justify-center px-4 mt-60 text-center">
            <h1 class="text-8xl font-bold text-white mb-4">
                Powerful Bidding
                <br />
                like
                <span class="relative inline-block">
                    <span class="text-blue-400">never</span>
                    <span
                        class="absolute bottom-0 left-0 w-full"
                        :style="{
                            height: '2px',
                            background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 50%, #3b82f6 100%)',
                            transform: 'rotate(-2deg)',
                            transformOrigin: 'left bottom'
                        }"
                    />
                    <span
                        class="absolute bottom-0 left-0 w-full"
                        :style="{
                            height: '1px',
                            background: 'linear-gradient(90deg, #93c5fd 0%, #bfdbfe 50%, #93c5fd 100%)',
                            transform: 'rotate(-2deg) translateY(2px)',
                            transformOrigin: 'left bottom',
                            opacity: 0.7
                        }"
                    />
                </span>
                before
            </h1>

            <p class="text-gray-300 max-w-2xl mx-auto mb-8 text-xl">Get ready to outbid, outsmart, and own it all! Dive into the thrill of live bidding and score the deals you’ve been dreaming of!</p>

            <div class="flex gap-4">
                <button class="px-6 py-3 text-xl bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center">
                    <span class="mr-2">→</span>
                    Pricing
                </button>
                <button class="px-6 py-3 text-xl bg-gray-800 text-white rounded-md hover:bg-gray-700 transition" @click="login">Login</button>
            </div>
        </div>
    </div>

    <section class="relative py-24 overflow-hidden">
        <!-- Sloped background -->
        <div class="absolute inset-0 bg-gray-900 transform -skew-y-3 origin-top-right scale-110"></div>

        <div class="relative z-10 container mx-auto px-4">
            <!-- Header Text -->
            <div class="text-center mb-16">
                <p class="text-gray-400 uppercase tracking-wider mb-3">STATISTICS</p>
                <h2 class="text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto">The numbers don't lie. See for yourself how we've made a significant impact.</h2>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <!-- Created Tickets -->
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div class="flex justify-center mb-4">
                        <div class="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <p class="text-gray-400 mb-2">Created Tickets</p>
                    <h3 class="text-3xl font-bold text-white">
                        <span v-text="formattedCount.created"></span>
                    </h3>
                </div>

                <!-- Closed Tickets -->
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div class="flex justify-center mb-4">
                        <div class="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                    <p class="text-gray-400 mb-2">Closed Tickets</p>
                    <h3 class="text-3xl font-bold text-white">
                        <span v-text="formattedCount.closed"></span>
                    </h3>
                </div>

                <!-- Active Users -->
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div class="flex justify-center mb-4">
                        <div class="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                    </div>
                    <p class="text-gray-400 mb-2">Active Users</p>
                    <h3 class="text-3xl font-bold text-white">
                        <span v-text="formattedCount.users"></span>
                    </h3>
                </div>

                <!-- Servers -->
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div class="flex justify-center mb-4">
                        <div class="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                />
                            </svg>
                        </div>
                    </div>
                    <p class="text-gray-400 mb-2">Servers</p>
                    <h3 class="text-3xl font-bold text-white">
                        <span v-text="formattedCount.servers"></span>
                    </h3>
                </div>
            </div>

            <!-- Call to Action -->
            <div class="text-center mt-16">
                <p class="text-white text-lg">
                    Convinced?
                    <button class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ml-2">Login</button>
                    to get started with bidding now!
                </p>
            </div>
        </div>
    </section>

    <section class="text-center px-8 pt-32">
        <p class="text-gray-400 uppercase tracking-wider mb-3">Features</p>
        <h2 class="text-7xl font-bold mb-24 text-white">
            How It
            <span class="relative inline-block">
                <span class="text-blue-400">Works</span>
                <span
                    class="absolute bottom-0 left-0 w-full"
                    :style="{
                        height: '2px',
                        background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 50%, #3b82f6 100%)',
                        transform: 'rotate(-2deg)',
                        transformOrigin: 'left bottom'
                    }"
                />
                <span
                    class="absolute bottom-0 left-0 w-full"
                    :style="{
                        height: '1px',
                        background: 'linear-gradient(90deg, #93c5fd 0%, #bfdbfe 50%, #93c5fd 100%)',
                        transform: 'rotate(-2deg) translateY(2px)',
                        transformOrigin: 'left bottom',
                        opacity: 0.7
                    }"
                />
            </span>
        </h2>
    </section>
    <HomeSection
        title="Step 1: Place Your Bid"
        description="Ready to get started? It's simple! Just enter your bid amount and hit 'Submit.' Whether you're bidding on a product, service, or exclusive deal, this is the first step to join the action!"
        imageSrc="/demo/images/landing/mockup.svg"
        icon="pi pi-ticket"
        textPosition="right"
        :iconSize="{ fontSize: '2.5rem' }"
    />
    <HomeSection
        title="Step 2: Real-Time Updates"
        description="Once your bid is placed, watch the action unfold in real-time. Get notified whenever someone outbids you, and jump in to stay at the top of the game. It’s fast, it’s fun!"
        imageSrc="/demo/images/landing/mockup-desktop.svg"
        icon="pi pi-clock"
        textPosition="left"
        :iconSize="{ fontSize: '2rem' }"
    />
    <HomeSection
        title="Step 3: Winning Bid"
        description="If you're the highest bidder when time's up, congratulations! You’ll receive a notification that you’ve won, and the next steps for completing the transaction will be provided. It's that easy!"
        imageSrc="/demo/images/landing/screen-1.png"
        icon="pi pi-check"
        textPosition="right"
        :iconSize="{ fontSize: '2rem' }"
    />

    <section class="relative py-24 overflow-hidden">
        <!-- Sloped background -->
        <div class="absolute inset-0 bg-gray-900 transform -skew-y-3 origin-top-right scale-110"></div>

        <div class="relative z-10 container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-semibold text-white">Choose Your Plan</h2>
                <p class="text-lg text-gray-400">Pick the right plan for your needs and start bidding today!</p>
            </div>

            <!-- Pricing Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Basic Plan -->
                <div class="bg-[#172135] rounded-lg shadow-xl transform transition-transform hover:scale-105 p-8 text-center">
                    <div class="mb-6">
                        <span class="text-4xl font-bold text-gray-300">$19</span>
                        <span class="text-lg text-gray-300">/ month</span>
                    </div>
                    <div class="mb-6">
                        <i class="pi pi-ticket text-5xl text-blue-500" style="font-size: 5rem"></i>
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-300 mb-4">Basic Plan</h3>
                    <p class="text-gray-400 mb-6">Perfect for beginners who want to explore online bidding with essential features.</p>
                    <ul class="text-left text-gray-500 mb-6 space-y-4">
                        <li class="text-gray-400"><i class="pi pi-check text-green-500"></i> 5 Active Bids</li>
                        <li class="text-gray-400"><i class="pi pi-check text-green-500"></i> Email Notifications</li>
                        <li class="text-gray-400"><i class="pi pi-check text-green-500"></i> Real-time Updates</li>
                    </ul>
                    <button class="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300">Buy Now</button>
                </div>

                <!-- Standard Plan -->
                <div class="bg-[#172135] rounded-lg shadow-xl transform transition-transform hover:scale-105 p-8 text-center">
                    <div class="mb-6">
                        <span class="text-4xl font-bold text-gray-300">$49</span>
                        <span class="text-lg text-gray-300">/ month</span>
                    </div>
                    <div class="mb-6">
                        <i class="pi pi-clock text-5xl text-yellow-500" style="font-size: 5rem"></i>
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-300 mb-4">Standard Plan</h3>
                    <p class="text-gray-400 mb-6">A great option for growing businesses who need more features and flexibility.</p>
                    <ul class="text-left text-gray-500 mb-6 space-y-4">
                        <li class="text-gray-400"><i class="pi pi-check text-green-500"></i> 15 Active Bids</li>
                        <li class="text-gray-400"><i class="pi pi-check text-green-500"></i> Real-time Notifications</li>
                        <li class="text-gray-400"><i class="pi pi-check text-green-500"></i> Priority Customer Support</li>
                        <li class="text-gray-400"><i class="pi pi-check text-green-500"></i> Custom Bid Alerts</li>
                    </ul>
                    <button class="bg-yellow-600 text-white py-2 px-6 rounded-md hover:bg-yellow-700 transition duration-300">Buy Now</button>
                </div>

                <!-- Premium Plan -->
                <div class="bg-[#172135] rounded-lg shadow-xl transform transition-transform hover:scale-105 p-8 text-center">
                    <div class="mb-6">
                        <span class="text-4xl font-bold text-gray-300">$99</span>
                        <span class="text-lg text-gray-300">/ month</span>
                    </div>
                    <div class="mb-6">
                        <i class="pi pi-check-circle text-5xl text-green-500" style="font-size: 5rem"></i>
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-300 mb-4">Premium Plan</h3>
                    <p class="text-gray-400 mb-6">The ultimate plan for businesses looking to get the most out of their online bidding experience.</p>
                    <ul class="text-left text-gray-500 mb-6 space-y-4">
                        <li class="text-gray-400"><i class="pi pi-check text-green-500"></i> Unlimited Active Bids</li>
                        <li class="text-gray-400"><i class="pi pi-check text-green-500"></i> Real-time Notifications</li>
                        <li class="text-gray-400"><i class="pi pi-check text-green-500"></i> VIP Support</li>
                        <li class="text-gray-400"><i class="pi pi-check text-green-500"></i> Analytics Dashboard</li>
                        <li class="text-gray-400"><i class="pi pi-check text-green-500"></i> Custom Reporting</li>
                    </ul>
                    <button class="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-300">Buy Now</button>
                </div>
            </div>
        </div>
    </section>

    <section class="relative py-24 bg-[#030712] text-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-semibold mb-8">Frequently Asked Questions</h2>
            <p class="text-lg mb-12">Find answers to the most common questions about our online bidding platform.</p>

            <!-- Accordion Container -->
            <div class="space-y-6">
                <!-- FAQ 1 -->
                <div class="accordion-item">
                    <div class="accordion-header bg-gray-800 shadow-lg rounded-lg p-4 mb-2 cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out" @click="toggle(1)">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-semibold">What is online bidding?</h3>
                            <i :class="isOpen(1) ? 'pi pi-minus' : 'pi pi-plus'" class="text-2xl text-gray-400"></i>
                        </div>
                    </div>
                    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                        <div v-if="active === 1" class="accordion-content bg-gray-800 pt-2 border-l-4 border-blue-500 shadow-md rounded-b-lg transition-all duration-500 ease-in-out">
                            <p>
                                Online bidding is a process where participants place bids to purchase items or services. The highest bid wins, and the transaction is completed online. This process ensures transparency and allows for competitive
                                pricing in real-time.
                            </p>
                        </div>
                    </transition>
                </div>

                <!-- FAQ 2 -->
                <div class="accordion-item">
                    <div class="accordion-header bg-gray-800 shadow-lg rounded-lg p-4 mb-2 cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out" @click="toggle(2)">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-semibold">How can I place a bid?</h3>
                            <i :class="isOpen(2) ? 'pi pi-minus' : 'pi pi-plus'" class="text-2xl text-gray-400"></i>
                        </div>
                    </div>
                    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                        <div v-if="active === 2" class="accordion-content bg-gray-800 p-6 border-l-4 border-blue-500 shadow-md rounded-b-lg transition-all duration-500 ease-in-out">
                            <p>
                                To place a bid, simply register on the platform, browse the available items, and enter the amount you are willing to pay. Once your bid is placed, it will appear in the auction list. You can monitor the auction in
                                real-time and adjust your bid if necessary.
                            </p>
                        </div>
                    </transition>
                </div>

                <!-- FAQ 3 -->
                <div class="accordion-item">
                    <div class="accordion-header bg-gray-800 shadow-lg rounded-lg p-4 mb-2 cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out" @click="toggle(3)">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-semibold">Can I cancel my bid?</h3>
                            <i :class="isOpen(3) ? 'pi pi-minus' : 'pi pi-plus'" class="text-2xl text-gray-400"></i>
                        </div>
                    </div>
                    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                        <div v-if="active === 3" class="accordion-content bg-gray-800 p-6 border-l-4 border-blue-500 shadow-md rounded-b-lg transition-all duration-500 ease-in-out">
                            <p>
                                Once a bid is placed, it cannot be canceled. However, if there is an issue with the item or the auction process, you can reach out to our support team for assistance. We encourage careful consideration before placing a
                                bid.
                            </p>
                        </div>
                    </transition>
                </div>

                <!-- FAQ 4 -->
                <div class="accordion-item">
                    <div class="accordion-header bg-gray-800 shadow-lg rounded-lg p-4 mb-2 cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out" @click="toggle(4)">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-semibold">How do I pay for my winning bid?</h3>
                            <i :class="isOpen(4) ? 'pi pi-minus' : 'pi pi-plus'" class="text-2xl text-gray-400"></i>
                        </div>
                    </div>
                    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                        <div v-if="active === 4" class="accordion-content bg-gray-800 p-6 border-l-4 border-blue-500 shadow-md rounded-b-lg transition-all duration-500 ease-in-out">
                            <p>
                                After winning a bid, you will be directed to the payment page, where you can complete the transaction using a variety of payment methods. Payments are securely processed, and you will receive a confirmation email once
                                your payment is successful.
                            </p>
                        </div>
                    </transition>
                </div>

                <!-- FAQ 5 -->
                <div class="accordion-item">
                    <div class="accordion-header bg-gray-800 shadow-lg rounded-lg p-4 mb-2 cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out" @click="toggle(5)">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-semibold">Can I change my bid once placed?</h3>
                            <i :class="isOpen(5) ? 'pi pi-minus' : 'pi pi-plus'" class="text-2xl text-gray-400"></i>
                        </div>
                    </div>
                    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                        <div v-if="active === 5" class="accordion-content bg-gray-800 p-6 border-l-4 border-blue-500 shadow-md rounded-b-lg transition-all duration-500 ease-in-out">
                            <p>Yes, you can modify your bid during the auction until the auction ends. Simply place a higher bid, and your previous bid will automatically be replaced. Make sure you are confident before placing a new bid.</p>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-gray-900 text-white py-12 mt-24">
        <div class="container mx-auto px-4">
            <!-- Footer Top Section -->
            <div class="grid md:grid-cols-3 gap-12 mb-12">
                <!-- About Section -->
                <div>
                    <h3 class="text-2xl font-semibold mb-4">About Us</h3>
                    <p class="text-gray-400">We are a leading provider of online bidding software, offering a seamless and transparent experience for bidders and sellers. Join our platform today for an exciting auction experience!</p>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="text-2xl font-semibold mb-4">Quick Links</h3>
                    <ul class="space-y-4 text-gray-400">
                        <li><a href="#home" class="hover:text-blue-400">Home</a></li>
                        <li><a href="#pricing" class="hover:text-blue-400">Pricing</a></li>
                        <li><a href="#faq" class="hover:text-blue-400">FAQs</a></li>
                        <li><a href="#contact" class="hover:text-blue-400">Contact</a></li>
                    </ul>
                </div>

                <!-- Contact Section -->
                <div>
                    <h3 class="text-2xl font-semibold mb-4">Contact Us</h3>
                    <p class="text-gray-400 mb-4"><i class="pi pi-map-marker text-xl text-blue-400 mr-2"></i> 1234 Auction St., Auction City, AC 5678</p>
                    <p class="text-gray-400 mb-4"><i class="pi pi-phone text-xl text-blue-400 mr-2"></i> +1 234 567 890</p>
                    <p class="text-gray-400 mb-4"><i class="pi pi-envelope text-xl text-blue-400 mr-2"></i> support@biddingplatform.com</p>
                </div>
            </div>

            <!-- Footer Bottom Section -->
            <div class="border-t border-gray-700 pt-8">
                <div class="flex justify-between items-center">
                    <div class="text-gray-400">
                        <p>&copy; 2024 BiddingPlatform. All rights reserved.</p>
                    </div>

                    <!-- Social Media Links -->
                    <div class="flex space-x-6">
                        <a href="https://facebook.com" target="_blank" class="text-gray-400 hover:text-blue-500 transition duration-300">
                            <i class="pi pi-facebook text-2xl"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" class="text-gray-400 hover:text-blue-500 transition duration-300">
                            <i class="pi pi-twitter text-2xl"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" class="text-gray-400 hover:text-blue-500 transition duration-300">
                            <i class="pi pi-linkedin text-2xl"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" class="text-gray-400 hover:text-blue-500 transition duration-300">
                            <i class="pi pi-instagram text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import HomeSection from '../components/HomeSection.vue';
import NavBar from '../components/NavBar.vue';
const active = ref(null);

// Toggle the active state for the accordion items
const toggle = (index) => {
    if (active.value === index) {
        active.value = null;
    } else {
        active.value = index;
    }
};

// Check if the accordion item is open
const isOpen = (index) => active.value === index;

// Before entering the transition, ensure smooth animation
const beforeEnter = (el) => {
    el.style.maxHeight = '0';
};

// During the transition, smoothly expand the content
const enter = (el) => {
    el.offsetHeight; // Trigger reflow
    el.style.transition = 'max-height 0.5s ease-in-out';
    el.style.maxHeight = el.scrollHeight + 'px';
};

// On leave, collapse the content
const leave = (el) => {
    el.style.transition = 'max-height 0.3s ease-in-out';
    el.style.maxHeight = '0';
};
const targetNumbers = {
    created: 2288587,
    closed: 2178093,
    users: 12433525,
    servers: 48723
};

const currentCount = ref({
    created: 0,
    closed: 0,
    users: 0,
    servers: 0
});

const formattedCount = computed(() => ({
    created: currentCount.value.created.toLocaleString(),
    closed: currentCount.value.closed.toLocaleString(),
    users: currentCount.value.users.toLocaleString(),
    servers: currentCount.value.servers.toLocaleString()
}));

const animateNumber = (key, target) => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        currentCount.value[key] = Math.floor(current);
    }, duration / steps);
};

onMounted(() => {
    Object.entries(targetNumbers).forEach(([key, value]) => {
        animateNumber(key, value);
    });
});
const AUTH_URL = import.meta.env.VITE_APP_REDIRECT_URL;
const login = () => {
    console.log('Logging in with Discord...');
    window.location.href = AUTH_URL;
};
</script>

<style scoped>
/* Transition effect for smooth accordion expansion */
.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
}
</style>
