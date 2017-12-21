<template>
  <b-container fluid>
    <b-row class="my-5">
      <b-container>
        <b-row>
          <b-col md="4">
            <h2>Upload</h2>
            
              <b-form-group 
              label="Title" 
              label-for="text" 
              breakpoint="md" 
              :label-cols="4"
              
              <b-form-input id="title" name="title" type="text" v-model="title"></b-form-input>
              </b-form-group>

              <b-form-group 
              label="Author" 
              label-for="text" 
              breakpoint="md" 
              :label-cols="4"
             
              >
                <b-form-input v-model="author" name="Author"  type="text"></b-form-input>
              </b-form-group>

            
            </b-form>
          </b-col>
          



          <b-col>
             <b-form>

            <input type="submit" value="Submit" class="btn btn-primary">
            </b-form>
          </b-col>
          

        </b-row>
      </b-container>
    </b-row>

  </b-container>


</template>

<script>
  export default {
    name: 'UploadPage3',
    data() {
      return {
        title: '',
        author: ''
    
      }
    }
  }
    methods: {

  }

</script>
