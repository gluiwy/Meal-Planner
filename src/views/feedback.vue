<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="header">
        <i
          class="bi bi-arrow-left back-icon text-black mx-3"
          @click="backto()"
        ></i>
        <p class="skip mt-4 mx-3" @click="skip">Skip</p>
      </div>

      <div class="text mt-3">
        <h1>How was your overall experience?</h1>
        <p class="mt-3">It will help us to serve you better.</p>
      </div>

      <div class="emoji-container">
        <span class="emoji">&#128544;</span>
        <span class="emoji">&#128542;</span>
        <span class="emoji">&#128578;</span>
        <span class="emoji">&#128522;</span>
        <span class="emoji">&#128525;</span>
      </div>

      <p class="subheading mt-4">What is wrong?</p>

      <div class="tag-container mt-4">
        <div class="tag">Application bugs</div>
        <div class="tag">Customer service</div>
        <div class="tag">Slow loading</div>
        <div class="tag">Bad navigation</div>
        <div class="tag">Weak functionality</div>
        <div class="tag selected">Other problems</div>
      </div>

      <div class="notes-container">
        <p class="notes-heading">Notes</p>
        <textarea
          class="notes-input"
          placeholder="How we can do better?"
        ></textarea>
      </div>

      <div class="button-container">
        <button class="btn submit-button">Submit Feedback</button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'FeedbackScreen',
  components: {
    IonPage,
    IonContent,
  },
  methods: {
    backto() {
      this.$router.push('notification');
    },
    skip() {
      this.$router.push('upgrade');
    },
  },
});
</script>

<style scoped>
.skip {
  text-align: right;
  margin-right: 20px;
  color: #1f73f1;
  cursor: pointer;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-icon {
  font-size: 20px;
  color: #8a47eb;
  cursor: pointer;
}

.text {
  text-align: left;
  margin: 16px;
}

.text h1 {
  font-size: 24px;
  font-weight: bold;
}

.text p {
  font-size: 16px;
  color: #666;
}

.emoji-container {
  display: flex;
  justify-content: space-around;
  margin: 16px 0;
}

.emoji {
  font-size: 24px;
  cursor: pointer;
}

.subheading {
  font-size: 18px;
  font-weight: bold;
  margin: 16px;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: left;
  margin: 16px;
}

.tag {
  padding: 8px 16px;
  border: 2px solid #000000;
  border-radius: 20px;
  background-color: transparent;
  color: #000000;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
}

.tag.selected {
  background-color: #8a47eb;
  border: 2px solid #8a47eb;
  color: #fff;
}

.notes-container {
  margin: 16px;
}

.notes-heading {
  font-size: 18px;
  font-weight: bold;
}

.notes-input {
  width: 100%;
  height: 100px;
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 10px;
  resize: none;
  font-size: 14px;
  color: #333;
}

.button-container {
  display: flex;
  justify-content: center;
  margin: 16px;
}

.submit-button {
  background-color: #8a47eb;
  color: white;
  width: 100%;
  height: 50px;
  font-size: 18px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 12px 32px;
  border-radius: 10px;
  margin-top: 10%;
}

.submit-button:hover {
  background-color: #762ac3;
}
</style>
