<template>
    <div class="login-form">
        <label for="login" class="login-form__label">Введите логин</label>
        <input id="login" v-model="name" class="login-form__input" @blur="updateStore" @keyup.enter="blur" type="text">
        <!-- <input type="text"> -->
    </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default { 
        data() {
            return {
                name: ''
            }
        },
        methods: {
            ...mapActions({
                setName: 'setName'
            }),
            blur(e){
                e.target.blur() //эвент на blur отработает после этого
            },
            updateStore() {
                localStorage.setItem('name', this.name);
                this.setName(this.name)
            }
        },
        mounted () {
            let prevname = localStorage.getItem('name');
            if(prevname) {
                this.name = prevname
                this.setName(prevname)
            }
        }
    }
</script>

<style lang="scss" scoped>
.login-form{
    position: absolute;
    top: 97px;
    right: 275px;
    width: 370px;
    padding: 30px;
    border: 1px solid #232C5E36;
    box-shadow: 0px 6px 25px rgba(19, 35, 68, 0.1);
    border-radius: 8px;
    .login-form__label{
        display: block; 
        color: #5E5E5E;
        font-size: 16px;
        margin-bottom: 6px;
    }
    .login-form__input{
        display: block;
        width: 100%;
        box-sizing: border-box;
        outline: none;
        border: 1px solid #232C5E;
        border-radius: 8px;
        padding: 18px;
        font-size: 18px;
        &:focus {
            outline: 1px solid  #232C5E;
            box-shadow: none;
        }
    }
}
@media screen and (max-width: 1480px) {
  .login-form{ 
    left: 175px;
    right: 0;
    top: 750px;
  }
}
</style>