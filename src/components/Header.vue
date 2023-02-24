<template>
  <header>
    <a href="#home" @click="activeTab = 'home'">
      <img src="../assets/icon/lawnotation_logo.svg" alt="" class="logo"
    /></a>
    <ul class="navItems">
      <li :class="{ active: isActive }">
        <a class="item" href="#home" @click="activeTab = 'home'">Home</a>
      </li>
      <li :class="{ active: Data }">
        <a class="item" href="#data&software" @click="activeTab = 'data'"
          >Data & software</a
        >
      </li>
      <li :class="{ active: team }">
        <a class="item" href="#team" @click="activeTab = 'team'">Team</a>
      </li>
      <li :class="{ active: contact }">
        <a class="item" href="#contactus" @click="activeTab = 'contact'"
          >Contact us</a
        >
      </li>
    </ul>
  </header>
</template>

<script setup>
import { ref, computed, defineProps, toRefs } from "vue";
const props = defineProps(["activeTab"]);
const { activeTab } = toRefs(props);
// const activeTab = ref("home");

const isActive = computed(() => {
  return activeTab.value === "home";
});
const Data = computed(() => {
  return activeTab.value === "data";
});
const team = computed(() => {
  return activeTab.value === "team";
});
const contact = computed(() => {
  return activeTab.value === "contact";
});
</script>
