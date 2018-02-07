<template>
    <v-container>
        <v-layout row wrap v-for="idea in ideas" :key="idea.id" class="mb-2">
            <v-flex x12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="info">
                    <v-container>
                        <v-layout row>
                            <v-flex xs5 sm4 md3>
                                <v-card-media
                                :src="idea.imageUrl"
                                height="130px">
                                </v-card-media>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                 <v-card-title primary-title>
                                    <div>
                                        <h5 class="white--text">{{idea.title}}</h5>
                                        <div>Eink screen with low profile, and wireless charging to dynamically display art, sayings, reminders, alerts</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn dark :to="'/idea/' + idea.id">View Idea</v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        computed: {
            ideas() {
                return this.$store.getters.loadedIdeas
            }
        }
    }
</script>