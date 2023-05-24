<template>
    <div class="main-post">
        <span class="mr-1">
            <v-btn @click="hook_of_other_element(menu_items['inicio'], 'inicio')" style="background-color: transparent;">
                <img class="logo" src="../src/assets/sw_icons/Recurso_37.png" title="Inicio" alt="Boton pagina de inicio">
            </v-btn>
        </span>

        <div class="container-main">
            <div class="columna-1">
                <h1 style="color: white;"> POST </h1>
                <h6 style="color: white;"> Selecciona las redes sociales en las que quieres subir tu post. </h6>
                <div>
                    <button @click="react_var.twitter = !react_var.twitter" icon>
                        <img class="imagen-icono" v-if="!react_var.twitter" src="../src/assets/rrss_icons/twitter.png"
                            title="Twitter" alt="Seleccionar twitter para hacer post">
                        <img v-else class="imagen-icono-checked" src="../src/assets/rrss_icons/twitter.png" title="Twitter"
                            alt="Deseleccionar twitter para hacer post">
                    </button>

                    <button @click="react_var.tiktok = !react_var.tiktok" icon>
                        <img class="imagen-icono" v-if="!react_var.tiktok" src="../src/assets/rrss_icons/tiktok.png" title="TikTok"
                            alt="Seleccionar tikTok para hacer post">
                        <img v-else class="imagen-icono-checked" src="../src/assets/rrss_icons/tiktok.png" title="Twitter"
                            alt="Deseleccionar twitter para hacer post">
                    </button>

                    <button @click="react_var.instagram = !react_var.instagram" icon>
                        <img class="imagen-icono" v-if="!react_var.instagram" src="../src/assets/rrss_icons/instagram.png"
                            title="Instagram" alt="Seleccionar instagram para hacer post">
                        <img v-else class="imagen-icono-checked" src="../src/assets/rrss_icons/instagram.png"
                            title="Instagram" alt="Seleccionar instagram para hacer post">
                    </button>

                    <button @click="react_var.facebook = !react_var.facebook" icon>
                        <img class="imagen-icono" v-if="!react_var.facebook" src="../src/assets/rrss_icons/facebook.png"
                            title="Facebook" alt="Seleccionar facebook para hacer post">
                        <img v-else class="imagen-icono-checked" src="../src/assets/rrss_icons/facebook.png"
                            title="Facebook" alt="Seleccionar facebook para hacer post">
                    </button>

                    <button @click="selectSocialWave()" icon :class="{ checked: react_var.wave }">
                        <img class="imagen-icono" src="../src/assets/sw_icons/Recurso_38.png"
                            title="Todas las redes sociales" alt="Seleccionar todas las redes para hacer post">
                    </button>
                </div>
            </div>
            <div class="columna-2">
                <div class="input-texto">
                    <div class="cuadro-texto">
                        <textarea v-model="textInput"
                            style="width:100%; height: 100%; color: white; padding: 10px; border-radius: 5px;"
                            placeholder="Ingresa el texto que se mostrará en la publicación"></textarea>
                    </div>
                </div>

                <div class="input-imagen" style="color: white;">
                    <div class="container-subir-imagen">
                        <label for="file-input" class="file-input-label">
                            <span class="icon-container">
                                <img class="icono-subir" src="../src/assets/sw_icons/Recurso_34.png" title="Subir Imagen"
                                    alt="Seleccionar una imagen para hacer post">
                            </span>
                        </label>
                        <input id="file-input" type="file" @change="handleFileUpload" @click="subirImagen">
                        <span class="file-name">{{ fileName }}</span>
                    </div>
                </div>
                <div class="botones">
                    <button class="boton-post" @click="openPopup()"> Post </button>
                    <div id="popup" class="popup">
                        <div class="popup-content">
                            <span class="close" @click="closePopup()">&times;</span>
                            <h2 style="width: 60%;">Confirmacion post</h2>
                            <p>Tu post se ha subido correctamente</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'

const react_var = reactive({ twitter: false, tiktok: false, instagram: false, facebook: false, wave: false })

var prevButtons = {
    twitter: false,
    tiktok: false,
    instagram: false,
    facebook: false,
}

export default {
    data() {
        return {
            textInput: '', // Variable para almacenar el texto ingresado por el usuari
            fileName: ''
        };
    },
    methods: {
        handleFileUpload() {
            const input = document.getElementById('file-input');
            const file = input.files[0];
            this.fileName = file.name;

            if (file) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    const image = new Image();
                    image.src = e.target.result;

                    const contenedor = document.getElementById('imageContainer');
                    contenedor.appendChild(image);
                };

                reader.readAsDataURL(file);
            }
        },
        selectSocialWave() {
            if (react_var.wave) {
                react_var.facebook = prevButtons.facebook;
                react_var.instagram = prevButtons.instagram;
                react_var.twitter = prevButtons.twitter;
                react_var.tiktok = prevButtons.tiktok;
                react_var.wave = false;
            } else {
                prevButtons.facebook = react_var.facebook;
                prevButtons.instagram = react_var.instagram;
                prevButtons.twitter = react_var.twitter;
                prevButtons.tiktok = react_var.tiktok;

                react_var.facebook = true;
                react_var.instagram = true;
                react_var.twitter = true;
                react_var.tiktok = true;
                react_var.wave = true;
            }
        },
        openPopup() {
            document.getElementById("popup").style.display = "block";
        },
        closePopup() {
            document.getElementById("popup").style.display = "none";
        }
    }
};
</script>
  
<script setup>

const props = defineProps(['menu_items'])

function hook_of_other_element(function_, value) {
    function_(String(value).toLowerCase())
}

</script>

<style scoped>
.main-post {
    width: 100%;
    height: 100vh;
    background-image: url("src/assets/background.png");
    background-repeat: repeat-x;
    background-size: cover;
    background-color: #ffffff;
    background-position: top;
    display: flex;
    align-content: space-around;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
}

.container-main {
    margin-top: 20px;
    height: 80vh;
    width: 90vw;
    display: flex;
    justify-content: center;
}

.columna-1 {
    display: flex;
    flex: 0.4;
    flex-direction: column;
    padding: 25px;
}

.columna-2 {
    display: flex;
    flex: 0.6;
    flex-direction: column;
    justify-content: flex-start;
    ;
}

.logo {
    max-height: 25px;
    background-color: transparent;
    margin: 5px;
    box-shadow: none;
}

.imagen-icono {
    height: 25px;
    background-color: transparent;
    filter: grayscale(100%);
    margin: 5px;
}

.checked {
    background-color: #3CC6A2;
    border-radius: 50%;
}

.imagen-icono-checked {
    max-height: 25px;
    border-radius: 50%;
    background-color: #3CC6A2;
    margin: 5px;
}

.input-texto {
    display: flex;
    flex: 0.3;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;

}

.cuadro-texto {
    display: flex;
    width: 90%;
    height: 90%;
    border: 1px solid white;
}

.input-imagen {
    display: flex;
    flex: 0.3;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
}

.container-subir-imagen {
    display: flex;
    width: 90%;
    height: 90%;
    border: 1px dashed white;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-around;
}

.botones {
    display: flex;
    flex: 0.1;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: space-around;
    flex-direction: row;
}

.boton-post {
    background-color: #dbedf7;
    color: #303D43;
}

.icono-subir {
    max-height: 40px;
}

.inputhidden {
    height: 80%;
    width: 80%;
}

.file-input-label {
    display: inline-block;
    cursor: pointer;
    /* Estilos adicionales según tus necesidades */
}

.icon-container {
    display: inline-block;
    /* Estilos para el contenedor del icono */
}

.icon {
    width: 24px;
    height: 24px;
    /* Estilos para el icono */
}

.file-name {
    margin-left: 10px;
    /* Estilos para el nombre del archivo */
}

/* Ocultar el input de archivo */
#file-input {
    display: none;
}

input[type="text"] {
    height: 100%;
    width: 100%;
    color: white;
}

.popup {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.popup-content {
  background-color: #3CC6A2;
  border-radius: 10px;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #000000;
  width: 80%;
  max-width: 600px;
}

.close {
  color: #303D43;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}



</style>
  