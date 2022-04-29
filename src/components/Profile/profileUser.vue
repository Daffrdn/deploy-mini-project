<template>
    <v-card
    class="mx-auto mt-4 md-4"
    max-width="600">
    <v-img
      class="white--text align-end green"
      height="250px"
    >
      <v-card-title >
          <v-avatar size="70">
              <img
                class="white"
              >
          </v-avatar>
          <v-list-item-content class="ml-3">
            <v-list-item-title><h3>Daffa Erdian Fahrezy</h3></v-list-item-title>
            <p>@username</p>
        </v-list-item-content>
      </v-card-title>
    </v-img>
    <v-card-actions>
      <v-btn
        text
        @click="intro = !intro">
        {{ intro ? "Intro" : "Intro" }}
      </v-btn>
      <v-btn
        text
        @click="a">
        foto
      </v-btn>
      <v-btn
        text
        @click="a">
        Share
      </v-btn>
      <v-btn
        text
        @click="a">
        Follower
      </v-btn>
      <v-btn
        text
        @click="a">
        Following
      </v-btn>
      <v-btn
        icon
        @click="a">
        <v-icon>mdi mdi-tune</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="intro">
        <v-divider></v-divider>
      <v-card-text cols="12">
          Bio
        </v-card-text>
        <v-divider></v-divider>
      <v-list-item class="grow">
        <v-list-item-avatar color="green">
          <v-icon dark>
              mdi-map-marker-outline
            </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title><h4>Place </h4></v-list-item-title>
          <div class="text-h10">Bandung, Jawa Barat, Indonesia</div>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item class="grow">
        <v-list-item-avatar color="green">
          <v-icon dark>
              mdi-calendar
            </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title><h4>Birth Of Date </h4></v-list-item-title>
          <div class="text-h10"> Date - Month - Years </div>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      </div>
    </v-expand-transition>

    </v-card>
</template>

<script>
export default {
    data: () => ({
        intro: false,
    }),
}
</script>