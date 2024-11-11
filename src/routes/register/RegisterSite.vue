<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const username = ref('')
const email = ref('')
const password1 = ref('')
const password2 = ref('')
const errorData = ref('')

const usernameValidPattern = /^[a-zA-Z0-9!@#$%]*$/
const emailValidPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordValidPattern = /^(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]*$/

function addErrorClass(target: HTMLInputElement, ifCorrect: boolean) {
  if (ifCorrect) {
    target.classList.remove('errorClass')
    target.classList.add('noterrorClass')
  } else {
    target.classList.add('errorClass')
    target.classList.remove('noterrorClass')
  }
}

const handleUsernameChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  username.value = target.value
  const isValid = usernameValidPattern.test(target.value) && target.value.length > 3
  addErrorClass(target, isValid)
}

const handleEmailChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  email.value = target.value
  const isValid = emailValidPattern.test(target.value) && target.value.length > 5
  addErrorClass(target, isValid)
}

const handlePassword1Change = (e: Event) => {
  const target = e.target as HTMLInputElement
  password1.value = target.value
  const isValid =
    passwordValidPattern.test(target.value) &&
    target.value.length > 7 &&
    (password2.value === target.value || password2.value === '')
  addErrorClass(target, isValid)
}

const handlePassword2Change = (e: Event) => {
  const target = e.target as HTMLInputElement
  password2.value = target.value
  const isValid =
    passwordValidPattern.test(target.value) &&
    target.value.length > 7 &&
    password1.value === target.value
  addErrorClass(target, isValid)
}

const handleSubmit = async (e: Event) => {
  e.preventDefault()

  // Walidacja formularza
  if (!usernameValidPattern.test(username.value) || username.value.length <= 3) {
    errorData.value = 'Invalid username. Must be more than 3 characters.'
    return
  }

  if (!emailValidPattern.test(email.value) || email.value.length <= 5) {
    errorData.value = 'Invalid email address.'
    return
  }

  if (!passwordValidPattern.test(password1.value) || password1.value.length <= 7) {
    errorData.value = 'Password must be more than 7 characters.'
    return
  }

  if (password1.value !== password2.value) {
    errorData.value = 'Passwords do not match.'
    return
  }

  axios
    .post(
      `${import.meta.env.VITE_BACKEND_ADDRESS}/users/register`,
      {
        username: username.value,
        password: password1.value,
        email: email.value
      }
    )
    .then((res) => {
      if (res.status == 200) {
        const jwt = res.data.user.JWT
        const userId = res.data.user.UserId

        if (jwt) {
          localStorage.setItem('jwt', jwt)
          localStorage.setItem('userId', userId)
          router.push('/app/friends')
        }
      }
    })
    .catch((err: any) => {
      errorData.value = err.response.data.error
      console.log(err)
    })
}
</script>

<template>
  <div class="body">
    <div class="wrapper">
      <form @submit="handleSubmit">
        <h1>Register</h1>
        <div class="input-box">
          <input
            type="text"
            placeholder="Username"
            v-model="username"
            @input="handleUsernameChange"
            required
          />
          <i class="bi bi-person"></i>
        </div>
        <div class="input-box">
          <input
            type="email"
            placeholder="Email"
            v-model="email"
            @input="handleEmailChange"
            required
          />
          <i class="bi bi-envelope"></i>
        </div>
        <div class="input-box">
          <input
            type="password"
            placeholder="Password"
            v-model="password1"
            @input="handlePassword1Change"
            required
          />
          <i class="bi bi-key"></i>
        </div>
        <div class="input-box">
          <input
            type="password"
            placeholder="Repeat password"
            v-model="password2"
            @input="handlePassword2Change"
            required
          />
          <i class="bi bi-key"></i>
        </div>
        <div class="errordata">
          <p>{{ errorData }}</p>
        </div>
        <button type="submit" class="btn">Register</button>
        <div class="register-link">
          <p>Have an account? <router-link to="/login">Login</router-link></p>
          <p>Don't wanna be here? <a href="/">Kill your self</a></p>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import './register.css';
</style>
