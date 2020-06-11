<template>
  <div class="about">
    <AboutComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from '@/components/AboutComponent.vue'

export default {
  name: 'About',
  components: {
    AboutComponent
  }
}
</script>
