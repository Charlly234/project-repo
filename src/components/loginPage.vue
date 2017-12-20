<template>
   <div> 
     <h2>Login</h2>
     <form> 
     <label>Email </label>
     <input type="text" required/>
     <label>Password </label>
     <input type="password" required />
     </form>
   </div>
</template>

<script>

export default {
  data(){
      return{

      }
  },
  methods:{

  }

}
</script>

<style> 
#Login *{
    box-sizing: border-box;
}
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
input[type="password"], textarea{
    display: block;
    width: 20%;
    padding: 8px;
}
</style>
