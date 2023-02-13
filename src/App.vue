<template>
  <!-- <a id="home"></a> -->
  <Header :active-tab="activeTab"/>
  <main>
    <Intro @home="activeTab = 'home'"/>
    <DataSoftware @data="activeTab = 'data'"/>
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
import DataSoftware from "./components/DataSoftware.vue";
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Footer from "./components/Footer.vue";
import { onScrollIntersect } from "./composables/onScrollIntersect";

import { ref, onMounted, onUnmounted } from "vue";
const activeTab = ref("home");


// const observer = ref({});
// const scrollRef = ref({});
// // When the component is mounted, start observing
// onMounted(() => {
//   observer.value = onScrollIntersect(scrollRef.value);
// });

// // When the component is removed, disconnect the observer (clean-up step)
// onUnmounted(() => {
//   observer.value.disconnect();
// });
</script>
