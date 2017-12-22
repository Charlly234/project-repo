<template>
  <b-container fluid>
    <b-row class="my-5">

      <b-container>
        <b-row class="justify-content-center">
          <b-col md="8">
            <h3>Project Upload Page</h3>
            <b-form class="my-5">
              <b-form-group label="Project Title" label-for="projectTitle" description="Enter a title that suits your project" :label-cols="4"
                breakpoint="lg" invalid-feedback="Enter a valid project title" :state="!errors.has('title')">
                <b-form-input id="projectTitle" name="title" v-model.trim="title" v-validate="{required: true, min: 2}" type="text"></b-form-input>
              </b-form-group>

              <b-form-group label="Author" description="Enter the author of this project" label-for="projectAuthor" :label-cols="4" breakpoint="md"
                invalid-feedback="Please enter an author" :state="!errors.has('author')">

                <b-form-input id="projectAuthor" name="author" v-model.trim="author" v-validate="{required:true,min:2}" type="text"></b-form-input>
              </b-form-group>


              <b-form-group label="Date" description="Enter the date this project was published" label-for="projectDate" :label-cols="4"
                breakpoint="md" invalid-feedback="Please enter a valid date" :state="!errors.has('date')">

                <b-form-input id="projectDate" name="date" v-model.trim="date" v-validate="{required:true,date: true}" type="date"></b-form-input>
              </b-form-group>

            </b-form>

            <!-- Be sure to track the changes in the tags as you use them -->


          </b-col>
        </b-row>

      </b-container>


    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'UploadPage',
    data() {
      return {
        title: '',
        author: '',
        date: ''
      }
    }
  }

</script>
