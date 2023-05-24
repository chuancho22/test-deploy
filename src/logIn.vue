<template>
  <div class="login_main">
    <!-- Implementación ventana Login to Social Wave -->
    <div id="login-sw-container" v-if="current_login.step == 'login_socialwave'">
      <div class="login-sw">
        <h1>Login to SocialWave</h1>
        <form @submit.prevent="parent_menu_change(menu_items['inicio'], 'inicio')">
          <div>
            <div class="sw-form">
              <label>Usuario : </label>
              <input id="user-input" type="text" placeholder="Introducir usuario" name="username" required>
              <label>Contraseña : </label>
              <input type="password" placeholder="Introducir contraseña" name="password" required>
              <span style="padding-top:1rem; font-size: 0.9rem"><a href="#"> Contraseña olvidada? </a></span>
            </div>
          </div>

          <div style="display:flex; justify-content: flex-end;">
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
      <div class="login-sw">
        <span style="margin-bottom: 10px; font-size: 1.2rem;">Crea tu cuenta en SocialWave!</span>
        <form>
          <button @click="login_menu_change('register_socialwave')">Register to
            SocialWave</button>
          </form>
      </div>
    </div>


    <register_socialwave :login_items=login_data :pre_username=pre_user v-if="current_login.step == 'register_socialwave'"></register_socialwave>
    <rrss_selector :login_items=login_data :setSelFunct=setSelectedRRSS v-if="current_login.step == 'rrss_selector'">
    </rrss_selector>
    <rrss_login :login_items=login_data :selRRSS=selected_rrss v-if="current_login.step == 'rrss_login'"></rrss_login>
  </div>
</template>

<script setup>

import register_socialwave from "./components/register_sw.vue"
import rrss_selector from "./components/rrss_selector.vue"
import rrss_login from "./components/rrss_login.vue"
import { reactive } from 'vue'

const props = defineProps(['menu_items'])

let menu_items = props.menu_items

function parent_menu_change(_function, value) {
  _function(String(value).toLowerCase())
}

let current_login = reactive({ step: "login_socialwave" })

let pre_user = ""

let login_data = {
  "login_socialwave": login_menu_change,
  "register_socialwave": login_menu_change,
  "rrss_selector": login_menu_change,
  "rrss_login": login_menu_change,
  "go_inicio": login_menu_change
}

let selected_rrss = {
  "facebook": false,
  "linkedin": false,
  "instagram": false,
  "twitter": false
}

function login_menu_change(target) {
  if(target == 'register_socialwave'){
    const input = document.getElementById('user-input');
    this.pre_user = input.value;
  }

  current_login.step = 'none'
  setTimeout(() => current_login.step = target, 100)
  
  if (target == 'go_inicio') {
    parent_menu_change(menu_items['inicio'], 'inicio')
  }
}

function setSelectedRRSS(rrss_selectors) {
  for (const item in rrss_selectors) {
    selected_rrss[item] = rrss_selectors[item]
  }
}
</script>



<style>
.login_main {
  flex: 1 1 auto;

  background-image: url("src/assets/background.png");
  background-repeat: repeat-x;
  background-size: cover;
  background-color: #ffffff;
  background-position: top;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
}


.login-sw {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid darkgray;
  border-radius: 5px;

  padding: 25px;
  margin: 10px;

  color: #3CC6A2;
  background-color: #303D43;
}

.h-buttons {
  display: flex;
  justify-content: space-between;
}

.sw-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 10px;
  margin-bottom: 20px;

  font-size: 1.3rem;
}

a {
  color: white;
}

a:hover {
  color: cyan;
  background-color: transparent;
}

label {
  padding-top: 7px;
}

.sw-form input {
  background-color: #dbedf7;
  width: 100%;
  height: 2rem;
}

form button {
  background-color: darkslategray;
}

#app {
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}
</style>


