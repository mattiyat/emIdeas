<template>
    <v-container>
        <v-layout row class="pt-2">
            <v-flex xs12 sm6 offset-sm3>
                <h2 class="primary--text">Submit your Idea</h2>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="onLogIdea">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                            name="title"
                            label="Title"
                            id="title"
                            v-model="title"
                            required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                            name="abstract"
                            label="Abstract"
                            id="abstract"
                            v-model="abstract"
                            required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                            name="imageUrl"
                            label="Image Url"
                            id="image-url"
                            v-model="imageUrl"
                            required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imageUrl" height="150" xs10 sm6 offset-sm3>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs10 sm6 offset-sm3>
                            <v-text-field
                            name="description"
                            label="Technical Description"
                            id="description"
                            v-model="description"
                            required
                            multi-line>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 sm6 offset-sm3>
                            <h2>Choose a Meeting Time</h2>
                        </v-flex>
                    </v-layout>     
                    <v-layout>
                        <v-flex xs1 sm6 offset-sm2>
                            <v-date-picker v-model="picker"></v-date-picker>
                            {{ submittableDateTime }}
                        </v-flex>
                        <v-flex xs12 sm6 >
                            <v-time-picker v-model="time"></v-time-picker>
                            {{ time }}
                        </v-flex>
                    </v-layout>
                    
                        
                    
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn 
                            class="primary"
                            :disabled="!formIsValid"
                            type="submit">Submit</v-btn>
                            {{ submittableDateTime}}
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                title: '',
                abstract: '',
                imageUrl: '',
                description: '',
                date: new Date(),
                time: new Date()
            }
        },
        computed: {
            formIsValid() {
                return this.title !== '' &&
                this.abstract !== '' &&
                this.imageUrl !== '' &&
                this.description !== ''
            },
            submittableDateTime () {
                const date = new Date(this.date)
                if (typeof this.time === 'string') {
                    const hours = this.time.match(/^(\d+)/)[1]
                    const minutes = this.time.match(/:(\d+)/)[1]
                    date.setHours(hours)
                    date.setMinutes(minutes) 
                } else {
                date.setHours(this.time.getHours())
                date.setMinutes(this.time.getMinutes())
                }
                
                console.log(date)
                return date
            }
        },
        methods: {
            onLogIdea () {
                if (!this.formIsValid) {
                    return
                }
                const ideaData = {
                    title: this.title,
                    abstract: this.abstract,
                    imageUrl: this.imageUrl,
                    description: this.description,
                    date: new submittableDateTime
                }
                this.$store.dispatch('logIdea', ideaData)
                this.$router.push('/idea/idealist')
            }
        }
    }
</script>