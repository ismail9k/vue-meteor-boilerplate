<template>
  <div>
    <app-navbar />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from '/imports/ui/components/AppNavbar';

export default {
  name: 'App',
  components: { AppNavbar },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'App',
    // all titles will be injected into this template
    titleTemplate: '%s | Vue Meteor',
  },
};
</script>
