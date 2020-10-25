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
          <tr v-for="individual in individuals" :key="individual.id">
            <td>{{ individual.nome }}</td>
            <td>{{ individual.idade }}</td>
            <td>{{ individual.peso }}</td>
            <td>{{ individual.altura }}</td>
          </tr>
          </tbody>
          </table>
    </div>
  </div>
</template>

<script>
import json from '@/components/person.json'
export default {
  name: 'Reports',
  data () {
    return {
        individuals: json       
      /* individuals: [
        {id: 1, nome: 'Jonas Sampaio', altura: '146', peso: '40', idade: 13, idEscola: 22},
        {id: 2, nome: 'Alice Lima', altura: '149', peso: '56,5', idade: 15, idEscola: 22},
        {id: 3, nome: 'Luana Cardoso', altura: '133', peso: '31,2', idade: 10, idEscola: 22},
        {id: 4, nome: 'Ricardo Vieira', altura: '142', peso: '36,7', idade: 12, idEscola: 22},
        {id: 5, nome: 'Maria da Silva', altura: '145', peso: '42,3', idade: 12, idEscola: 22}
      ] */
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h4{
    margin: 20px;
}

.buttons {
    margin-top: 30px;
    align-content: left;
}

</style>
