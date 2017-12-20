<template>
  <b-container fluid>
  
    <b-row>
  
      <b-container>
  
  
  
        <b-row class="justify-content-center">
  
  
  
          <b-col md="4">
  
  
  
            <h2> Permission </h2>
  
            <p> {{status? "Happy": "Sad"}} </p>
  
            <b-button @click="status = !status" :variant="status ? 'danger' : 'success' ">
  
              {{status? "Sad": "Happy"}}
  
            </b-button>
  
  
  
          </b-col>
  
        </b-row>
  
      </b-container>
  
    </b-row>
  
  </b-container>
</template>

<script>
  export default {
  
    name: 'HelloWorld',
  
    data() {
  
      return {
  
        status: false
  
      }
  
    }
  
  }
</script>

<style scoped>
  
</style>