<template>
  <b-container fluid>
    <b-row class="my-5">
      <b-col sm="3"> <label="Title of paper"> </b-col>
      
      <b-col sm="9"><b-form-input v-model="Title" type="text" placeholder="Enter your name"> </b-form-input></b-col>

     
             </b-form-group> 

       <b-col sm="3"><label="Author"><Type:'text'></label></b-col>
      <b-col sm="9"><b-form-input :id="Author" :type="text"></b-form-input></b-col>

       <b-col sm="3"><label="Date"><Type: 'date'></label></b-col>
     <b-col sm="9"><b-form-input :id="Date" :type="date"></b-form-input></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      types: [
        'text', 'date',
      ]
    }
  }
}
</script>
