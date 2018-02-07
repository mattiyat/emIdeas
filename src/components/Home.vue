/* eslint-disable */
<template>
<v-container>
    <v-layout row wrap>
        <v-flex xs12>
            <v-carousel hide-delimiters>
                <v-carousel-item
                 v-for="idea in ideas" 
                v-bind:src="idea.imageUrl" 
                :key="idea.id"
                @click="onLoadIdea(idea.id)">
                    <div class="title">{{idea.title}}</div>
                </v-carousel-item>
            </v-carousel>
        </v-flex>
    </v-layout>
    <v-layout row class="actionButtons">
        <v-flex xs12 md6 class=" text-xs-center text-sm-right">
            <v-btn secondary large router to="/idea/idealist">Explore Ideas</v-btn>
        </v-flex>
        <v-flex xs12 md6 class="text-xs-center text-sm-left">
            <v-btn secondary large router to="/idea/new">Submit Ideas</v-btn>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
    export default {
        computed: {
            ideas() {
                return this.$store.getters.featuredIdeas
            }
        },
        methods: {
            onLoadIdea (id) {npm 
                $router.push('/idea/' + id)
            }
        }
    }
</script>

<style scoped>
    .title {
        position: absolute;
        bottom: 400px;
        color: white;
        font-size: 100ex;
    }

    .actionButtons {
        padding: 20px;
    }
</style>