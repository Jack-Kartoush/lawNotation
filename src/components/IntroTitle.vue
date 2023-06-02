<template>
  <section id="home" class="Intro-Title-section" ref="scrollRef">
    <div class="catch-title">
      <h1>
        <span>Find,</span> <span>annotate</span> and <span>store</span> legal
        data
      </h1>
    </div>
    <div class="btn-container">
      <button class="start-btn">Start now</button>
      <button class="read-btn">Read more</button>
    </div>
  </section>
</template>
<script setup>
import { onScrollIntersect } from "../composables/onScrollIntersect";
import { ref, onMounted, onUnmounted, defineEmits } from "vue";

const observer = ref({});
const scrollRef = ref({});

const emit = defineEmits(["home"]);

function onEnter(entry) {
  console.log("Entering", entry);
  emit("home");
}
// When the component is mounted, start observing
onMounted(() => {
  observer.value = onScrollIntersect(scrollRef.value, onEnter);
});

// When the component is removed, disconnect the observer (clean-up step)
onUnmounted(() => {
  observer.value.disconnect();
});
</script>
