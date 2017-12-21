<template>
<<<<<<< HEAD
<b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">Erepo</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

   

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item right>

      <b-navbar-nav>
      <b-nav-item href="#">Login | Sign Up</b-nav-item>
    </b-navbar-nav>
               
      </b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>
=======
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">Project Repo</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
>>>>>>> 996221d4050570e3e3db7738608f212d130bc859

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
<<<<<<< HEAD
export default {
    name: 'Erepo'
}    
</script>
=======
  export default {
    name: 'NavBar',
    data() {
      return {
        user: null,
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
>>>>>>> 996221d4050570e3e3db7738608f212d130bc859
