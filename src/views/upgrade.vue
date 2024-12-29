<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="header">
        <i class="bi bi-arrow-left back-icon" @click="backto()"></i>
      </div>

      <div class="image-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/e11e/0004/869ad87ae0a10f5728cbb69d7c6e403b?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QP3PvbZNhCOhVJOsuQatrHi3E1iZbobXSWMdzwBgXoVZMk0tI1yrd~SvIdjXJrS7g2ur~Ys~EWXqikVfrSPcde3Ku7HqVUl9G-BDSsNgi9MR7Rsxf6UXE1jOE7T5xYb5nbrHBgogjAd6w1PVO9LPkGwdY3LxBLue1zKUWRDnwq4QSJPHykBb3aGGjHiYsy0-32zxCbyXFu7RzMIcnk1pWYqyHmnDEhGEYVlHsjIthWrl2Vf3g3CSeH0RA6W1W1e9cTOwnysjmFmNU7vOdaZ0dnVxIZzrfy696UGB2POxk-Tg8rPxR6KrACtt0-9EDZ660QzGvXi0PRymevETURs0wQ__"
          alt="User with plan setup"
          class="hero-image"
        />
      </div>
      <div class="wrapper">
        <div class="text">
          <h1>Your personal plan is ready</h1>
          <p>
            Upgrade your account and get full access to jumpstart your practice.
          </p>
        </div>

        <div class="plan-container p-2">
          <div class="plan">
            <input type="radio" id="monthly" name="plan" class="radio" />
            <label for="monthly" class="plan-label">
              <div class="plan-details">
                <p class="plan-title">1 Month Plan</p>
                <p class="plan-desc">Billed monthly. Cancel anytime.</p>
              </div>
              <p class="plan-price">for only <b>$12</b>/month</p>
            </label>
          </div>

          <div class="plan best-value">
            <input type="radio" id="yearly" name="plan" class="radio" checked />
            <label for="yearly" class="plan-label">
              <div class="badge">BEST VALUE</div>
              <div class="plan-details">
                <p class="plan-title">1 Year Plan</p>
                <p class="plan-desc">Billed yearly. Cancel anytime.</p>
              </div>
              <p class="plan-price">for only <b>$8</b>/month</p>
            </label>
          </div>
        </div>

        <div class="button-container">
          <button class="btn upgrade-button">Upgrade</button>
        </div>

        <p class="terms">
          By continuing you agree to the <a href="#">Terms & Conditions</a>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'PersonalPlanScreen',
  components: {
    IonPage,
    IonContent,
  },
  methods: {
    backto() {
      this.$router.push('feedback');
    },
  },
});
</script>

<style scoped>
.header {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 10;
}

.back-icon {
  font-size: 24px;
  color: #000;
  cursor: pointer;
}

.image-container {
  position: relative;
  width: 100vw;
  margin-top: -50px;
}

.wrapper {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 20px 20px 0 0;
  padding: 3px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 412px;
  width: 100%;
  z-index: 10;
}

.hero-image {
  width: 100%;
  max-width: 450px;
}

.text {
  text-align: center;
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

.button-container {
  display: flex;
  justify-content: center;
  margin: 16px;
}

.upgrade-button {
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

.upgrade-button:hover {
  background-color: #762ac3;
}

.terms {
  text-align: center;
  font-size: 12px;
  color: #666;
  margin-top: 16px;
}

.terms a {
  color: #8a47eb;
  text-decoration: none;
}

.plan-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
  margin: 0 auto;
}

.plan {
  display: flex;
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 50px;
  padding: 16px;
  position: relative;
  background-color: #f8f8f8;
  cursor: pointer;
}

.plan.best-value {
  border-color: #8a47eb;
  background-color: rgba(138, 71, 235, 0.1);
}

.radio {
  margin-right: 16px;
  cursor: pointer;
}

.plan-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  cursor: pointer;
}

.plan-details {
  flex: 1;
}

.plan-title {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.plan-desc {
  font-size: 14px;
  color: #666;
  margin: 4px 0 0 0;
}

.plan-price {
  font-size: 20px;
  font-weight: bold;
  color: #000;
}

.badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 8px;
}
</style>
