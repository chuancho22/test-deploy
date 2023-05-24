<template>
  <div style="padding:5px;">
    <v-card class="mx-auto temp" color="#12171D" max-width="400" style="color:white">
      <div class="container">
        <div class="row">

          <div class="col">
            <v-card-title>

              <v-icon to="/home" title="Ir a Twitter" @mouseover="react_var.upHere = true"
                @mouseleave="react_var.upHere = false" v-if="publicaciones.type === 1" large left
                aria-label="Icono Twitter" alt="Icono de Twitter" role="img" aria-hidden="false">

                <a :href="publicaciones.publicationlink">
                  <img src="../assets/rrss_icons/twitter.png" style="width: 30px; height: 30px;">
                </a>

              </v-icon>

              <v-icon title="Ir a Instagram" v-else-if="publicaciones.type === 2" large left aria-label="Icono Instagram"
                alt="Icono de Instagram" role="img" aria-hidden="false">
                <a :href="publicaciones.publicationlink">
                  <img src="../assets/rrss_icons/instagram.png" style="width: 30px; height: 30px;">
                </a>
              </v-icon>

              <v-icon title="Ir a Facebook" v-else-if="publicaciones.type === 3" large left aria-label="Icono Facebook"
                alt="Icono de Facebook" role="img" aria-hidden="false">
                <a :href="publicaciones.publicationlink">
                  <img src="../assets/rrss_icons/facebook.png" style="width: 30px; height: 30px;">
                </a>
              </v-icon>

              <v-icon title="Ir a TikTok" v-else-if="publicaciones.type === 4" large left aria-label="Icono TikTok"
                alt="Icono de TikTok" role="img" aria-hidden="false">
                <a :href="publicaciones.publicationlink">
                  <img src="../assets/rrss_icons/tiktok.png" style="width: 30px; height: 30px;">
                </a>
              </v-icon>

              <v-icon title="Se ha subido a todas las redes sociales" v-else-if="publicaciones.type === 5" large left aria-label="Se ha subido a todas las redes sociales"
                alt="Se ha subido a todas las redes sociales" role="img" aria-hidden="false">
                <a :href="publicaciones.publicationlink">
                  <img src="../assets/sw_icons/Recurso_38.png" style="min-width: 30px; max-width: 40px; margin-right: 10px; top: -5px;">
                </a>
              </v-icon>



              <span v-if="publicaciones.type === 1" class="text-h6 font-weight-light"> Twitter</span>
              <span v-else-if="publicaciones.type === 2" class="text-h6 font-weight-light"> Instagram</span>
              <span v-else-if="publicaciones.type === 3" class="text-h6 font-weight-light"> Facebook</span>
              <span v-else-if="publicaciones.type === 4" class="text-h6 font-weight-light"> TikTok</span>
              <span v-else-if="publicaciones.type === 5" class="text-h6 font-weight-light"> Más de una red social</span>
            </v-card-title>
          </div>
          <div class="col">
            <p style="text-align:right; color:lightgray">{{ publicaciones.time }}</p>
          </div>
        </div>
      </div>

      <p v-if="(publicaciones.type != 2)" class="text-h6"
        style="padding:5px;padding-left: 10px ;font-size: 10ms;margin-bottom: 0px;">{{ publicaciones.msg }}</p>
      <v-card-text class="text-h6" style="font-size: 10ms;padding: 10px;">

        <v-img v-if=publicaciones.photourl class="elevation-6" alt=publicaciones.alt :src=publicaciones.photourl
          style="padding :5px" aria-label=publicaciones.alt role="img" aria-hidden="false"></v-img>

        <div v-if="(publicaciones.type === 4)" class="videowrapper" aria-label=publicaciones.alt alt=publicaciones.alt
          role="video" aria-hidden="false">
          <iframe :src=video_link title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
            allowfullscreen></iframe>
        </div>


      </v-card-text>

      <p v-if="(publicaciones.type === 2)" class="text-h6" style="padding:5px;font-size: 10ms; padding-left: 10px ;">{{
        publicaciones.msg }}</p>

      <v-card-actions style="padding:0px">


        <div class="container" style="padding:0px align:center align-items: center;">
          <div class="row">
            <div class="col-sm-3">

              <a :href="publicaciones.userlink" title="Ir a la cuenta del usuario">
                <v-list-item-avatar color="grey darken-3">
                  <v-img cover style="max-width: 71px; max-height: 71px;" class="elevation-6 rounded-circle"
                    aria-label=publicaciones.icon_alt alt=publicaciones.icon_alt role="img" aria-hidden="false"
                    :src=publicaciones.iconurl></v-img>
                </v-list-item-avatar>
              </a>

            </div>
            <div class="col-sm-9" style="align-items: center;">
              <div class="row" style="align-items: center;align-items: center;
    justify-content: center;">
                <div class="col-sm-6">
                  {{ publicaciones.username }}
                </div>

                <div class="col-2"
                  style="display:flex; flex-direction:column ;align-items: center;justify-content: center;">
                  <v-icon class="mr-1">
                    <a>
                      <v-btn @click="react_var.show_like = !react_var.show_like" icon>
                        <img v-if="react_var.show_like" src="../assets/sw_icons/Recurso_29.png" title="Like"
                          alt="Boton de Like" style="max-height: 25px;">
                        <img v-else src="../assets/sw_icons/Recurso_30.png" title="Deshacer like" alt="Boton de Disike"
                          style="max-height: 25px;">
                      </v-btn>
                    </a>
                  </v-icon>
                  <span v-if="react_var.show_like" class="subheading mr-2">{{ publicaciones.numLikes }}</span>
                  <span v-else class="subheading mr-2">{{ publicaciones.numLikes + 1 }}</span>
                </div>

                <div v-if="(publicaciones.type === 1 && publicaciones.numretweets)" class="col-2"
                  style="display:flex; flex-direction:column;align-items: center;justify-content: center;">
                  <v-icon class="mr-1">
                    <a>
                      <v-btn @click="react_var.show_retweet = !react_var.show_retweet" icon>
                        <img v-if="react_var.show_retweet" src="../assets/sw_icons/Recurso_31.png" title="Hacer Retweet"
                          alt="Retweet button" style="max-height: 25px;">
                        <img v-else src="../assets/sw_icons/Recurso_32.png" title="Deshacer Retweet"
                          alt="Retweet button <dado>" style="max-height: 25px;">
                      </v-btn>
                    </a>
                  </v-icon>
                  <span v-if="react_var.show_retweet" class="subheading">{{ publicaciones.numretweets }}</span>
                  <span v-else class="subheading">{{ publicaciones.numretweets + 1 }}</span>
                </div>

                <div class="col-2"
                  style="display:flex; flex-direction:column;align-items: center;justify-content: center;">
                  <v-icon class="mr-1">
                    <a :href="publicaciones.publicationlink">
                      <v-btn @mousedown="mouseDown" icon>
                        <img v-if="mouseDown" src="../assets/sw_icons/Recurso_19.png" title="Ver comentarios"
                          alt="Ver comentarios" style="max-height: 25px;">
                        <img v-else src="../assets/sw_icons/Recurso_20.png" title="Ver comentarios" alt="Ver comentatios"
                          style="max-height: 25px;">
                      </v-btn>
                    </a>
                  </v-icon>
                  <span class="subheading">{{ publicaciones.numComments }}</span>
                </div>



              </div>

            </div>
          </div>
        </div>


      </v-card-actions>
    </v-card>
  </div>
</template>
  
  
<script setup>

import { reactive } from 'vue'

const props = defineProps(['publicaciones'])

const react_var = reactive({ upHere: false, show_like: true, show_retweet: true })

var publicaciones = props.publicaciones;
var video_link = publicaciones.msgvideo;
var photo_link = publicaciones.photourl
console.log(video_link)
console.log(publicaciones)

</script>
  
  
<style scoped>
.temp {
  min-height: 0vh !important;
  min-height: 0dvh !important;
  padding: 10px !important;
}

.videowrapper {
  float: none;
  clear: both;
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
}

.videowrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

a:hover {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
</style>
  
  
  
