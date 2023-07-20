<template>
    <div class="container">
        <div class="vue-tempalte">
            <form @submit="login">
                <h3 style="text-align: center;">Sign In</h3>
                <p v-if="error.length">
                    <b style="color: red;">please correct the following error</b>
                <ul>
                    <li v-for="e in error" v-bind:key="e.id" style="color:red">{{ e }}</li>
                </ul>
                </p>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control form-control-lg" v-model="name" placeholder="xyz@abc.com" />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control form-control-lg" v-model="password" placeholder="Password" />
                </div>
                <button type="submit" class="btn">Sign In</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LoginComponent',
    data() {
        return {
            error: [],
            name: '',
            password: ''
        }
    },
    methods: {
        login(e) {
            this.error = [];
            if (this.name && this.password) {
                console.warn('no error')
            }
            if (!this.name) {
                this.error.push('Username is required!!')
            }
            if (!this.password) {
                this.error.push('Password is required!!')
            }
            e.preventDefault();

        }
    }

}
</script>
<style>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.vue-tempalte {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: beige;
    height: 300px;
}

.form-group {
    display: grid;

}

.form-control {
    text-align: center;
    align-items: center;
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
}</style>
