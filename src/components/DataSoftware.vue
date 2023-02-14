<template>
  <section class="Data_section" id="data&software" ref="scrollRef">
    <!-- <a name="data&software"></a> -->
    <span class="data-title">
      <h1>Data & Software</h1>
    </span>
    <div class="Data_container">
      <div class="datasets_annotation">
        <div class="Datasets_contaier">
          <h3>Datasets:</h3>
          <h5>Case Law:</h5>

          <ul>
            <li><a href="https://pypi.org/project/cellar-extractor/">CJEU extractor</a></li>

            <p class="Description">
              Extracts case law of the Court of Justice of the European Union
              (CJEU). Data source: CELLAR / EUR-Lex
            </p>

            <li><a href="https://pypi.org/project/echr-extractor/">ECHR extracto</a></li>
            <p class="Description">
              Extracts case law of the European Court of Human Rights (ECHR)
            </p>
            <li><a href="https://pypi.org/project/rechtspraak-extractor/">Rechtspraak extractor</a></li>
            <p class="Description">
              Extracts case law of the Netherlands (Rechtspraak)
            </p>
          </ul>
        </div>
        <!-- //end of the Datastets container -->
        <div class="Anotation_container">
          <h3>Annotation:</h3>
          <p class="Description">Not available yet</p>
        </div>
      </div>
      <div class="processing_storage">
        <div class="processing-container">
          <h3>Pre-Processing:</h3>
          <ul>
            <li><a href="https://lawnotation-demo.vercel.app/">Article splitter (EU)</a></li>
            <p class="Description">
              Splits legislation of the European Commission into articles
            </p>
          </ul>
          <p class="Description">more pre-processing to follow</p>
        </div>
        <!-- //end of the processing container -->
        <div class="Storage_container">
          <h3>Storage:</h3>
          <p class="Description">Not available yet</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onScrollIntersect } from "../composables/onScrollIntersect";
import { ref, onMounted, onUnmounted, defineEmits } from "vue";

const observer = ref({});
const scrollRef = ref({});

const emit = defineEmits(["data"]);

function onEnter(entry) {
  console.log("Entering", entry)
  emit('data');
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
