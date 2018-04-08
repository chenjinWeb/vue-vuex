<template>
    <div>
        <p>aaaa</p>
      <span>{{name}}</span>
    </div>
</template>

<script>

  import {mapState,mapActions} from "vuex"
    export default {
        name: 'index',
        data () {
            return {
                msg: ''
            }
        },
        computed: {
          ...mapState({
            name:state=>state.$indexModule.name
          })
        },
        methods: {
          ...mapActions([
              "getUserInfo_"
          ]),
          getInfo(){
            this.getUserInfo_().then((res)=>{
                console.info(res)
            })
          }
        },
        mounted(){
          this.getInfo()
        },
        props: []
    }
</script>
<style scoped>

</style>
