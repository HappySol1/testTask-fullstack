<template>
    <div class="chat">
        <div class="chat__loader" v-if="getIsRequest"><div class="lds-dual-ring"></div></div>
        <div class="chat__header"></div>
        <div class="chat__history" ref="scrollableBlock">
            <div class="message" v-for="messege in messeges" :key="messege.id">
                <div class="message__sender">{{ messege.username }}</div>
                <div class="message__wrap">
                    <div class="message__delete" @click="deletePost(messege.id)"></div>
                    <div class="message__text">
                        {{ messege.text }}
                    </div>
                    <div class="message__like-button"></div>
                    <div class="message__time">{{ messege.created_at }}</div>
                </div>
            </div>
        </div>
        <div class="chat__message">
            <div class="chat__message-wrap">
                <input class="chat__message-input" @keyup.enter="sendmassage" v-model="value" type="text">
                <div class="chat__message-sendbtn" @click="sendmassage"><img src="Arrow.svg"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';
export default {
    data() {
        return {
            value: ''
        }
    },
    methods: {
        ...mapActions({
            addMessage:'addMessage',
            getPosts:'getPosts',
            deletePost:'deletePost',
        }),
        sendmassage(e){
            if(this.value){
            this.addMessage(this.value)
            this.value = ''
            e.target.blur()
                
            }
        },
    },
    computed: {
        ...mapGetters({
            messeges:'getMessagesArr',
            getIsRequest:'getIsRequest',
        }),
        name() {
            return this.data 
        }
    },
    mounted(){
        this.getPosts()
    },
    watch: {
        messeges() {
            this.$nextTick(() => {
            const block = this.$refs.scrollableBlock;
            const scrollHeight = block.scrollHeight;
            block.scrollTop = scrollHeight;  
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.chat{
    position: absolute;
    top: 76px;
    left: 175px;
    width: 570px;
    height: 628px;
    border: 1px solid rgba(35, 44, 94, 0.21);
    box-shadow: 0px 6px 25px rgba(19, 35, 68, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    &__loader{
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.253);
        z-index: 2;
        border-radius: 8px;
        .lds-dual-ring{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-60%,-60%);
        }
    }
    &__header{
        width: 100%;
        display: block;
        background: #F5F5F8;
        border-radius: 7px 7px 0px 0px;
        height: 31px;
        border-bottom: 1px solid rgba(35, 44, 94, 0.13);
    }
    &__history{
        flex-grow: 1;
        height: 400px;
        overflow-y: auto;
        margin-right: 10px;
        &::-webkit-scrollbar {
            width: 5px;
            background-color: #fff;
            border-radius: 5px;
            height: 200px;
        }
        &::-webkit-scrollbar-thumb {
            background: rgba(35, 44, 94, 0.12);
            border-radius: 5px;
        }
    }
    &__message{
        height: 125px;
        background: rgba(11, 17, 69, 0.04);
        border-top: 1px solid rgba(35, 44, 94, 0.13);
        padding: 36px;
        box-sizing: border-box;
        &-wrap{
            position: relative;
        }
        &-input{
            display: block;
            width: 100%;
            box-sizing: border-box;
            outline: none;
            border: 1px solid #232C5E;
            border-radius: 8px;
            padding: 17px 54px 17px 17px;
            font-size: 18px;
            &:focus {
                outline: 1px solid  #232C5E;
                box-shadow: none;
            }
        }
        &-sendbtn{
            position: absolute;
            top: 7px;
            right: 7px;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            cursor: pointer;
            user-select: none;
            &:hover{
                background: rgba(114, 131, 189, 0.219);
            }
            img{
                position: absolute;
                top: 50%;
                left: 55%;
                transform: translate(-50%,-50%);
            }
        }
    }
    .message{
        width: 100%;
        // background: #232c5e15;
        padding: 12px 32px;
        box-sizing: border-box;
        &__wrap{
            // display: none;
            width: 350px;
            // background: #3030fc;
            background: #F5F5F8;
            padding: 16px;
            position: relative;
            border-radius: 8px;
        }
        &__sender{
           display: block; 
            color: #5E5E5E;
            font-size: 16px;
            margin-bottom: 6px;
        }
        &__text{

        }
        &__like{

        }
        &__delete {
            width: 20px;
            height: 20px;
            cursor: pointer; 
            position: absolute; 
            top: 0; 
            right: -28px;
            &:before, &:after {
                top: 50%;
                left: 25%;
                transform: translate(-50%,-50%);
                content: ""; 
                position: absolute; 
                width: 12px; 
                height: 1px; 
                background: #969696;
            }
            &:before {transform: rotate(45deg);}
            &:after {transform: rotate(-45deg);}
            &:hover &:before{
                background: red;
            }
            &:hover{
                &::before, &::after {
                background: #000;
                }
            }
        }



        // &__delete{
        //     position: absolute;
        //     top: 0;
        //     right: 0;
        //     background: red;
        // }   
        &__time{
            position: absolute;
            bottom: 6px;
            right: 6px;
            font-size: 13px;
            line-height: 15px;
            color: #969696;
            user-select: none;
        }
    }
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>