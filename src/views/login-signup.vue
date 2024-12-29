<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section class="container">
        <!-- Form Content at Bottom -->
        <div class="form-container">
          <form>
            <!-- Sign In Button -->
            <button type="submit" class="btn btn-primary w-100" @click="verify">
              Sign up with email
            </button>

            <!-- Divider -->
            <div class="divider">or use social sign up</div>

            <!-- Social Buttons -->
            <div class="social-buttons">
              <!-- Google Button -->
              <button type="button" class="btn btn-google w-100 my-2">
                <i class="fa fa-google mx-2"></i>Continue with Google
              </button>

              <!-- Facebook Button -->
              <button type="button" class="btn btn-facebook w-100 my-2">
                <i class="fa fa-facebook mx-2"></i>Continue with Facebook
              </button>

              <!-- Apple Button -->
              <button type="button" class="btn btn-apple w-100 my-2">
                <i class="fa fa-apple mx-2"></i>Continue with Apple
              </button>
            </div>

            <!-- Already have an account -->
            <p class="text-center mt-4">
              Already have account?
              <a @click="onboarding" class="sign-up-link">Log In</a>
            </p>
          </form>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginSignupScreen',
  methods: {
    onboarding() {
      this.$router.push('onboarding');
    },
    verify() {
      this.$router.push('verify');
    },
  },
});
</script>

<style scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.form-container {
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  color: white;
  box-sizing: border-box;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1),
      rgba(102, 16, 242) 85%
    ),
    url('https://ashevdo.com/wp-content/uploads/2019/04/joseph-gonzalez-176749-unsplash-e1554224514281.jpg?w=1024')
      no-repeat center top;
  background-size: 100vw;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

.btn-primary {
  background-color: #060606;
  border: none;
  border-radius: 10px;
  padding: 1.2rem;
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
}

.btn-google,
.btn-facebook,
.btn-apple {
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 1.2rem;
  font-weight: bold;
  font-size: 1rem;
  color: #060606;
}

.btn-google i {
  color: #ea4335;
}

.btn-facebook i {
  color: #1877f2;
}

.btn-apple i {
  color: #000000;
}

.divider {
  text-align: center;
  color: #ffffff;
  position: relative;
  font-size: 0.9rem;
}

.divider:before,
.divider:after {
  content: '';
  position: absolute;
  top: 50%;
  width: 30%;
  height: 1px;
  background: #ffffff;
}

.divider:before {
  left: 0;
}

.divider:after {
  right: 0;
}

.sign-up-link {
  color: #ffffff;
  text-decoration: underline;
}

@media (max-width: 450px) {
  .form-container {
    padding: 1.5rem;
  }
}
</style>
