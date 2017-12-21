<template>

  <div>
  <h2>Upload Page</h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Title of Paper:"
                    label-for="exampleInput1"
                   
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="form.title"
                      required
                      placeholder="Enter title">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Author:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.author"
                      required
                      placeholder="Enter name of author">
        </b-form-input>
      </b-form-group>
      
      
 </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Date:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="date"
                      v-model="form.date"
                      required
                      placeholder=" ">
        </b-form-input>
      </b-form-group>
      

      <b-button type="submit" variant="primary">Submit</b-button>
      
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        title: '',
        author: '',
        date: '',
        
      },
      
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
    
      this.form.email = '';
      this.form.password = '';
      
     
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
<style>
#Login{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 20%;
    padding: 8px;
}
input[type="date"], textarea{
    display: block;
    width: 20%;
    padding: 8px;
}

</style>