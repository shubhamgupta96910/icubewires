<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="button">
      <router-link to="/"> <button class="HomeButton">HOME</button> </router-link>
    </div>
  </div>
  <!-- <ButtonSignUp/> -->

</template>

<script>
// import ButtonSignUp from './ButtonSignUp.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // components:{ButtonSignUp}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align: center;
}
.button{
  align-items: center;
  justify-content: center;
  display: flex;
}

.HomeButton{
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  background-color: rgb(77, 77, 255);
}

.HomeButton:hover{
  background-color: darkblue;
  color: white;
}
</style>
