<template>
<b-container fluid
<b-row>
<b-container>


<b-row class="justify-content-center">
<b-col md="6" class="text-center">
<h2 class="my-2"> Project Name: Erepo </h2>
<h5 class="my-2"> Project Description: Development of a Research Project Repository </h5>
<img :src="image" height="75" width="75"/>

</b-col>

</b-row>

</b-container>
</b-row>
</b-container>
</template>

<script>
    export default {
        name: 'LandingPage',
        data(){
            return {
                image: '../../static/cu.jpg'
            }
        }
    }
</script>


<style scoped>

</style>