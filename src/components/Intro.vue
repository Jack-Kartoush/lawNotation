<template>
  <div class="intro-img" id="home" ></div>
  <section class="Introduction-container" ref="scrollRef">
    <div class="intro-text">
      <p class="text_bottom">
        The LAWNOTATION project (2022 – 2024) aims to develop an infrastructure that
        allows researchers to making legal data and annotation schemes (current and
        future) accessible for annotation and analysis purposes, to develop an annotation
        platform for analyzing the linguistic and legal characteristics of legal
        documents, and to build a user-friendly interface.
      </p>
    </div>
    <div class="intro-text">
      <p class="text_right">
        A team of developers work closely with researchers on the improved access to legal
        materials. The platform is open source and free of use for researchers.
      </p>
    </div>
    <div class="intro-text">
      <p>
        LAWNOTATION is an initiative of the Digital Legal Studies cluster in the
        Sectorplan Social Sciences and Humanities (SSH) - Rechtsgeleerdheid and other
        Dutch universities that are collaboratively working on questions related to the
        digitalisation of law. The research is made possible by the Platform Digitale
        Infrastructuur SSH
      </p>
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