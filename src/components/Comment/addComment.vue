<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
          block
        >
          Add Comment
        </v-btn>
      </template>
      <v-card>
        <v-card-title align="center">
          <h2>Add Comment</h2>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                label="Name"
                v-model="newNama"
                filled
                rounded
                dense
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
              <v-text-field
                label="Add Id Post.."
                v-model="newIdpost"
                filled
                rounded
                dense
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                label="Add your comment here..."
                v-model="newComment"
                filled
                rounded
                dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*Tolong Masukan Id Post yang sesuai dan benar untuk menampilkan comment..</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addComment(dialog = false)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import gql from 'graphql-tag'
import { GET_MY_POST } from '../Posting/listPosting.vue'

const ADD_COMMENT = gql`
mutation MyMutation($write_comment: String!, $id_post: Int!, $nama: String!) {
  insert_comment(objects: {write_comment: $write_comment, id_post: $id_post, nama: $nama}) {
    affected_rows
    returning {
      write_comment
      updated_at
      id_post
      nama
      id
    }
  }
}`

export default {
    data: () => ({
      dialog: false,
      newComment: "",
      newNama: "",
      newIdpost: null,
      type: "posting"
    }),
    methods: {
    addComment: function(){
      const write_comment = this.newComment && this.newComment.trim()
      const id_post =  this.newIdpost && this.newIdpost.trim()
      const nama =  this.newNama && this.newNama.trim()
      this.$apollo.mutate({
        mutation: ADD_COMMENT,
        variables: {
          write_comment: write_comment,
          id_post: id_post,
          nama: nama
        },
        update: (cache, { data: { insert_comment }}) => {
          try {
            if(this.type == "posting"){
              const data = cache.readQuery({
                query: GET_MY_POST
              })
              const insertedComment = insert_comment.returning;
              data.comment.splice(0,0, insertedComment[0]);
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