<template>
  <ion-page>
    <ion-content :fullscreen="true" class="content">
      <!-- Back and Skip buttons -->
      <div class="header mx-3">
        <i class="bi bi-arrow-left back-icon text-black" @click="backto()"></i>
        <p class="skip mt-4" @click="skip">Skip</p>
      </div>

      <!-- Title -->
      <div class="text mx-4">
        <h1>Do you want to turn on notifications?</h1>
      </div>

      <!-- Notification Preview -->
      <div class="notification-preview mt-4">
        <div class="notification-box mt-4">
          <div class="notification-circle"></div>
          <div class="notification-content">
            <p class="notification-title">Notification Title</p>
            <p class="notification-text">
              Notification text would be placed right here. This is where
              notification text would be placed.
            </p>
          </div>
          <p class="notification-time">now</p>
        </div>
      </div>

      <!-- Notification Options -->
      <div class="options mt-4 p-4">
        <div class="option">
          <span class="checkmark">✔</span> New daily meal reminders
        </div>
        <hr />
        <div class="option">
          <span class="checkmark">✔</span> Motivational messages
        </div>
        <hr />
        <div class="option">
          <span class="checkmark">✔</span> Personalized guideline
        </div>
        <hr />
      </div>

      <!-- Enable Button -->
      <div class="button-container p-3">
        <button class="btn enable-button">Enable</button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'NotificationScreen',
  components: {
    IonPage,
    IonContent,
  },
  methods: {
    backto() {
      this.$router.push('step-2');
    },
    skip() {
      this.$router.push('feedback');
    },
  },
});
</script>

<style scoped>
/* General Layout */
.content {
  background-color: #f7f4fc;
  padding: 20px;
}

/* Header Section */
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
.skip {
  color: #8a47eb;
  cursor: pointer;
}

/* Title */
.text {
  text-align: left;
  margin-top: 20px;
  color: #8a47eb;
}
.text h1 {
  font-size: 24px;
  font-weight: bold;
}

/* Notification Preview */
.notification-preview {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.notification-box {
  background-color: white;
  border-radius: 10px;
  width: 90%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.notification-circle {
  width: 20px;
  height: 20px;
  background-color: #8a47eb;
  border-radius: 50%;
  margin-right: 15px;
}
.notification-content {
  flex: 1;
}
.notification-title {
  font-weight: bold;
  font-size: 16px;
}
.notification-text {
  font-size: 14px;
  color: #666;
}
.notification-time {
  font-size: 12px;
  color: #aaa;
  position: absolute;
  right: 10px;
  top: 10px;
}

/* Notification Options */
.options {
  margin: 20px 0;
}
.option {
  font-size: 16px;
  color: #8a47eb;
  display: flex;
  align-items: center;
}
.checkmark {
  margin-right: 10px;
}

/* Enable Button */
.enable-button {
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
</style>
