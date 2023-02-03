<template>
  <Header />
  <main>
      <img src="./assets/img/bg-lawNotationHome.jpg" alt="" class="intro-img" />
    <section class="Introduction-container">
      <div class="intro-text">
        <p class="text_bottom">
          The LAWNOTATION project (2022 – 2024) aims to develop an
          infrastructure that allows researchers to making legal data and
          annotation schemes (current and future) accessible for annotation and
          analysis purposes, to develop an annotation platform for analyzing the
          linguistic and legal characteristics of legal documents, and to build
          a user-friendly interface.
        </p>
      </div>
      <div class="intro-text">
        <p class="text_right">
          A team of developers work closely with researchers on the improved
          access to legal materials. The platform is open source and free of use
          for researchers.
        </p>
      </div>
      <div class="intro-text">
        <p>
          LAWNOTATION is an initiative of the Digital Legal Studies cluster in
          the Sectorplan Social Sciences and Humanities (SSH) -
          Rechtsgeleerdheid and other Dutch universities that are
          collaboratively working on questions related to the digitalisation of
          law. The research is made possible by the Platform Digitale
          Infrastructuur SSH
        </p>
      </div>
    </section>
    <DataSoftware />
    <Team />
    <Contributors />
      </main>
      <footer>
       <h2>Interested in joining the development or in using the platform?</h2>
       <p>Send an email to: <span><a href = "mailto: law-techlab@maastrichtuniversity.nl">law-techlab@maastrichtuniversity.nl</a></span></p>
      </footer>
</template>
<script setup>
import Contributors from "./components/Contributors.vue";
import Team from "./components/team.vue";
import DataSoftware from "./components/DataSoftware.vue";
import Header from "./components/Header.vue";
</script>
