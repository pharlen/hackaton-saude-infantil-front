<template>
  <div class="Index container">
    <div class="greet">
      <h4>Bem Vindo ao e-Saúde</h4>
      <p>Sistema de coleta e gerenciamento de dados sobre Saúde Infantil.</p>
    </div>
    <form class="center-align">
      <div class="login">
        <input type="text" name="username" placeholder="Usuário" />
        <input type="password" name="password" placeholder="Senha" />
        <button class="btn" type="button">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.greet {
  margin-top: 60px;
}

h4{
  text-align: center;
}
form {
  margin: 30px 0 30px 0;
}
form button {
  margin-top: 30px;
}
p{
  text-align: center;
}
</style>
