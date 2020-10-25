<template>
  <div class="data container">
    <div class="insert-data">
      <h4 class="center-align">Inserir Dados</h4>
      <p class="center-align">Utilize o formulártio abaixo para inserir dados antropométricos.</p>
      <form @submit.prevent="addPersonData">
        <div class="field personName">
          <label for="personName">Nome:</label>
          <input type="text" name="personName" v-model="personName" />
        </div>
        <div class="field personAge">
          <label for="personAge">Idade:</label>
          <input type="text" name="personAge" v-model="personAge" />
        </div>
        <div class="field personHight">
          <label for="personHight">Altura:</label>
          <input
            type="number"
            name="personHight"
            v-model="personHight"
          />
        </div>
        <div class="field personWeight">
          <label for="personWeight">Peso:</label>
          <input
            type="number"
            name="personWeight"
            v-model="personWeight"
          />
        </div>
        <div class="field center-align">
          <button class="btn">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "InsertData",
  data() {
    return {
      personName: null,
      personHight: null,
      personWeight: null,
      personAge: null
    };
  },
  methods: {
    addPersonData() {
        let person = {
        nome: this.personName,
        altura: this.personHight,
        peso: this.personWeight,
        idade: this.personAge,
        idEscola: 22
      }
      const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const url = "https://hacka-saude-desiderata.herokuapp.com/aluno"
      const res = axios.post((proxyurl + url), person)
      console.log(res)
      alert("Dados Inseridos!")
    },
  },
};
</script>

<style scoped>
form button {
  margin-top: 10px;
}

.insert-data p {
    margin: 20px;
}
</style>