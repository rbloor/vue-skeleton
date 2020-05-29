<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Registration form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field :error-messages="errors.name" label="Name" v-model="form.name" prepend-icon="mdi-account" type="text"></v-text-field>
              <v-text-field :error-messages="errors.email" label="Email" v-model="form.email" prepend-icon="mdi-email" type="text"></v-text-field>
              <v-text-field
                :error-messages="errors.password"
                label="Password"
                v-model="form.password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
              <v-text-field
                :error-messages="errors.password_confirmation"
                label="Password Confirmation"
                v-model="form.password_confirm"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click.prevent="register" color="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import User from "../apis/User"

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      errors: []
    }
  },

  methods: {
    register() {
      User.register(this.form)
        .then(() => {
          this.$router.push({ name: "Login" })
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors
          }
        })
    }
  }
}
</script>
