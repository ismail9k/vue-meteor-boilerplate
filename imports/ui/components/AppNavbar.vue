<template>
  <ul>
    <li v-for="route in routes" :key="route">
      <router-link :to="`/${route}`">
        {{ route }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppNavbar',
  data: () => ({
    routes: ['home', 'about'],
  }),
};
</script>
