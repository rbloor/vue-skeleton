<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="indigo" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item :key="index" :to="item.link">
            <v-list-item-content>
              {{ item.title }}
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>Recipe Book</v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <template v-for="(item, index) in items">
        <v-btn :key="index" :to="item.link" text class="hidden-sm-and-down">{{ item.title }}</v-btn>
      </template>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", link: "/" },
        { title: "Login", link: { name: "Login" } },
        { title: "Register", link: { name: "Register" } },
        { title: "Dashboard", link: { name: "Dashboard" } }
      ]
    }
  }
}
</script>

<style scoped></style>
