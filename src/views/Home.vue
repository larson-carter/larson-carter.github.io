<template>
  <div class="home">
    <HomeComponent msg="Welcome to Larson's webpage"/>
    <FooterComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'Home',
  components: {
    HomeComponent,
    FooterComponent
  }
}
</script>
