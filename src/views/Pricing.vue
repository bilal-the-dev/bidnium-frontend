<template>
    <NavBar />
    <div class="min-h-screen bg-gray-900 text-white py-20 px-4">
        <!-- Hero Section -->
        <div class="max-w-7xl mx-auto text-center mb-20">
            <h1 class="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 text-transparent bg-clip-text">Choose Your Bidding Power</h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">Select the perfect plan for your business needs. Scale your bidding capabilities as you grow.</p>
        </div>

        <!-- Pricing Cards -->
        <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
            <!-- Basic Plan -->
            <div>
                <div class="bg-gray-800 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <div class="flex items-center justify-center mb-4">
                        <Ticket class="w-12 h-12 text-blue-400" />
                    </div>
                    <h2 class="text-2xl font-bold text-center mb-2">Basic Plan</h2>
                    <div class="text-center mb-6">
                        <span class="text-4xl font-bold">$19</span>
                        <span class="text-gray-400">/month</span>
                    </div>
                    <div class="space-y-4">
                        <div v-for="(feature, index) in features.basic" :key="index" class="flex items-center">
                            <CheckCircle2 :class="['w-5 h-5 mr-3', feature.included ? 'text-blue-400' : 'text-gray-600']" />
                            <span :class="feature.included ? 'text-gray-300' : 'text-gray-600'">
                                {{ feature.name }}
                            </span>
                        </div>
                    </div>
                    <button class="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 mt-8 transition-colors duration-300">Get Started</button>
                </div>
            </div>

            <!-- Standard Plan -->
            <div>
                <div class="bg-gray-800 rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 relative">
                    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span class="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                    </div>
                    <div class="flex items-center justify-center mb-4">
                        <Clock class="w-12 h-12 text-yellow-400" />
                    </div>
                    <h2 class="text-2xl font-bold text-center mb-2">Standard Plan</h2>
                    <div class="text-center mb-6">
                        <span class="text-4xl font-bold">$49</span>
                        <span class="text-gray-400">/month</span>
                    </div>
                    <div class="space-y-4">
                        <div v-for="(feature, index) in features.standard" :key="index" class="flex items-center">
                            <CheckCircle2 :class="['w-5 h-5 mr-3', feature.included ? 'text-yellow-400' : 'text-gray-600']" />
                            <span :class="feature.included ? 'text-gray-300' : 'text-gray-600'">
                                {{ feature.name }}
                            </span>
                        </div>
                    </div>
                    <button class="w-full bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg py-3 mt-8 transition-colors duration-300">Get Started</button>
                </div>
            </div>

            <!-- Premium Plan -->
            <div>
                <div class="bg-gray-800 rounded-2xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                    <div class="flex items-center justify-center mb-4">
                        <Crown class="w-12 h-12 text-green-400" />
                    </div>
                    <h2 class="text-2xl font-bold text-center mb-2">Premium Plan</h2>
                    <div class="text-center mb-6">
                        <span class="text-4xl font-bold">$99</span>
                        <span class="text-gray-400">/month</span>
                    </div>
                    <div class="space-y-4">
                        <div v-for="(feature, index) in features.premium" :key="index" class="flex items-center">
                            <CheckCircle2 :class="['w-5 h-5 mr-3', feature.included ? 'text-green-400' : 'text-gray-600']" />
                            <span :class="feature.included ? 'text-gray-300' : 'text-gray-600'">
                                {{ feature.name }}
                            </span>
                        </div>
                    </div>
                    <button class="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 mt-8 transition-colors duration-300">Get Started</button>
                </div>
            </div>
        </div>

        <!-- FAQ Section -->
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div class="space-y-8">
                <div v-for="(faq, index) in faqs" :key="index" class="bg-gray-800 rounded-xl p-6">
                    <h3 class="text-xl font-semibold mb-3">{{ faq.question }}</h3>
                    <p class="text-gray-300">{{ faq.answer }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CheckCircle2, Clock, Crown, Ticket } from 'lucide-vue-next';
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';

// Features data
const features = {
    basic: [
        { name: '5 Active Bids', included: true },
        { name: 'Email Notifications', included: true },
        { name: 'Real-time Updates', included: true },
        { name: 'Basic Support', included: true },
        { name: 'Mobile App Access', included: true },
        { name: 'Bid History', included: true },
        { name: 'Basic Analytics', included: false },
        { name: 'Custom Alerts', included: false }
    ],
    standard: [
        { name: '15 Active Bids', included: true },
        { name: 'Real-time Notifications', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Custom Bid Alerts', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'API Access', included: true },
        { name: 'Team Management', included: true },
        { name: 'Custom Reports', included: false }
    ],
    premium: [
        { name: 'Unlimited Active Bids', included: true },
        { name: 'VIP Support', included: true },
        { name: 'Analytics Dashboard', included: true },
        { name: 'Custom Reporting', included: true },
        { name: 'White-label Solution', included: true },
        { name: 'Advanced API Access', included: true },
        { name: 'Priority Bidding', included: true },
        { name: 'Dedicated Account Manager', included: true }
    ]
};

// FAQ data
const faqs = ref([
    {
        question: 'Can I switch plans later?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and bank transfers for business accounts.'
    },
    {
        question: 'Is there a free trial available?',
        answer: 'Yes, we offer a 14-day free trial on all plans. No credit card required to start.'
    }
]);
</script>
