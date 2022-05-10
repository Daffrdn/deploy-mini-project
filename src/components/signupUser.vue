<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn

          max-width="500px"
          block
          color="black"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Sign Up
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h3>Sign <span class="green--text">Up</span></h3>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="4"
                md="6"
              >
                <v-text-field
            label="First Name"
            placeholder="First Name.."
            outlined
          ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                md="6"
              >
                <v-text-field
            label="Last Name"
            placeholder="Last Name.."
            outlined
          ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
            label="Username or E-mail"
            placeholder="Username or E-mail.."
            outlined
            required
          ></v-text-field>
              
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                  outlined
                ></v-text-field>

                  <v-radio-group
                    v-model="row"
                    row
                    >
                    <h3>Gender : </h3>
                    <v-radio
                        label="Male"
                        value="radio-1"
                    ></v-radio>
                    <v-radio
                        label="Female"
                        value="radio-2"
                    ></v-radio>
                    <v-radio
                        label="Other"
                        value="radio-3"
                    ></v-radio>
                    </v-radio-group>

                    <v-spacer></v-spacer>
                    <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                        v-model="date"
                        label="Birthday date"
                        prepend-icon="mdi-calender"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date"
                        :active-picker.sync="activePicker"
                        :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                        min="1950-01-01"
                        @change="save"
                    ></v-date-picker>
                    </v-menu>
                    </v-col>
            </v-row>
          </v-container>
          <v-divider></v-divider>
          <small>*indicates required field</small>
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
            @click="dialog = false"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      radioGroup: 1,
    }),
  }
</script>


<style>

</style>