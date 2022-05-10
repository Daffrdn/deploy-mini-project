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
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
      <v-divider></v-divider>
    <v-card-text >
      <div class="form__group">
        <input v-model="newPost"
          @keyup.enter="OnSubmit" type="input" class="form__field" required />
          <label class="form__label"> Add ur post..</label>
      </div>
        <v-card-actions>
    </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script>
import gql from 'graphql-tag'
import { GET_MY_POST } from './listPosting.vue'

const ON_SUBMIT = gql`
  mutation OnSubmits($write_post: String!) {
  insert_post(objects: {write_post: $write_post}) {
    affected_rows
    returning {
      id
      write_post
      updated_at
    }
  }
}`

  export default {
    // props: ['type'],
    data: () => ({
      newPost: "",
      type: "posting",
    }),
  methods: {
    OnSubmit: function(){
      const write_post = this.newPost && this.newPost.trim()
      this.$apollo.mutate({
        mutation: ON_SUBMIT,
        variables: {
          write_post: write_post
        },
        update: (cache, { data: { insert_post }}) => {
          try {
            if(this.type == "posting"){
              const data = cache.readQuery({
                query: GET_MY_POST
              })
              const insertedPost = insert_post.returning;
              data.post.splice(0,0, insertedPost[0]);
              cache.writeQuery({
                query: GET_MY_POST,
                data
              })
            }
          } catch (error) {
            console.log(error)
          }
        }
      })
      this.newPost = "";
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