<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field v-model="form.email" :error-messages="errors.email" label="Email" prepend-icon="mdi-email" type="email"></v-text-field>
              <v-text-field
                v-model="form.password"
                :error-messages="errors.password"
                label="Password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click.prevent="login" color="primary">Login</v-btn>
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
        email: "",
        password: ""
      },
      errors: {}
    }
  },

  methods: {
    login() {
      User.login(this.form)
        .then(() => {
          this.$root.$emit("login", true)
          localStorage.setItem("auth", "true")
          this.$router.push({ name: "Dashboard" })
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
