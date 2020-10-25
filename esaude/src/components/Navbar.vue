<template>
  <div class="navbar">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          <router-link to="/">
            e-Saude
          </router-link>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="">
              <router-link :to="{ name: 'InsertAgent'}">
                Agentes
              </router-link>
            </a>
          </li>
          <li>
            <a href="">
              <router-link :to="{ name: 'InsertData'}">
               Inserir Dados
              </router-link>
            </a>
          </li>
          <li>
            <a href="">
              <router-link :to="{ name: 'Reports'}">
                Visualizar Dados
              </router-link>
            </a>
          </li>
            <li>
            <a href="">
              <router-link :to="{ name: 'Account'}">
                <i class="material-icons" style="font-size: 30px">account_circle</i>
              </router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>







<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style>
.navbar nav {
  padding: 0 20px;
}

</style>