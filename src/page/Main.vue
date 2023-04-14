<template>
  <div @click="turnTo('/teacher')">Main</div>
  <router-view/>
</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "Main",
  setup() {
    const router = useRouter();

    function turnTo(path) {
      router.push(path);
    }

    return {
      turnTo
    }
  },

}
</script>

<style scoped>

</style>
