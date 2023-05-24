<template>
    <register :menu_items=menu_data v-if="current_option.state == 'register'"></register>
    <inicio :menu_items=menu_data v-if="current_option.state == 'inicio'"></inicio>
    <logIn :menu_items=menu_data v-if="current_option.state == 'login'"></logIn>
    <mensajes :menu_items=menu_data v-if="current_option.state == 'mensajes'"></mensajes>
    <post :menu_items=menu_data v-if="current_option.state == 'post'"></post>
    <stories :menu_items=menu_data v-if="current_option.state == 'stories'"></stories>
</template>


<script setup>

import { reactive } from 'vue'

import inicio from "./inicio.vue"
import logIn from "./logIn.vue"
import post from "./post.vue"
import mensajes from "./mensajes.vue"
import stories from "./stories.vue"

let current_option = reactive({ state: "login" })


let menu_data = {
  "register": handle_menu_change,
  "login": handle_menu_change,
  "inicio": handle_menu_change,
  "mensajes": handle_menu_change,
  "post": handle_menu_change,
  "stories": handle_menu_change
}


function handle_menu_change(target) {
current_option.state = 'none'
setTimeout(() => current_option.state = target, 100)
}

</script>