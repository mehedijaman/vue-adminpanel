<script setup>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';
</script>
<template>
    <Header></Header>
    <Sidebar></Sidebar>
    <slot></slot>
    <Footer></Footer>
</template>