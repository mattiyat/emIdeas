<template>
   <v-container>
       <v-layout row wrap>
           <v-flex xs12>
               <v-card>
                   <v-card-title>
                       <h3 class="primary--text">{{ idea.id }}</h3>
                   </v-card-title>
                   <v-card-media
                        :src="idea.imageUrl"
                        height="400px">
                    </v-card-media>
                    <v-card-text>
                        <div class="info--text">E-Ink Screen for Personalized Notes</div>
                        <div>Eink screen with low profile, and wireless charging to dynamically display art, sayings, reminders, alerts</div>
                        
                    </v-card-text>
                    <v-card-actions>
                        
                        <v-spacer></v-spacer>
                        <v-btn class="primary">Fund</v-btn>
                    </v-card-actions>
               </v-card>
           </v-flex>
       </v-layout>
   </v-container>
</template>

<script>
    export default {
        props: ['id'],
        computed: {
            idea() {
                return this.$store.getters.loadedIdea(this.id)
            }
        }
    }
</script>