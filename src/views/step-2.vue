<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- Step indicators -->
      <div class="header">
        <div class="numbers mx-3">
          <div><p>1</p></div>
          <div><p>2</p></div>
          <div><p>3</p></div>
          <div><p class="active-step">4</p></div>
        </div>

        <!-- Skip button -->
        <p class="skip mt-4">Skip</p>
      </div>
      <!-- Title and description -->
      <div class="text">
        <h1>Do you follow any of these diets?</h1>
        <p class="mt-4">
          To offer you the best tailored diet experience we need to know more
          information about you.
        </p>
      </div>

      <!-- Diet options -->
      <div class="ingredients-container my-5">
        <button class="ingredient">None</button>
        <button class="ingredient">Vegan</button>
        <button class="ingredient selected">Paleo</button>
        <button class="ingredient">Dukan</button>
        <button class="ingredient">Vegetarian</button>
        <button class="ingredient">Atkins</button>
        <button class="ingredient fasting">Intermittent Fasting</button>
      </div>

      <!-- Navigation buttons -->
      <div class="navigation">
        <button class="btn previous" @click="backto()">Previous</button>
        <button class="btn next" @click="next()">Next</button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'DietScreen',
  components: {
    IonPage,
    IonContent,
  },
  methods: {
    backto() {
      this.$router.push('step-1');
    },
    next() {
      this.$router.push('notification');
    },
  },
});
</script>
<style scoped>
/* Step indicator styles */
.numbers {
  display: flex;
  justify-content: left;
  gap: 10px;
  margin-top: 20px;
}
.numbers p {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #8a47eb;
  color: black;
}
.active-step {
  background-color: #8a47eb;
  color: white;
}

/* Skip button */
.skip {
  text-align: right;
  margin-right: 20px;
  color: #1f73f1;
  cursor: pointer;
}

/* Title and description */
.text {
  text-align: left;
  margin: 30px 20px 20px;
}
.text h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
.text p {
  font-size: 16px;
  color: #666;
}

/* Allergy options */
.ingredients-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: left;
  margin: 20px;
}
.ingredient {
  width: 100px;
  height: 40px;
  border: 2px solid #ccc;
  border-radius: 20px;
  text-align: center;
  line-height: 36px;
  background-color: white;
  color: black;
  cursor: pointer;
}
.fasting {
  width: 170px;
}
.ingredient.selected {
  background-color: #8a47eb;
  color: white;
  border-color: #8a47eb;
}

/* Navigation buttons */
.navigation {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  margin-top: 250px;
}
.btn {
  width: 130px;
  height: 50px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 12px 32px;
  border-radius: 10px;
}
.previous {
  background-color: #e0e0e0;
  color: black;
}
.next {
  background-color: #8a47eb;
  color: white;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
