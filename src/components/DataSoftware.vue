<template>
  <section class="Data_section">
    <div class="data-title">
      <h1>Data & Software</h1>
    </div>
    <div class="Data_container">
      <div class="datasets_annotation">
        <div class="Datasets_contaier">
          <h3>Datasets:</h3>
          <h5>Case Law:</h5>

          <ul>
            <li>
              <a href="https://pypi.org/project/cellar-extractor/"
                >CJEU extractor :</a
              >
              <p class="Description">
                Extracts case law of the Court of Justice of the European Union
                (CJEU). Data source: CELLAR / EUR-Lex
              </p>
            </li>

            <li>
              <a href="https://pypi.org/project/echr-extractor/"
                >ECHR extracto</a
              >
              <p class="Description">
                Extracts case law of the European Court of Human Rights (ECHR)
              </p>
            </li>
            <li>
              <a href="https://pypi.org/project/rechtspraak-extractor/"
                >Rechtspraak extractor</a
              >
              <p class="Description">
                Extracts case law of the Netherlands (Rechtspraak)
              </p>
            </li>
          </ul>
        </div>
        <!-- //end of the Datastets container -->
      </div>
      <div class="processing_storage">
        <div class="processing-container">
          <h3>Pre-Processing:</h3>
          <ul>
            <li>
              <a href="https://lawnotation-demo.vercel.app/"
                >Article splitter (EU)</a
              >
              <p class="Description">
                Splits legislation of the European Commission into articles
              </p>
              <p class="Description">more pre-processing to follow</p>
            </li>
            <li>
              <div class="Storage_container annotation_storge">
                <h3>Annotation & Storage :</h3>
                <p class="Description">Not available yet</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- //end of the processing container -->
      </div>
    </div>
  </section>
</template>

<script setup>
// import { onScrollIntersect } from "../composables/onScrollIntersect";
// import { ref, onMounted, onUnmounted, defineEmits } from "vue";

// const observer = ref({});
// const scrollRef = ref({});

// const emit = defineEmits(["data"]);

// function onEnter(entry) {
//   console.log("Entering", entry);
//   emit("data");
// }
// // When the component is mounted, start observing
// onMounted(() => {
//   observer.value = onScrollIntersect(scrollRef.value, onEnter);
// });

// // When the component is removed, disconnect the observer (clean-up step)
// onUnmounted(() => {
//   observer.value.disconnect();
// });
</script>
