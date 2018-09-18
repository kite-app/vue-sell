<template>
  <div class="home">
      <h1>商户列表</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Merchant extends Vue {
  hello: string = 'hello'

  created() {
    console.log(this.hello);
  }
}
</script>
