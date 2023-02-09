<template>
  <header>
    <a href="#home" @click="activeTab = 'home'">
      <img src="./icon/lawnotation logo.svg" alt="" class="logo"
    /></a>
    <nav>
      <ul class="navItems">
        <div class="mainNav">
          <li :class="{ active: isActive }">
            <a href="#home" @click="activeTab = 'home'">Home</a>
          </li>
          <li :class="{ active: Data }">
            <a href="#data&software" @click="activeTab = 'data'"
              >Data & software</a
            >
          </li>
          <li :class="{ active: team }">
            <a href="#team" @click="activeTab = 'team'">Team</a>
          </li>
        </div>
        <li :class="{ active: contact }"><a href="#contactus" @click="activeTab = 'contact'">Contact us</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";

const activeTab = ref("home");

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
