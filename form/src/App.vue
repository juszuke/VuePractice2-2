<template>
  <div id="app">
    <keep-alive>
      <transition>
        <router-view/>
      </transition>
    </keep-alive>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: #2c3e50;
}

.button {
  margin: 30px;
}

.control {
  margin: 10px 0;
}

.message {
  margin: 0 100px;
}

.v-enter {
  opacity: 0;
}

.v-enter-active {
  transition: 0.5s;
}

#year > .vs__dropdown-toggle {
  width: 200px;
}

#month, #day > .vs__dropdown-toggle {
  width: 110px;
}

p {
  margin: 10px 0;
}
</style>
