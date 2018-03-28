<template>
  <div class="content-modal">
    <div class="content">
      <div class="scroll-content">
        <div class="login_body">
          <div class="form">
            <div class="ifrom clear">
              <input type="text" name="name" placeholder="请输入登录名" class="name" v-model="user.username">
            </div>
            <div class="ifrom clear">
              <input type="password" name="password" placeholder="请输入密码" v-model="user.password">
            </div>

            <div style="text-align: left; line-height: 0.2rem; margin-top: 0.15rem">
              <van-checkbox v-model="checked">记住密码</van-checkbox>
            </div>

            <div class="sublogin" @click="login()"><a href="javascript:;" class="btn">登录</a></div>
            <div class="sublogin" @click="weiXinLogin()"><a href="javascript:;" class="btn" style="background-color: #63c73b">微信登录</a></div>
          </div>
        </div>
      </div>
    </div>
    <transition name="custom-classes-transition" enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

  import Vue from "vue"

  import { mapActions} from "vuex";

  import {Toast} from "mint-ui"

  import { Checkbox } from 'vant';

  Vue.use(Checkbox);

    export default {
        name: 'login',
        data () {
            return {
                user:{
                  username:"",
                  password:""
                },
              checked:false
            }
        },
        computed: {},
        methods: {
          ...mapActions([
             "userlogin_"
          ]),
          login(){
            if(!this.user.username){
              Toast("用户名不能为空");
              return
            }
            if(!this.user.password){
              Toast("密码不能为空");
              return
            }
            this.userlogin_(this.user).then(
              (res) => {
                  if(res.success==200){
                    this.$router.push({name:"index"});
                  }
              }
            )
          }
        },
        props: []
    }
</script>
<style>

  @import "../../assets/css/login.css";

</style>
