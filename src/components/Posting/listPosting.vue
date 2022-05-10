<template>
<div>
<div v-for="(posts, index) in post" :key="index">
  <v-card
    class="mx-auto mt-4 md-4"
    max-width="600"
    solo
    >
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="green">
          <v-icon dark>
              mdi-account-circle
            </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title><h3>Daffa</h3></v-list-item-title>
          <div class="text-h10">{{posts.updated_at}}</div>
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
              <v-list-item>
                <v-btn text v-if="type == 'posting'" @click="delete_post(posts)"> Delete Post </v-btn>
                <v-dialog
                  v-model="dialog"
                  persistent
                  max-width="600px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      text v-if="type == 'posting'" @click="edit_post(posts)"
                      max-width="500px"
                      texet
                      color="black"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      Edit Post
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                    </v-card-title>
                    <v-card-text>
                      <input v-bind:value="doPost" @keyup.enter="edit_post(posts, dialog = false)"
                        @change="doPostChange" type="input" class="form__field" required />
                      <label class="form__label"></label>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="edit_post(posts, dialog = flase)"
                      >
                        Confirm
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!-- <v-btn text v-if="type == 'posting'" @click="edit_post(posts)">{{editing?'Update Post':'Edit Post'}}</v-btn> -->
              </v-list-item>
            </v-list>
        </v-menu>
        </v-row>
      </v-list-item>
    </v-card-actions>
    <v-divider></v-divider>
    <v-card-text v-if="!editing" class="text-h5 bold">
    {{ posts.write_post }}
    </v-card-text>
    
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        icon
        :class="like ? 'red--text' : ''"
        @click="like = !like">
        <v-icon>mdi mdi-thumb-up</v-icon>
      </v-btn>
      <v-btn
        text
        @click="show = !show">  Comment
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      <v-btn
        text
        @click="a">
        <v-icon>mdi mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>

  <v-expand-transition>
      <div v-show="show">
      
      <v-divider></v-divider>
      <div v-for="comments in posts.OnToMany" :key="comments">
      <v-list-item>
        <v-list-item-avatar color="green">
          <v-icon dark>
              mdi-account-circle
            </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title><h3>Anonim</h3></v-list-item-title>
          <div class="text-h10">{{ comments.updated_at }}</div>
        </v-list-item-content>
      </v-list-item>
        <v-card-text cols="12">
          {{ comments.write_comment }}
        </v-card-text>
      <v-divider></v-divider>
      </div>
      
        <v-list-item>
          <v-list-item-content>
            <div class="form__group">
              <input type="input" class="form__field" placeholder="Name" name="comment" id='comment' required />
              <label for="comment" class="form__label"> Add ur comment...</label>
            </div>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-expand-transition>

  </v-card>

</div>
</div>
</template>

<script>
import gql from 'graphql-tag'

export const GET_MY_POST = gql`
  query getMyPost {
  post(order_by:{id: desc})  {
    id
    write_post
    updated_at
    OnToMany {
      id_post
      write_comment
      updated_at
    }
  }
}`

const REMOVE_POST = gql`
  mutation rmpost($id: Int!) {
  delete_post(where: {id: {_eq: $id}}) {
    affected_rows
  }
}`

const EDIT_POST = gql`
  mutation updatePost($id: Int!, $write_post: String!) {
  update_post(where: {id: {_eq: $id}}, _set: {write_post: $write_post}) {
    affected_rows
  }
}`

  export default {
    name: 'HelloWorld',
    apollo: {
      post: {
        query: GET_MY_POST,
        error(error){
          this.error = JSON.stringify(error.message)
        }
      }
    },
    data: () => ({
      show: false,
      like: false,
      editing: false,
      doPost: "",
      post: [],
      type: "posting",
      dialog: false,
    }),
    methods: {
      delete_post: function(posts){
      this.$apollo.mutate({
        mutation: REMOVE_POST,
        variables: {
          id: posts.id
        },
        update: (store, { data: { delete_post }}) => {
            if(delete_post.affected_rows){
              if(this.type == "posting"){
                const data = store.readQuery({
                  query: GET_MY_POST
                })
                data.post = data.post.filter(p=> {
                  return p.id !== posts.id
                })
                store.writeQuery({
                  query: GET_MY_POST,
                  data
                })
              }
            }
        }
      })
    },
    doPostChange(e) {
      this.doPost = e.target.value;
    },
    edit_post: function(posts){
      this.editing = this.editing == true ? false : true;
        if (this.editing) {
          this.doPost = posts.write_post;
        } else {
          posts.write_post = this.doPost;
        }
      this.$apollo.mutate({
        mutation: EDIT_POST,
        variables: {
          id: posts.id,
          write_post: posts.write_post
        },
        update: (store, { data: { update_post }}) => {
            if(update_post.affected_rows){
              if(this.type == "posting"){
                const data = store.readQuery({
                  query: GET_MY_POST
                })
                store.writeQuery({
                  query: GET_MY_POST,
                  data
                })
              }
            }
        }
      })
    },
  }
}
</script>

<style>
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #000000;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form__field::placeholder {
  color: transparent;
}
.form__field:placeholder-shown ~ .form__label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
}

.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #11998e, #38ef7d);
  border-image-slice: 1;
}
.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #11998e;
  font-weight: 700;
}

/* reset input */
.form__field:required, .form__field:invalid {
  box-shadow: none;
}
</style>