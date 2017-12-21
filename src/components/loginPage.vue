<template>
  <b-container fluid>
    <b-row class="my-5">
      <b-container>
        <b-row>
          <b-col md="4">
            <h2>Login</h2>
            <b-form @submit.prevent="login">
              <b-form-group 
              label="Email" 
              label-for="email" 
              breakpoint="md" 
              :label-cols="4"
              invalid-feedback="Sorry that doesn't seem right"
              :state="!errors.has('email')">
                <b-form-input id="email" name="email" v-validate="{required: true, email: true}" type="email" v-model="email"></b-form-input>
              </b-form-group>

              <b-form-group 
              label="Password" 
              label-for="password" 
              breakpoint="md" 
              :label-cols="4"
              invalid-feeback="That doesn't seem like a password"
              :state="!errors.has('password')"
              >
                <b-form-input v-model="password" name="password" v-validate="{required: true}" type="password"></b-form-input>
              </b-form-group>

            <input type="submit" value="Submit" class="btn btn-primary">
            </b-form>
          </b-col>
          <b-col md="8">
            <h2>Signup</h2>
          </b-col>
        </b-row>
      </b-container>
    </b-row>

  </b-container>


</template>


<script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      login() {

        this.$validator.validateAll().then(result =>{
            if (result) {
                alert('Email ' + this.email)
                
            }
            // Send credentials to server for login auth 
        })
      }
    },
    computed: {
      resolvedError: {
        get() {
          if (this.error == 404) {
            return 'Oops, Something happened'
          } else if (this.error == 403) {
            return 'Wrong username or password'
          } else {
            return 'Something happened , please try again'
          }
        },
        set(value) {
          this.error = value;
        }
      }
    }
  }

</script>
