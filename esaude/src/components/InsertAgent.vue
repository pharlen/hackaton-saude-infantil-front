<template>
  <div class="agents container">
    <div class="insert-agent">
      <h4 class="center-align">Cadastrar novo Agente</h4>
      <form @submit.prevent="addAgent">
        <div class="field agentName">
          <label for="agentName">Nome:</label>
          <input type="text" name="agentName" v-model="agentName" />
        </div>
        <div class="field agentSurname">
          <label for="agentSurname">Sobrenome:</label>
          <input
            type="text"
            name="agentSurname"
            v-model="agentSurname"
            class="validate"
          />
        </div>
        <div class="field agentPhone">
          <label for="agentPhone">Celular:</label>
          <input
            type="tel"
            name="agentPhone"
            placeholder="XX-9XXXX-XXXX"
            pattern="[0-9]{2}-[0-9]{9}"
            v-model="agentPhone"
          />
        </div>
        <div class="field agentBirth">
          <label for="agentBirth">Data de Nascimento:</label>
          <input type="date" name="agentBirth" v-model="agentBirth" />
        </div>
        <div class="field agentEmail">
          <label for="agentEmail">E-mail:</label>
          <input type="email" name="agentEmail" v-model="agentEmail" />
        </div>
        <div class="field agentRole">
          <label for="agentRole">Cargo:</label>
          <input type="text" name="agentRole" v-model="agentRole" />
        </div>
        <div class="field agentActive">
          <label for="agentActive">Ativar Agente?</label>
          <select
            class="browser-default"
            name="agentActive"
            v-model="agentActive"
          >
            <option value="" disabled selected>Selecione:</option>
            <option value="Sim">Sim</option>
            <option value="Nao">Não</option>
          </select>
        </div>
        <div class="field center-align">
          <button class="btn">Cadastrar</button>
        </div>
      </form>
    </div>
    <br>
    <div class="agent-list">
      <h4 class="center-align">Agentes</h4>
      <div class="responsive-table">
      <table>
        <thead>
          <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Celular</th>
              <th>Data de Nascimento</th>
              <th>Email</th>
              <th>Cargo</th>
              <th>Ativo?</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(agent, index) in agents" :key="index">
            <td>{{ agent.name }}</td>
            <td>{{ agent.surname }}</td>
            <td>{{ agent.phone }}</td>
            <td>{{ agent.birth }}</td>
            <td>{{ agent.email }}</td>
            <td>{{ agent.role }}</td>
            <td>{{ agent.active }}</td>
          </tr>
          </tbody>
          </table>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InsertAgent",
  data() {
    return {
      agentName: null,
      agentSurname: null,
      agentPhone: null,
      agentBirth: null,
      agentEmail: null,
      agentRole: null,
      agentActive: null,

      agents: [
        {
          name: "João",
          surname: "Silva",
          phone: "00-000000000",
          birth: "2020-10-17",
          email: "joao@esaude.com",
          role: "Agente de Saude",
          active: "Sim",
        },
        {
          name: "Ricardo",
          surname: "Fernandes",
          phone: "00-000000000",
          birth: "2020-10-17",
          email: "ricardo@esaude.com",
          role: "Agente de Saude",
          active: "Sim",
        },
        {
          name: "Roberta",
          surname: "Costa",
          phone: "00-000000000",
          birth: "2020-10-17",
          email: "roberta@esaude.com",
          role: "Professor",
          active: "Sim",
        },
        {
          name: "Lucia",
          surname: "Gimenez",
          phone: "00-000000000",
          birth: "2020-10-17",
          email: "lucia@esaude.com",
          role: "Professor",
          active: "Sim",
        }

      ],
    };
  },
  methods: {
    addAgent() {
        let agent = {
        name: this.agentName,
        surname: this.agentSurname,
        phone: this.agentPhone,
        birth: this.agentBirth,
        email: this.agentEmail,
        role: this.agentRole,
        active: this.agentActive
      }
      this.agents.push(agent);
      console.log(this.agents);
    },
  },
};
</script>

<style scoped>
form button {
  margin-top: 10px;
}

.agent-list {
    margin-bottom: 50px;
}
</style>