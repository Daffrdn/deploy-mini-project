<template>
  <div>
    <v-img
      :width="width"
      height="700"
      :src="images.bg1"
    >
      <v-row>
          <v-col class="mt-5 md-5">
            <v-card-text align="center" class="font-weight-black">
               <h3> Make own your profile <br>
                And post wahtever you want...
               </h3>
            </v-card-text>
            <loginUser/>
          </v-col>
          <v-col>
          </v-col>
      </v-row>
      <br>
      <br>
      </v-img>
  </div>
</template>

<script>
import loginUser from '../components/loginUser.vue'

export default {
    components: {
        loginUser,
    },
    data(){
      return{
        images: {
          bg: require('../assets/bg.jpg'),
          bg1: require('../assets/bg.jpg')
        }
      }
    }
}
</script>

<style>

</style>