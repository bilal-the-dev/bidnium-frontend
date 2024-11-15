<template>
    <nav class="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center justify-start p-4">
            <img src="/images/png/logo.png" alt="Company Logo" className="h-20 w-auto object-contain hover:opacity-90 transition-opacity" />
        </div>
        <div class="flex items-center gap-6">
            <router-link to="/" class="text-gray-300 hover:text-white transition">Home</router-link>
            <router-link to="/about" class="text-gray-300 hover:text-white transition">About</router-link>
            <router-link to="/contact" class="text-gray-300 hover:text-white transition">Contact</router-link>
            <router-link to="/pricing" class="flex items-center text-yellow-400 hover:text-yellow-300 transition">
                <span class="mr-1">✨</span>
                Pricing
            </router-link>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition" @click="login">Login</button>
        </div>
    </nav>
</template>
<script setup></script>
