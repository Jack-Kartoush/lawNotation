<template>
  <section id="team" class="develpoer_team" ref="scrollRef">
    <!-- <a ></a> -->
    <span  class="team_title">
      <h1>Team</h1>
    </span>
    <div class="card">
      <div class="member-container">
        <div class="member-img">
          <img src="../assets/img/gijs.jpg" alt="" class="profile-photo" />
        </div>
        <div class="member-info">
          <h4>
            <a href="https://www.biss-institute.com/team/Gijs-van-Dijck/"
              >Prof. Gijs van Dijck
            </a>
          </h4>
          <p>Law, AI</p>
          <p>
            <a
              href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab/law-and-tech-research"
            >
              Maastricht Law and Tech Lab</a
            >
          </p>
          <p>
            <a href="https://www.biss-institute.com/"
              >Brightlands Institute for Smart Society</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="member-container">
        <div class="member-img">
          <img src="../assets/img/carlos.jpg" alt="" class="profile-photo" />
        </div>
        <div class="member-info">
          <h4>
            <a href="https://www.biss-institute.com/team/Carlos-Aguilera/"
              >Carlos Aguilera</a
            >
          </h4>
          <p>data engineering, front-end development, back-end development</p>
          <p>
            <a
              href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab/law-and-tech-research"
            >
              Maastricht Law and Tech Lab</a
            >
          </p>
          <p>
            <a href="https://www.biss-institute.com/"
              >Brightlands Institute for Smart Society</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="member-container">
        <div class="member-img">
          <img src="../assets/img/chris.jpg" alt="" class="profile-photo" />
        </div>
        <div class="member-info">
          <h4>
            <a href="https://www.biss-institute.com/team/chris-van-der-lans/"
              >Chris van der Lans</a
            >
          </h4>
          <p>
            front-end development, user experience (UX), information architecture,
            human-centric design
          </p>

          <p>
            <a href="https://www.biss-institute.com/"
              >Brightlands Institute for Smart Society</a
            >
          </p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="member-container">
        <div class="member-img">
          <img src="../assets/img/shashank.jpg" alt="" class="profile-photo" />
        </div>
        <div class="member-info">
          <h4>
            <a href="https://www.biss-institute.com/team/Shashank-Chakravarthy/"
              >Shashank Chakravarthy</a
            >
          </h4>
          <p>data engineering, NLP, machine learning, AI</p>
          <p>
            <a
              href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab/law-and-tech-research"
            >
              Maastricht Law and Tech Lab</a
            >
          </p>
          <p>
            <a href="https://www.biss-institute.com/"
              >Brightlands Institute for Smart Society</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="member-container">
        <div class="member-img">
          <img src="../assets/img/sander.jpg" alt="" class="profile-photo" />
        </div>
        <div class="member-info">
          <h4>
            <a href="https://www.biss-institute.com/team/sander-van-essel/"
              >Sander van Essel</a
            >
          </h4>
          <p>Frontend development, backend development, data engineering</p> <br>
         
          <p>
            <a href="https://www.biss-institute.com/"
              >Brightlands Institute for Smart Society</a
            >
          </p>
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

const emit = defineEmits(["team"]);

function onEnter(entry) {
  console.log("Entering", entry);
  emit("team");
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
