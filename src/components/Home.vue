/* eslint-disable */
<template>
<v-container>
    <v-layout row wrap>
        <v-flex xs12>
            <v-carousel>
                <v-carousel-item
                 v-for="idea in ideas" 
                v-bind:src="idea.imageURL" 
                :key="idea.id">
                    <div class="title">{{idea.title}}</div>
                </v-carousel-item>
            </v-carousel>
        </v-flex>
    </v-layout>
    <v-layout row class="actionButtons">
        <v-flex xs12 md6 class=" text-xs-center text-sm-right">
            <v-btn secondary large router to="/idea">Explore Ideas</v-btn>
        </v-flex>
        <v-flex xs12 md6 class="text-xs-center text-sm-left">
            <v-btn secondary large router to="/idea/new">Submit Ideas</v-btn>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
    export default {
        data() {
            return {
                ideas: [
                    {imageURL: require('../assets/cali.jpg'), 
                    id: 'awrresdf2234', title: 'Ideas from California'},
                    {imageURL: require('../assets/ny.jpg'), 
                    id: 'awrresdf2234', title: 'Ideas from NewYork'},
                    {imageURL: require('../assets/mars.jpg'), 
                    id: 'awrresdf2234', title: 'Ideas from Mars'}
                    
                ]
            }
        }
    }
</script>

<style scoped>
    .title {
        position: absolute;
        bottom: 400px;
        color: white;
        font-size: 10em;
    }

    .actionButtons {
        padding: 20px;
    }
</style>