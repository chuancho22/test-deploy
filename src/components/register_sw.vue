<template>
  <div id="register-sw">
    <h1>Register SocialWave</h1>
    <form @submit.prevent="go_to_other_element(login_items['rrss_selector'], 'rrss_selector')">
      <div>
        <div class="sw-form">
          <label>Correo : </label>
          <input type="email" placeholder="Introducir Correo" name="email" required>
          <label>Usuario : </label>
          <input type="text" placeholder="Introducir Usuario" name="username" id="username_input" required>
          <label>Contraseña : </label>
          <input type="password" placeholder="Introducir Contraseña" name="password" required>
          <label>Repetir Contraseña : </label>
          <input type="password" placeholder="Introducir Contraseña" name="repeat_password" required>
        </div>
      </div>
      <div class="h-button">
        <button @click="go_to_other_element(login_items['login_socialwave'], 'login_socialwave')">Volver</button>
        <button type="submit">Registrate!</button>
      </div>

    </form>
  </div>
</template>


<script>

export default {
  data() {
    return {
      pre_user: ""
    }
  },
  props: {
    login_items: {
      type: Object
    },
    pre_username: {
      type: String
    }
  },
  methods: {
    go_to_other_element(function_, value) {
      function_(String(value).toLowerCase())
    }
  },
  mounted() {
    console.log(this.pre_username)
    document.getElementById('username_input').value = this.pre_username;
  }
}
</script>


<style scoped>
#register-sw {
  display: flex;
  flex-direction: column;
  border: 1px solid darkgray;
  border-radius: 5px;

  padding: 25px;

  color: #3CC6A2;
  background-color: #303D43;
}

.h-button {
  display: flex;
  justify-content: space-between;
}

.register-form {
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  margin-bottom: 20px;
}

a {
  color: blue;
}

a:hover {
  color: darkblue;
  background-color: transparent;
}

label {
  padding-top: 7px;
}
</style>