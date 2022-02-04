<template>
  <div class="row" v-if="account.id">
    <header>
      <Navbar />
      <SecondaryNavbar />
    </header>
  </div>
  <div class="row background-row">
    <div>
      <h1 class="display-1">DaVinki</h1>
    </div>
    <div>
      <h2>Simplicity is the ultimate sophistication</h2>
      <br />
      <h3>-"Leonardo da Vinci"</h3>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  }
}
</script> 

<style>
.background-row {
  min-height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1501472312651-726afe119ff1?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDI5fHxhcnR8ZW58MHx8fHwxNjQzOTI5NTg1&ixlib=rb-1.2.1&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450");
  background-position: 75%;
  background-size: cover;
}
/* We will math random these background images from the database */
</style>
