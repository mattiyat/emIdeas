<template>
  <v-app>
    <v-navigation-drawer temporary v-model="drawer" absolute>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.text }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="cyan darken-1">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Exploremoar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.text">
          <v-icon dark left>{{item.icon}}</v-icon>
          {{item.text}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        menuItems: [
          { icon: 'supervisor_account', text: 'View Ideas'},
          { icon: 'room', text: 'Organize Meetup'},
          { icon: 'person', text: 'Profile'},
          { icon: 'face', text: 'Sign Up'},
          { icon: 'lock_open', text: 'Sign In'},
          
        ]
      }
    }
  }
</script>
