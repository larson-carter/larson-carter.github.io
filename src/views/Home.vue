<template>
  <div class="home">
    <HelloWorld msg="Welcome to Larson's webpage"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HomeComponent.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
