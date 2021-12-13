<template>
    <v-container id="background">
        <div>
            <h1 id="title">PetShop AuKiMia</h1>
            <v-spacer></v-spacer>
            <v-container>
                <img src="../assets/Pets.jpg" alt="Pets" width="500px" height="500px"/>
            </v-container>
        </div>
    </v-container>
</template>

<script>
export default {
    name: "Home",
    data: () => ({
    }),
    methods: {}
};
</script>

<style lang="scss">
    #background{
        background-repeat: repeat;
        background-attachment: fixed;
    }
    #title{
        @import url('https://fonts.googleapis.com/css2?family=Benne&family=Big+Shoulders+Stencil+Display:wght@600&family=Viaoda+Libre&display=swap');
        font-family: 'Big Shoulders Stencil Display', cursive, 'Benne', serif, 'Viaoda Libre';
    }
</style>