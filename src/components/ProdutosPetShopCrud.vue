<template>
  <v-container>
    <v-row>
      <v-col class="mb-5"></v-col>
    </v-row>
        <v-app-bar id="nav-bar"  color="#03DAC6" dark>
          <v-toolbar-title>
            <h3>Produtos para seu pet</h3>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <div>
            <v-btn icon>
              <v-icon>mdi-cart</v-icon>
            </v-btn>
              <v-btn>R$ {{total}}</v-btn>
          </div>
          <v-btn  @click="limparProdutos()" text>Limpar</v-btn>
        </v-app-bar>
    <v-container>
      <v-row>
        <v-col v-for="(prod, i) in produtos" :key="i" cols="8">
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between" >
              <v-avatar class="ma-1"  size="120" tile>
                <v-img :src="prod.imagem"></v-img>
              </v-avatar>
              <div>
                <v-card-title class="headline" v-text="prod.descricao"></v-card-title>
                <v-card-text class="text--primary">
                  <div class="display-1 text--primary" v-text="'R$ '+prod.preco"></div>
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="addProdutos(prod.preco, prod)" class="mx-2" fab dark small color="blue darken-2" >
                    Add
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
      
  </v-container>
</template>

<style scoped>
</style>

<script>
import axios from "axios";
  export default {
    name: 'ProdutosPetShopCrud',
    data: () => ({
      total: 0,
      carrinho: [],
      produtos : [
        {
          imagem: "", 
          id: 0,
          descricao: "ração",
          preco: 160
        }
      ],
    }),
    methods:{
      inicializa() {
      axios("http://localhost:3000/produtos")
        .then((response) => {
          this.produtos = response.data;
        })
        .catch((error) => console.log(error));
      },
      addProdutos(valorProduto, item){ 
        const t = this.total + valorProduto;
        this.total = parseFloat(t.toFixed(2));
        this.carrinho.push(item);
      },
      limparProdutos(){
        this.total = 0;
        this.carrinho = [];
      },
    },
    created() {
      this.inicializa();
    },
  };
</script>