<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">Project Repo</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item to="/home" v-show="auth">Home</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/login" v-if="!auth">Login</b-nav-item>
        <b-nav-item-dropdown right v-else>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>{{user.name}}</em>
          </template>
          <b-dropdown-item to="/upload">Upload</b-dropdown-item>
          <b-dropdown-item to="/signout">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        user: null, //{name: 'Britney Lindey'},
        loggedIn: false
      }
    },
    methods: {

    },
    computed: {
      auth: {
        get() {
          return (this.user);
        },
        set(value) {
          this.user = value;
        }

      }
    }
  }

</script>
