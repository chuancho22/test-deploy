<template>
  <div class="inicio-container">
    <div class="navegacion-superior">
      <v-btn @click="" style="background-color: transparent;">
        <img src="../src/assets/sw_icons/Recurso_37.png" title="Inicio" alt="Boton pagina de inicio"
          style="max-height: 25px; background-color: transparent;">
      </v-btn>
      <icon>

      </icon>
    </div>

    <div class="inicio-container-2">
      <div class="stories-container">
        <div v-for="story in listaStories">
            <Story :username=story.username :menu_items=props.menu_items />
        </div>
      </div>

      <div class="feed-container">
        <ul line-height="100%" style="min-width: 0; min-height: 0;list-style-type: none;  padding: 5px;  margin: 0;">
          <li v-for="publicacion in publicaciones2" style="padding : 5px;display:flexbox !important" v-show="checkPublicacionFiltro(publicacion)">
            <Publicacion 
            :publicaciones="publicacion"/>
          </li>
        </ul>
      </div>

      <div class="messagesProfile-container">
        <div class="profile-container">
          <div class="profile-button">
            <img src="/src/assets/profile_images/imgProfile_GustavoPin.png"
              style="cursor: pointer; width: 50px; height: 50px; border-radius: 50%; margin-right: 15px;">
            <span>Gustavo Pin</span>
            <img src="/src/assets/sw_icons/Recurso_12.png" style="cursor: pointer;
                                                                  width: 40px;
                                                                  height: 40px;
                                                                  border-radius: 30px;
                                                                  padding: 3px;
                                                                  margin-left: 10px;
                                                                  background-color: white;">
          </div>
          <div style="background-color: #2a8970; padding: 10px; border-radius: 30px;">
            <div class="filter-container">
              <div style="display: flex; align-items: center; flex-direction: column; color:white; user-select: none;">
                Busqueda
                <div class="busqueda-container">
                  <input class="busqueda" type="text" placeholder="Escribe para buscar" @input="onSearchInput"
                    style="padding-right: 20px; user-select:auto;">
                  <img src="./assets/sw_icons/Recurso_26.png" style="width: 30px; height: 30px; user-select: none;">
                </div>
              </div>

              <div style="display: flex; align-items: center; flex-direction: column; color:white; user-select: none;">
                Filtro
                <div class="filtro">
                  <button class="filtro-button" :class="{ active: !rrss_filter.facebook }"
                    @click="toggleButton('facebook')">
                    <img src="./assets/rrss_icons/facebook.png">
                  </button>
                  <button class="filtro-button" :class="{ active: !rrss_filter.instagram }"
                    @click="toggleButton('instagram')">
                    <img src="./assets/rrss_icons/instagram.png">
                  </button>
                  <button class="filtro-button" :class="{ active: !rrss_filter.twitter }" @click="toggleButton('twitter')">
                    <img src="./assets/rrss_icons/twitter.png">
                  </button>
                  <button class="filtro-button" :class="{ active: !rrss_filter.tiktok }" @click="toggleButton('tiktok')">
                    <img src="./assets/rrss_icons/tiktok.png">
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="messages-container">
          <div class="messages-post">
            <div class="message">
              <v-btn @click="hook_of_other_element(menu_items['mensajes'], 'mensajes')"
                style="background-color: transparent;">
                <img src="../src/assets/sw_icons/Recurso_23.png" title="Mensajes" alt="Boton mensajes"
                  style="max-height: 25px; background-color: transparent; align-content: center;">
                <span style="margin-left: 20px; color: lightgray;">Mensajes</span>
              </v-btn>

            </div>
            <div class="message">
              <v-btn @click="hook_of_other_element(menu_items['post'], 'post')" style="background-color: transparent;">
                <img src="../src/assets/sw_icons/Recurso_34.png" title="Publicar" alt="Boton publicar"
                  style="max-height: 25px; background-color: transparent; align-content: center;">
                <span style="margin-left: 20px; color: lightgray;">Publicar</span>
              </v-btn>
            </div>
          </div>
          <div class="messages-inbox">
            <ul>
              <div class="room">
                <img src="./assets/profile_images/groupProfile_Cine.png">
                <button @click="hook_of_other_element(menu_items['mensajes'], 'mensajes')">Noche de cineeee!</button>
              </div>
              <div class="room">
                <h4>Tamara Ruiz: </h4>
                <h6>Ah, pues entonces si</h6>
              </div>
              <li style="list-style-type: none;">


              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Publicacion from './components/Publicacion.vue'
import Story from './components/Story.vue';
import Mensajes from './mensajes.vue'

const props = defineProps(['menu_items'])

function hook_of_other_element(function_, value) {
  function_(String(value).toLowerCase())
}


//import HelloWorld from './components/HelloWorld.vue' <Hello-World  :datas="publicacion" ></Hello-World>
//import TwitterCardVue from './components/TwitterCard.vue';

var react_val_busqueda = reactive({"val_busqueda": ""})

const publicaciones2 = [{
  type: 5,
  msg: "Mi mejor cita <3",
  msgvideo: "",
  photourl: "https://pbs.twimg.com/profile_images/1091845110948552704/o7wugwVp_400x400.jpg",
  username: "Dilo con Perritos",
  iconurl: "https://pbs.twimg.com/media/FvK8upWaMAA4mOd?format=jpg&name=medium",
  numLikes: 20,
  numComments: 12,
  numretweets: 999,
  publicationlink: "https://twitter.com/DiloConPerritos/status/1653591525958246401",
  userlink: "https://twitter.com/DiloConPerritos",
  time: '18/05/23'
},
{
  type: 4,
  msg: "",
  msgvideo: 'https://www.youtube.com/embed/XD-OFP-0H5g',
  photourl: '',
  username: 'IzanaGi',
  iconurl: 'https://img.freepik.com/vector-premium/diseno-logotipo-mascota-izanagi-chibi_408559-133.jpg?w=2000',
  numLikes: 91,
  numComments: 32,
  numretweets: 102,
  publicationlink: 'https://www.youtube.com/watch?v=XD-OFP-0H5g',
  userlink: 'https://www.youtube.com/@bfrsost',
  time: '18/05/23'
},
{
  type: 1,
  msg: "Me: Lo siento mucho, mi perro se comió mis deberes. Profesor: Tu perro se comió tus deberes de programación?. Me: Le tomó unos cuantos bytes",
  msgvideo: '',
  photourl: '',
  username: 'DemonS',
  iconurl: 'https://static.bandainamcoent.eu/high/dark-souls/brand-setup/ds3_thumb_brand_624x468.jpg',
  numLikes: 0,
  numComments: 13,
  numretweets: 12,
  publicationlink: 'created',
  userlink: 'https://shermansurvival.com/armas/11889-specna-arms-sa-e07-edge-20-negro.html',
  time: '18/05/23'
},
{
  type: 2,
  msg: "",
  msgvideo: 'https://www.youtube.com/watch?v=onY9eHi_eco',
  photourl: '',
  username: 'SurpriseLol',
  iconurl: 'https://yt3.googleusercontent.com/J6qX8Sx1Tazzx2cM0gJfDXr1cc-p4SHvR8me6muTrNsq9qoSPKSxn75-VLSicK1M4pU17zmuEY0=s176-c-k-c0x00ffffff-no-rj',
  numLikes: 36,
  numComments: 32,
  numretweets: 999,
  publicationlink: 'https://www.youtube.com/watch?v=onY9eHi_eco',
  userlink: 'https://www.youtube.com/@surpriselol4327',
  time: '17/05/23'
}, {
  type: 3,
  msg: "MonkeyFlip",
  msgvideo: '',
  photourl: 'https://i.kym-cdn.com/entries/icons/original/000/035/051/cover1.jpg',
  username: 'MonkeyFlip',
  iconurl: 'https://i.kym-cdn.com/entries/icons/original/000/035/051/cover1.jpg',
  numLikes: 91,
  numComments: 32,
  numretweets: 102,
  publicationlink: 'https://knowyourmeme.com/memes/monki-flip',
  userlink: 'https://knowyourmeme.com/memes/monki-flip',
  time: '17/05/23'
},
{
  type: 2,
  msg: "Unsynchronized",
  msgvideo: '',
  photourl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHxWNHb-UpY0dCnqsruDuyGBgqy65tPLNcA&usqp=CAU',
  username: 'milkmochabear',
  iconurl: 'data:image/jpeg;base64,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',
  numLikes: 1369,
  numComments: 84,
  publicationlink: 'https://www.instagram.com/p/CsRJ60lJJsl/',
  userlink: 'https://www.instagram.com/milkmochabear/',
  time: '15/05/23'
},
{
  type: 2,
  msg: "¡Cada vez queda menos para la tercera y última jornada de la Liga infantil y ya puedes apuntarte!",
  msgvideo: '',
  photourl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwioOESONqJaWKKEH6LgC9xaxA7_WPzyzEgQ&usqp=CAU',
  username: 'climbat',
  iconurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQF5Ejlx0Pl5F2SWTRfUxmMX6qyWlfBCUj2g&usqp=CAU',
  numLikes: 91,
  numComments: 32,
  publicationlink: 'https://www.instagram.com/p/Cr8EEIiNaB8/',
  userlink: 'https://www.instagram.com/climbatcenters/',
  time: '07/05/23'
},
{
  type: 2,
  msg: "Yo todo el dia vs. cuando veo a mi amorcito",
  msgvideo: '',
  photourl: 'https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/217617508_234646725143728_5472709859001023256_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=p3f3Fy8tesUAX-SuKEg&_nc_ht=scontent-mad1-1.xx&oh=00_AfCpw-bDdrVJfLUwqpWBT3tA7cSqUg2SFGudvuVCChvFYA&oe=646C7465',
  username: 'igatitosmemes',
  iconurl: 'https://i.pinimg.com/originals/0e/c0/8e/0ec08eaf171e1588d9c6287ffd7aa889.jpg',
  numLikes: 34020,
  numComments: 316,
  publicationlink: 'https://www.instagram.com/p/Crocqb1PvHb/',
  userlink: 'https://www.instagram.com/igatitosmemes/',
  time: '29/04/23'
},
{
  type: 2,
  msg: "Cuando vas perdiendo 10 veces seguidas",
  msgvideo: '',
  photourl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSG-JxnXrOGN4NqgbmBLXFVvxFV3ZtHt2Vlqc_C19rhszMWzJ7T',
  username: 'igatitosmemes',
  iconurl: 'https://i.pinimg.com/originals/0e/c0/8e/0ec08eaf171e1588d9c6287ffd7aa889.jpg',
  numLikes: 685,
  numComments: 1,
  publicationlink: 'https://www.instagram.com/p/CrWUXGMPGtT/',
  userlink: 'https://www.instagram.com/igatitosmemes/',
  time: '22/04/23'
},
{
  type: 2,
  msg: "¡CLIMBAT KOMBAT!",
  msgvideo: '',
  photourl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScyZdJAug6Rb57JtLOKCcPT8R4_fcZhGrhBg&usqp=CAU',
  username: 'climbat',
  iconurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQF5Ejlx0Pl5F2SWTRfUxmMX6qyWlfBCUj2g&usqp=CAU',
  numLikes: 135,
  numComments: 29,
  publicationlink: 'https://www.instagram.com/p/CqBIqZuNKCQ/',
  userlink: 'https://www.instagram.com/climbatcenters/',
  time: '20/03/23'
},
{
  type: 2,
  msg: "Can’t get enough",
  msgvideo: '',
  photourl: 'https://media.tenor.com/Lznj4vq0PFgAAAAC/kennysgifs-kennymays.gif',
  username: 'kennysgifs',
  iconurl: 'https://pbs.twimg.com/profile_images/1574847860553793537/ANoPE6Yr_400x400.jpg',
  numLikes: 300743,
  numComments: 20651,
  publicationlink: 'https://www.instagram.com/p/CnR6InPAPNn/',
  userlink: 'https://www.instagram.com/milkmochabear/',
  time: '11/01/23'
},
{
  type: 2,
  msg: "Real Scary Halloween",
  msgvideo: '',
  photourl: 'https://media.tenor.com/HvuyrzavCiwAAAAC/milk-mocha.gif',
  username: 'milkmochabear',
  iconurl: 'data:image/jpeg;base64,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',
  numLikes: 3782,
  numComments: 189,
  publicationlink: 'https://www.instagram.com/p/CkYkFG2pcm3/',
  userlink: 'https://www.instagram.com/milkmochabear/',
  time: '31/11/22'
},
{
  type: 2,
  msg: "Milk or Strawerry?",
  msgvideo: '',
  photourl: 'https://media.tenor.com/i3C5Kqdk0mwAAAAC/milk-mocha-bear-milk-and-mocha.gif',
  username: 'milkmochabear',
  iconurl: 'data:image/jpeg;base64,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',
  numLikes: 5804,
  numComments: 217,
  publicationlink: 'https://www.instagram.com/p/CjQadErJz2f/',
  userlink: 'https://www.instagram.com/milkmochabear/',
  time: '03/11/22'
}
]

const listaStories = [{
  username: "TamaraRuiz"
},
{
  username: "MartaRavi"
},
{
  username: "FranSanchez"
},
{
  username: "SelenaSaez"
}
]

let rrss_filter = reactive({
  "facebook": true,
  "twitter": true,
  "instagram": true,
  "tiktok": true
})

function toggleButton(rrss_type) {
  console.log(rrss_filter)
  this.rrss_filter[rrss_type] = !this.rrss_filter[rrss_type];
  console.log(rrss_filter)
}
/* 1: tw 2: ig, 3: fb, 4: tk, 5: all
type: 2, 
msg: "Real Scary Halloween",
msgvideo: '',
photourl: 'https://media.tenor.com/HvuyrzavCiwAAAAC/milk-mocha.gif',
username: 'milkmochabear',
iconurl: 'data:image/jpeg;base64,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',
numLikes: 3782,
numComments: 189,
publicationlink: 'https://www.instagram.com/p/CkYkFG2pcm3/',
userlink: 'https://www.instagram.com/milkmochabear/',
time: '31/11/22'
*/
function onSearchInput(ev){
  console.log(`Input event - Value: ${ev.target.value}`)
  react_val_busqueda.val_busqueda = ev.target.value
}

function checkPublicacionFiltro(publicacion){
  console.log("llega hasta aqui?", publicacion)

  if (react_val_busqueda.val_busqueda == ""){
    if(publicacion.type == 1 && rrss_filter.twitter){
      console.log("twitter")
      return true;
    } if(publicacion.type == 2 && rrss_filter.instagram){
      console.log("instagram")
      return true;
    } if(publicacion.type == 3 && rrss_filter.facebook){
      console.log("facebook")
      return true;
    } if(publicacion.type == 4 && rrss_filter.tiktok){
      console.log("tiktok")
      return true;
    } 
    return publicacion.type == 5;
  }
  if(publicacion.msg.search(react_val_busqueda.val_busqueda) > -1 || publicacion.username.search(react_val_busqueda.val_busqueda) > -1){
    return true;
  }
  console.log("false!!")
  return false;
}

</script>

<script type="text/javascript">
function handleIt(function_, value) {
  function_(String(value).toLowerCase())
}
</script>


<style scoped>
.navegacion-superior {
  display: flex;

  position: sticky;
  top: 0px;
  z-index: 1;

  height: 50px;
  padding: 10px;
  border-bottom: 1px solid gray;

  background-color: #253B44;
}

.inicio-container {
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100%;

  background-attachment: fixed;
  background-image: url("./assets/background.png");
}

.inicio-container-2 {
  display: flex;
}

.stories-container {
  display: flex;
  flex: 0.1;
  flex-direction: column;

  position: fixed;
  right: 94vw;
  top: 50px;
  left: 0px;
  bottom: 0px;

  align-items: center;

  background-color: #253b4475;
}

.feed-container {
  display: flex;
  width: 100%;

  justify-content: center;
  margin-left: 6vw;
  margin-right: 30vw;

  background-color: transparent;
}


.messagesProfile-container {
  display: flex;
  flex-direction: column;
  flex: 0.3;
  position: fixed;
  right: 0px;
  top: 50px;
  left: 70vw;
  bottom: 0px;

  background-color: brown;
}

.profile-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  justify-content: space-between;
  flex: 0.3;

  align-items: center;

  background-color: #2a6d5c;
  padding-bottom: 10px;
}

.messages-container {
  display: flex;
  flex-direction: column;
  flex: 0.7;

  background-color: rgb(167, 167, 241);
}

.story-profile {
  display: flex;
  margin-left: 5%;
}

.filter-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  align-items: center;
  justify-content: center;
}

.busqueda {
  display: flex;
  width: 100%;
  height: 2.5rem;

  padding-left: 10px;
}

.filtro {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  user-select: none;
}

.filtro>img {
  width: 32px;
  height: 32px;
}

.filtro>input {
  margin-right: 5%;
  margin-left: 6.5%;

  width: fit-content;
}

.filtro-button>img {
  width: 30px;
  height: 30px;
}

.filtro-button:active,
.active {
  top: 2px;
  left: 1px;
  box-shadow: none;
  opacity: 0.5;
}

.busqueda-container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding-right: 10px;
  border-radius: 50px;
  background-color: lightgrey;
}

.messages-post {
  display: flex;
  flex-direction: row;

  background-color: #29594c;
}

.message {
  flex: 0.5;

  text-align: center;
  margin: 1%;

  background-color: #29594c;
}

.post {
  flex: 0.5;

  text-align: center;
  margin: 1%;

  background-color: darkcyan;
}

.messages-inbox {
  display: flex;
  flex-direction: column;
  flex: 1;

  text-align: center;
  align-items: center;
  align-content: center;

  background-color: #17292d;

}

.messages-inbox>ul {
  border-style: solid;
  border: 10px;
  border-color: black;
}

.room {
  display: flex;
}

.room>img {
  flex: 0.1;
  width: 64px;
  height: 64px;

  border-radius: 50%;
  margin-top: 4%;
  margin-right: 1%;

}

.room>h1 {
  color: antiquewhite;
  font-size: calc(1.375rem + 1vw);
}

.room>h4 {
  font-size: calc(0.7rem + 0.5vw);
  color: rgb(210, 245, 164);
  margin-right: 5%;
}

.room>h6 {
  color: antiquewhite;
  margin-top: 0.5%;
}

.room>button {
  color: antiquewhite;
  margin-top: 0.5%;

  font-size: calc(1.375rem + 1vw);
}

.profile-button {
  display: flex;
  background-color: #56c6a8;
  border-radius: 141px;
  min-width: 55%;
  padding: 5px;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
}

@media only screen and (max-width: 800px) {
  .stories-container {
    display: none;
  }

  .messagesProfile-container {
    display: none;
  }

  .feed-container {
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>
