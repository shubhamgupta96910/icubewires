<template>
    <div class="container">
        <div class="loginButton">
            <router-link to="/login"><button class="login">LogIN</button></router-link>
            <router-link to="/signup"><button class="signup">Sign UP</button></router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'ButtonSignUp'
}
</script>
<style>
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        height:30rem;
        width: 100vmax;
    }
    .loginButton{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        width: 50%;
        background-color:rgb(224, 223, 223);
        border-radius: 10px;
        margin-top: 5px;
    }
    .login{
        display: inline-block;
        padding: 2vh;
        border-radius: 10px;
        background-color: rgb(39, 39, 231);
        color:white;
    }
    .login:hover{
        background-color: blue;
        transform: scale(1.1);
    }
    .signup{
        display: inline-block;
        padding:2vh;

        border-radius: 10px;
        margin-left: 5px;
        background-color: rgb(74, 187, 22);
    }
    .signup:hover{
        background-color: rgb(100, 219, 45);
        transform: scale(1.1);
    }
</style>