<template>
  <div class="main prevent-select">
    <h1>¿Que redes sociales querras usar?</h1>
    <p>Selecciona las redes sociales que quieras usar <br>y continua para configurar cada una de ellas.</p>
    <div class="rss_selector_main">
      <div class="rss_chooser">

        <div class="whole_rss_option" v-for="rrss in Object.keys(rrss_selectors)">
          <button class="rrss_selector_item" @click="select_rrss(rrss)" :class="{ selected: rrss_selectors[rrss] }">
            <div class="rss_option">
              <img :src="'/src/assets/rrss_icons/' + rrss + '.png'"> <span>{{ rrss }}</span>
            </div>
          </button>
        </div>

        <button @click="go_to_other_element(login_items['rrss_login'], 'rrss_login')" class="prevent-select goTo_button"
          :class="{ unactive: !any_rrss_selected }">
          Continua!!
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>

import { reactive } from 'vue'
const props = defineProps(['login_items', 'setSelFunct'])

let setSelFunct = props.setSelFunct;

let facebook_selected = false;
let instagram_selected = false;
let twitter_selected = false;
let tiktok_selected = false;

let any_rrss_selected = false;

let rrss_selectors = reactive({
  "facebook": facebook_selected,
  "instagram": instagram_selected,
  "twitter": twitter_selected,
  "tiktok": tiktok_selected
})


function go_to_other_element(function_, value) {
  console.log("On my way to do some magic")
  setSelFunct(this.rrss_selectors)
  function_(String(value).toLowerCase())
}


function select_rrss(rrss) {
  rrss_selectors[rrss] = !rrss_selectors[rrss]
  any_rrss_selected = false;

  for (const rrss_item in rrss_selectors) {
    if (rrss_selectors[rrss_item]) {
      any_rrss_selected = true;
    }
  }
}

</script>


<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding: 20px;

  border-radius: 20px;

  color: #3CC6A2;
  background-color: #303D43;
}

.rss_selector_main {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
}

.rss_chooser {
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  justify-content: center;
  min-height: 75px;
  align-items: center;
  flex-direction: column;
}

.rss_option {
  display: flex;
  align-items: center;
  font-size: 18px;
  text-transform: capitalize;
  width: 200px;

}

p {
  font-size: 19px;
}

img {
  width: 65px;
  padding: 10px;
}

button {
  color: white;
  background-color: transparent;
  border: 0;
  border-radius: 5px;
}

.selected {
  background-color: lightblue;
  border: 1 solid gray;
}

button:hover {
  background-color: lightblue;
  color: darkblue;
}

.goTo_button {
  margin-top: 20px;
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s, transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
}

.goTo_button:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.goTo_button:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.goTo_button:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}

.unactive {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.65;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
  box-shadow: none;
}

.rrss_selector_item {
  margin: 5px;
}
</style>
