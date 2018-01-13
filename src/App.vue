<template>
  <v-app>
    <v-navigation-drawer temporary v-model="drawer" absolute>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.text" 
        router :to="item.link">
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
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Exploremoar</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.text"
        router :to="item.link">
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
          { icon: 'supervisor_account', text: 'View Ideas', link: '/idea'},
          { icon: 'room', text: 'Log Idea', link: '/idea/new'},
          { icon: 'person', text: 'Profile', link: '/profile'},
          { icon: 'face', text: 'Sign Up', link: '/signup'},
          { icon: 'lock_open', text: 'Sign In', link: '/signin'},
          
        ]
      }
    }
  }
</script>
