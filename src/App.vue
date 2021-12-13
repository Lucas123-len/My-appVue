<template>
  <div id="app">
    <v-app>
      <div id="nav">
        <router-link id="float" to="/">
          AuKiMia
        </router-link>
        <router-link id="router1" to="/">Home</router-link> ||
        <router-link id="router2" to="/clientes">Cliente</router-link> ||
        <router-link id="router3" to="/animais">Animal</router-link> ||
        <router-link id="router4" to="/produtos">Produto</router-link> ||
        <router-link id="router5" to="/sobre">Sobre</router-link>
      </div>
      <router-view/>
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
@import url('https://fonts.googleapis.com/css2?family=Benne&family=Big+Shoulders+Stencil+Display:wght@600&family=Viaoda+Libre&display=swap');
  font-family: 'Big Shoulders Stencil Display', cursive, 'Benne', serif, 'Viaoda Libre';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #98a141;
}

#float{
  float: left;
  text-decoration: none;
  font-size: 25px;
}
#router2{
  text-decoration: none;
}
#router3{
  text-decoration: none;
}
#router4{
  text-decoration: none;
}
#router1{
  text-decoration: none;
}
#router5{
  text-decoration: none;
}

#nav {
  padding: 30px;
  background-color:darkseagreen;
  a {
    font-weight: bold;
    color: #281a35;

    &.router-link-exact-active {
      color: #96be28;
    }
  }
}
</style>
