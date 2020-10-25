<template>
  <div class="Reports container">
    <h4 class="center-align">Dados antropométricos cadastrados:</h4>
    <div class="buttons">
      <button class="waves-effect waves-light btn-small">Filtrar</button>
      <button class="waves-effect waves-light btn-small">Exportar</button>
    </div>
    <div class="responsive-table">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Peso (Kg)</th>
            <th>Altura(cm)</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="person in persons" :key="person.id">
            <td>{{ person.nome }}</td>
            <td>{{ person.idade }}</td>
            <td>{{ person.peso }}</td>
            <td>{{ person.altura }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import json from "@/components/person.json"
import axios from 'axios'
export default {
  name: "Reports",
  data() {
    return {
      persons: []
    }
  },
  methods: {
    
  },
  beforeMount() {
      const proxyurl = "https://cors-anywhere.herokuapp.com/"
      const url = "https://hacka-saude-desiderata.herokuapp.com/aluno"
      axios.get(url).then(res => {
        this.persons = res.data
        console.log(this.persons)
    })
    .catch(function(err){
        console.log(err);
    })
      
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin: 20px;
}

.buttons {
  margin-top: 30px;
  align-content: left;
}
</style>
