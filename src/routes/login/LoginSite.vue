<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

if (localStorage.getItem('userId')) {
  router.push('/app/friends')
}

// Reaktywne zmienne
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const errorData = ref('')

// Wzorce do walidacji
const emailValidPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordValidPattern = /^(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]*$/

// Funkcja do zarządzania klasami błędu
function addErrorClass(target: HTMLInputElement, ifCorrect: boolean) {
  if (ifCorrect) {
    target.classList.remove('errorClass')
    target.classList.add('noterrorClass')
  } else {
    target.classList.add('errorClass')
    target.classList.remove('noterrorClass')
  }
}

// Obsługa zmiany email
const handleEmailChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  email.value = target.value
  const isValid = emailValidPattern.test(target.value) && target.value.length > 5
  addErrorClass(target, isValid)
}

// Obsługa zmiany hasła
const handlePasswordChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  password.value = target.value
  const isValid = passwordValidPattern.test(target.value) && target.value.length > 7
  addErrorClass(target, isValid)
}

// Obsługa zmiany checkboxa "Remember Me"
const handleRememberMeChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  rememberMe.value = target.checked
}

// Obsługa przesłania formularza
const handleSubmit = async (e: Event) => {
  e.preventDefault()

  // Walidacja formularza

  if (!emailValidPattern.test(email.value) || email.value.length <= 5) {
    errorData.value = 'Invalid email address.'
    return
  }
  if (!passwordValidPattern.test(password.value)) {
    errorData.value = 'Password must have numbers and special charakter.'
    return
  }
  if (password.value.length <= 7) {
    errorData.value = 'Password must be more than 7 characters.'
    return
  }

  // Walidacja przeszła, wykonujemy rejestrację użytkownika

  axios
    .post(
      `${import.meta.env.VITE_BACKEND_ADDRESS}/users/login`,
      {
        email: email.value,
        password: password.value
      }
    )
    .then((res) => {
      if (res.status == 200) {
        const jwt = res.data['JWT']
        const userId = res.data['UserId']

        if (jwt) {
          localStorage.setItem('jwt', jwt)
          localStorage.setItem('userId', userId)
          router.push('/app/friends')
        }
      }
    })
    .catch((err) => {
      console.log(err)
      errorData.value = err.response.data.error
    })
}
</script>
<template>
  <div class="body">
    <div class="wrapper">
      <form @submit.prevent="handleSubmit">
        <h1>Login</h1>
        <div class="input-box">
          <input
            type="email"
            placeholder="Email"
            v-model="email"
            @input="handleEmailChange"
            required
          />
          <i class="bi bi-person"></i>
        </div>
        <div class="input-box">
          <input
            id="password"
            type="password"
            placeholder="Password"
            v-model="password"
            @input="handlePasswordChange"
            required
          />
          <i class="bi bi-key"></i>
        </div>

        <div class="remember-forgot">
          <label>
            <input type="checkbox" v-model="rememberMe" @change="handleRememberMeChange" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <div class="errordata">
          <p>{{ errorData }}</p>
        </div>
        <button type="submit" class="btn">Login</button>
        <div class="register-link">
          <p>
            Don't have an account?
            <router-link to="/register">Register</router-link>
          </p>
          <p>
            Don't wanna be here?
            <a href="/">Kill yourself</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import './login.css';
</style>
