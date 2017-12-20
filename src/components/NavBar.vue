<template>
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


<script>
export default {
    name: 'Erepo'
}    
</script>