<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- Images Section -->
      <div class="images-container mt-4">
        <div class="image-wrapper">
          <img
            class="image"
            src="https://s3-alpha-sig.figma.com/img/94df/f775/53607afb17f299f1fc8165c713cdfe75?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BJzg9Csz6fCIqCDuzv48Uc9CCCvgYgyW2SpktWvZwUhmbN6387iUT0pg9jdUxhkVqgMexcD-nrKzjGqHrjYHEyeALWc9~zqDJUtg120pU2-t4GQLbkO6V8b4vVajIFypa0LDxoQdMz7Sy2yLSacLhw7iXtpg6XjHpfcq9OVmmHLHjvJKZ~iqoWF7R8n1IoeK9s9aPFnswKf9bZkFQ8jW2ZNgvIWOPePxHz5fO7DuSvLgdsCpesCkDzRR5XkTTMRn9uW-AoXSN6wk7rYp~HC3dPAADCivHVxSbAaJ-nQt4PO3DMzNb8iXjhaRYnQA86-wTv9u~Tmvvh8qVZ5S~VrWXQ__"
            alt="Salad Image"
          />
        </div>
        <div class="image-wrapper">
          <img
            class="image-2"
            src="https://s3-alpha-sig.figma.com/img/e371/5185/8b356bf6720b528271b66f4040d77575?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YShjfLzWvwtQni~28tJUChWNAFMgpJ-PdNhJ5YiNHm-WjXYwMCyV90R7ZzQvOgypAn2UHA9XDRDIOyu37TlOPA-81vAglFfZvXJZRp~amKaXVHQnJPUICAL5yEaxFx2DyHWyBFO2OxgiUYiOTk3h8tFSuYGdKB4jNX7jq6o~KkQ6kBdlQPIvXEwjC4T3f1t-VUB2BF2QJ~EZAIQDdnKVEbtsxxKbX77SwOtm8iX8sIRMwVQkdXXo8JyP0oOKHZubiksbM9Zgq3D44~qQuiN26e~IvygzxPG9aDHhjrvhSrXZQg6SePvHs0dDWKUxdaDQXxWajXVY-yHnupjIo4Pbhw__"
            alt="Meal Image"
          />
        </div>
      </div>

      <!-- Text Section -->
      <div class="text-container">
        <h1>Enjoy your lunch time</h1>
        <p>
          Just relax and not overthink what to eat. This is in our side with our
          personalized meal plans just prepared and adapted to your needs.
        </p>
      </div>

      <!-- Button Section -->
      <div class="button-container">
        <button class="btn next" @click="next()">Next</button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'LunchTimeScreen',
  components: {
    IonPage,
    IonContent,
  },
  methods: {
    next() {
      this.$router.push('step-1');
    },
  },
});
</script>

<style scoped>
.images-container {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 16px;
}

.image-wrapper {
  flex: 1;
  max-width: 48%;
}

.image {
  width: 300%;
  max-width: 300px;
  height: 250px;
  border-radius: 20px;
  object-fit: cover;
  margin-left: -15%;
}
.image-2 {
  width: 100%;
  height: 250px;
  border-radius: 20px;
  object-fit: cover;
  margin-left: 50%;
}
.text-container {
  text-align: center;
  padding: 16px;
  margin-top: 50px;
}

.text-container h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
}

.text-container p {
  font-size: 16px;
  color: #666;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.btn.next {
  background-color: #8a47eb;
  color: #fff;
  font-size: 18px;
  border: none;
  padding: 12px 32px;
  border-radius: 10px;
  margin-top: 130px;
  margin-left: 60%;
}
</style>
