<template>
  <b-container fluid>
    <b-row class="my-5">
      <b-container>
        <!-- Leave all the other text your put there on the landing page . -->
        <!-- Login and signup page , not a commercial -->

        <b-row class="justify-content-center">

          <b-col md="4" v-if="showLogin">
            <h3 class="text-center">Sign in to your account</h3>
            <b-form @submit.prevent="authUser" class="my-5">
              <b-form-group label="Email" label-for="email" breakpoint="md" :label-cols="4" invalid-feedback="Sorry that doesn't seem right"
                :state="!errors.has('email')">
                <b-form-input id="email" name="email" data-vv-delay="1000" v-validate="{required: true, email: true}" type="email" v-model="login.email"></b-form-input>
              </b-form-group>

              <b-form-group label="Password" label-for="password" breakpoint="md" :label-cols="4" invalid-feeback="That doesn't seem like a password"
                :state="!errors.has('password')">
                <b-form-input id="password" data-vv-delay="1000" v-model="login.password" name="password" v-validate="{required: true}" type="password"></b-form-input>
              </b-form-group>

              <input type="submit" value="Sign In" class="btn btn-primary">
              <b-button variant="outline-success" @click="showLogin=false">Create Account</b-button>
            </b-form>
          </b-col>


          <!-- I'll assume you just copied and pasted the code i wrote 😕  , not nice  -->
          <!-- You didn't even change the variable names -->
          <!-- I'll correct this but it'll be the last -->

          <b-col md="4" v-else>
            <h3 class="text-center">Create an account</h3>
            <b-form @submit.prevent="createUser" class="my-5">

              <b-form-group label="Name" label-for="name" breakpoint="md" :label-cols="4">
                <b-form-input data-vv-delay="1000" v-model="signup.name" name="name" v-validate="{required: true}" type="text"></b-form-input>
              </b-form-group>

              <b-form-group label="Email" label-for="semail" breakpoint="md" :label-cols="4" invalid-feedback="Sorry that doesn't seem right"
                :state="!errors.has('semail')">
                <b-form-input id="semail" data-vv-delay="1000" name="semail" v-validate="{required: true, email: true}" type="email" v-model="signup.email"></b-form-input>
              </b-form-group>


              <b-form-group label="Password" label-for="spassword" breakpoint="md" :label-cols="4" invalid-feedback="Enter a password with at least 6 characters"
                :state="!errors.has('spassword')">
                <b-form-input data-vv-delay="1000" id="spassword" v-model="signup.password" name="spassword" v-validate="{required: true, min: 6}"
                  type="password"></b-form-input>
              </b-form-group>


              <input type="submit" value="Continue" class="btn btn-primary">
              <b-button variant="outline-success" @click="showLogin=true">Already have an account</b-button>

            </b-form>
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
        showLogin: true,
        error: '',
        login: {
          email: '',
          password: ''
        },
        signup: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      authUser() {

        this.$validator.validateAll().then(result => {
          if (result) {
            alert('Successfully logged in ' + this.login.email)
          // Send credentials to server for login authentication 
          }
        })
      },
      createUser() {

        this.$validator.validateAll().then(result => {
          if (result) {
            alert('Successfully signed up ' + this.signup.name)
            // Send credentials to server to create user
          }
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
