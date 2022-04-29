<template>
  <div>
    <div>
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
      <default-footer class="mt-5"/>
    </div>
  </div>
</template>

<script>
import loginUser from '../components/loginUser.vue'
import DefaultFooter from '../layouts/defaultFooter.vue'

export default {
    components: {
        loginUser,
        DefaultFooter
    }
}
</script>

<style>

</style>