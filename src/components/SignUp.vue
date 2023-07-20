<template>
    <div class="container">
        <div class="vue-tempalte">
            <!-- <p v-if="error.length">
                <b style="color: red;">please correct the following error</b>
            <ul>
                <li v-for="e in error" v-bind:key="e.id" style="color:red">{{ e }}</li>
            </ul>
            </p> -->
            <form @submit="signup">
                <h3 style="text-align: center">Sign Up</h3>
                

                <!-- Form input field   -->
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" class="form-control" v-model="name" placeholder="Name" required />
                </div>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" class="form-control" v-model="email" placeholder="Email" required />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="password" placeholder="Password" required />
                </div>
                <button type="submit" class="btn">Sign Up</button>
            </form>
        </div>
    </div>
</template>
 
<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    date() {
        return {
            error:[],
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        signupcheck(e) {
            this.error = [];
            if (this.name && this.password && this.email) {
                console.warn('no error')

            }
            if (!this.name) {
                this.error.push('Name is required!!')
            } 
            if (!this.password) {
                this.error.push('Password is required!!')

            }
            if (!this.email) {
                this.error.push("Email is Required!!")
            }
            e.preventDefault();
        },
        async signup(){
           let result = await axios.post("http://localhost:3000/user",{
            name:this.name,
            email:this.email,
            password:this.password
           })
           if(result.status == 201 ){
            // alert('SignUp Successful!')
            localStorage.setItem('user-info',JSON.stringify(result.data))
            this.$router.push({name:'User'})
        }
    },

    }
}

</script>

<style>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 120px;
    height: 20px;
    background-color: skyblue;
    cursor: pointer;
}

.btn:hover {
    background-color: rgb(51, 134, 167);
    transform: scale(1.1);
    color: white
}
</style>