<template>
  <div class="home">
      <h1>merchant</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AxiosHttp } from '../../utils/http-utils';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// @Component({
//   components: {
//     HelloWorld,
//   },
// })

// export default Vue.extend({
// // hello: string = 'hello'
//   data() {
//     return {
//         hello: 'ts'
//     }
//   },
//   created() {
//     AxiosHttp.get('http://www.xialangschool.cn/wap/token/getToken?code=1111111111111').then((res) => {
//       console.log(res);
//     })
//   }
// })

@Component
export default class Merchant extends Vue {

    hello: string = 'ts';
    
    created() {
      this.initData();
    }

    async initData() {
      let res = await AxiosHttp.get('http://www.xialangschool.cn/wap/token/getToken?code=1111111111111');
    }
}
</script>
