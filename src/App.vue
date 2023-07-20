<template>
  <HelloWorld msg="Welcome to iCubeWires"/>
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import LoginComponent from './components/LoginComponent.vue'
// import SignUp from './components/SignUp.vue'; 
// import ButtonSignUp from './components/ButtonSignUp.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    // LoginComponent,
    // SignUp,
    // ButtonSignUp

  }
}
</script>

