<script setup lang="ts">
//import { ref } from 'vue'

// 

</script>

<template>
  <nav>
        <a href="/home" target="_blank">
      <img src="../assets/suscodeicon.png" class="logo" alt="SusCode logo" />
    </a>
    <a> Feature </a>
    <a> Docs </a>
    <a> About </a>
    <a> Team </a>
    <a> Contact Us </a>
  </nav>
  
</template>

<style>
.logo {
  height: 4em;
  will-change: filter;
  transition: filter 300ms;
}
nav {
  background-color: #333;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100vw;

}
nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
nav a:hover {
  background-color: #ddd;
  color: black;
}
nav a.active {
  background-color: #646cffaa;
  color: white;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
  background-color: transparent;
}
</style>