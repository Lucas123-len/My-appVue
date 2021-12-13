<template>
  <v-card >
    <v-row>
      <v-col class="mb-10"></v-col>
    </v-row>

      <v-row dense>
        <v-col cols="8">
          <v-card id="cards">
            <div>
              <div>
                <v-card-title class="headline">Sobre Nós</v-card-title>
                <v-card-text class="text--primary">
                  Esse site é voltado para compra de produtos básicos para seu pet, para que eles tenham o melhor do melhor.
                </v-card-text>
                <v-card-actions>
                  <v-btn class="mx-2" fab dark small color="blue darken-4" >
                    <v-icon dark>mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn  class="mx-2" fab dark small color="orange" >
                    <v-icon dark>mdi-instagram</v-icon>
                  </v-btn>
                  <v-btn  class="mx-2" fab dark small color="red accent-4" >
                    <v-icon dark>mdi-email</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
              <v-col class="mb-13"></v-col>
            </div>
          </v-card>
        </v-col>
      </v-row>
  </v-card>
</template>

<style scoped>
  #cards{
    left: 25%;
  }
  #t{
  
    bottom: 80%
  }
  
</style>

<script>
export default {
  name: 'About',
  components: {},
  data: () => ({
    //
  }),
};
</script>