<template>
  <div class="inicio-container">
    <div class="navegacion-superior">
      <v-btn @click="hook_of_other_element(menu_items['inicio'], 'inicio')" style="background-color: transparent;">
        <img src="../src/assets/sw_icons/Recurso_37.png" title="Inicio" alt="Boton pagina de inicio"
          style="max-height: 25px; background-color: transparent; align-content: ;">
      </v-btn>
    </div>
    <div class="image">
      <Stories :stories="items" />
    </div>
  </div>
</template>

<script>
import { Stories } from "vue-insta-stories";
export default {
  components: { Stories },
  data: () => ({
    items: [
      "https://images.unsplash.com/photo-1616578492900-ea5a8fc6c341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80",
      "https://images.unsplash.com/photo-1590099914662-a76f2f83b802?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1584294311015-1bda86d6824d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    ]
  })
};


</script>

<script setup>


const props = defineProps(['menu_items'])

function hook_of_other_element(function_, value) {
    function_(String(value).toLowerCase())
}

</script>

<style scoped>
  .container {
    display: flex;
    min-height: 100%;
    background-attachment: fixed;
    
    background-image: url("./assets/background.png");
  }

  .col {
    height: 30px;
    flex: 1;
    display: flex;
    align-items: center;
  }

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

  min-height: 100%;
  min-width: 100%;

  background-image: url("./assets/background.png");

}

.ig-stories {
  display: flex;
  flex: 0;
  height: 10%;
  height: 10%;
  max-height: 100%;
  }

  .image {
    display: flex;
    flex: 0.5;
    
    justify-content: center;
    align-items: center;
    align-content: center;

    margin-top: 5%;
    margin-left: 26%;
    height: 20%;
    width: 20%;
  }
</style>