<template>
  <!-- <a id="home"></a> -->
  <Header :active-tab="activeTab"/>
  <main>
    <IntroTitle @home="activeTab = 'home'"/>
    <Intro  @data="activeTab = 'data'"/>
    <!-- <DataSoftware @data="activeTab = 'data'"/> -->
    <Team @team="activeTab = 'team'" />
    <!-- <h2 id="test" ref="scrollRef">Test</h2> -->
    <Contributors />
  </main>
  <footer>
  <Footer @contact="activeTab = 'contact'"/>
  </footer>
</template>

<script setup>

import Contributors from "./components/Contributors.vue";
import Team from "./components/Team.vue";
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Footer from "./components/Footer.vue";
import IntroTitle from "./components/IntroTitle.vue";
import { onScrollIntersect } from "./composables/onScrollIntersect";

import { ref, onMounted, onUnmounted } from "vue";
const activeTab = ref("home");

</script>
