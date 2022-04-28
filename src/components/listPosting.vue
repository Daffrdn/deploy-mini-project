<template>
  <v-card
    class="mx-auto mt-4 md-4"
    max-width="600"
    solo>
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="green">
          <v-icon dark>
              mdi-account-circle
            </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title><h3>Daffa</h3></v-list-item-title>
          <div class="text-h10">10 minutes Ago</div>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end">

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">  
          <v-btn
            v-bind="attrs"
            v-on="on"
            text>
            <v-icon class="mr-1">
              mdi-cog
            </v-icon>
            </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in todo"
                :key="index"
              >
                <v-btn text>{{ item.do }}</v-btn>
              </v-list-item>
            </v-list>
        </v-menu>
        </v-row>
      </v-list-item>
    </v-card-actions>
    <v-divider></v-divider>
    <v-card-text class="text-h5 bold">
      Media sosial atau sering juga disebut sebagai sosial media adalah platform digital yang memfasilitasi penggunanya untuk saling berkomunikasi atau membagikan konten berupa tulisan, foto, video, dan merupakan platform digital yang menyediakan fasilitas untuk melakukan aktivitas sosial bagi setiap penggunanya.
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        icon
        :class="like ? 'green--text' : ''"
        @click="like = !like">
        <v-icon>mdi mdi-thumb-up</v-icon>
      </v-btn>
      <v-btn
        icon
        @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click="a">
        <v-icon>mdi mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
      <v-list-item class="grow">
        <v-list-item-avatar color="green">
          <v-icon dark>
              mdi-account-circle
            </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title><h3>Anonim</h3></v-list-item-title>
          <div class="text-h10">3 minutes Ago</div>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
        <v-card-text cols="12">
          Comment Section
        </v-card-text>
      <v-divider></v-divider>
      </div>
    </v-expand-transition>

  </v-card>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      show: false,
      like: false,
      todo: [
        { do: 'Edit Post' },
        { do: 'Delete Post' },
      ],
    }),
  }
</script>
