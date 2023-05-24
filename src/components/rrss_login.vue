<template>
  <div v-for="rrss in Object.keys(selected_rrss)" v-show="rrss == current_rrss.state">
    <div class="login-rrss-main" :class="{ rrss: true }">
      <h1>Login to {{ rrss }}</h1>

      <form @submit.prevent="nextRRSS()">
        <div>
          <div class="sw-form">
            <label>Usuario : </label>
            <input type="text" placeholder="Usuario" name="username" required>
            <label>Contraseña : </label>
            <input type="password" placeholder="Contraseña" name="password" required>
          </div>
        </div>
        <div style="display: flex; justify-content: flex-end;">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  </div>
  <div id="instagram">
  </div>
  <div v-if="rrss in Object.keys(selected_rrss)" v-show="selected_rrss[rrss]">
    {{ rrss }}
  </div>
</template>


<script setup>

import { reactive } from 'vue'

const props = defineProps(['login_items', 'selRRSS'])

let selected_rrss = props.selRRSS;
let login_items = props.login_items;
let rrssDone = []

let current_rrss = reactive({ state: 'none' })
let exist_next = false;
console.log(current_rrss.state)

for (const item in selected_rrss) {
  if (selected_rrss[item]) {
    current_rrss.state = item;
    rrssDone.push(item)
    break;
  }
}

console.log(current_rrss.state)

function nextRRSS() {
  console.log("AA")
  current_rrss.state = "none"
  for (const item in selected_rrss) {
    console.log(item)
    if (selected_rrss[item] && !rrssDone.includes(item)) {
      current_rrss.state = item;
      console.log("de superputamadresocio", current_rrss.state)
      rrssDone.push(item)
      break;
    }
  }

  if (current_rrss.state == "none") {
    go_to_other_element(login_items['go_inicio'], 'go_inicio')
  }
}

function go_to_other_element(function_, value) {
  function_(String(value).toLowerCase())
}

</script>


<style scoped>
.login-rrss-main {
  display: flex;
  flex-direction: column;
  border: 1px solid darkgray;
  border-radius: 5px;

  padding: 25px;
  color: #3CC6A2;
  background-color: #303D43;
}
</style>