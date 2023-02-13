<template>
  <section id="contactus" ref="scrollRef">
    <h2>Interested in joining the development or in using the platform?</h2>
    <p>
      Send an email to:
      <span
        ><a href="mailto: law-techlab@maastrichtuniversity.nl"
          >law-techlab@maastrichtuniversity.nl</a
        ></span
      >
    </p>
    <!-- <a name="contactus"></a> -->
  </section>
</template>
<script setup>
import { onScrollIntersect } from "../composables/onScrollIntersect";
import { ref, onMounted, onUnmounted, defineEmits } from "vue";

const observer = ref({});
const scrollRef = ref({});

const emit = defineEmits(["contact"]);

function onEnter(entry) {
  console.log("Entering", entry);
  emit("contact");
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
