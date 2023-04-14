<template>
  <div>teacher
    <p @click="submit('account')">1234566</p>
    <p @click="pwdreset1('account')">{{ data.name }}</p>
  </div>
</template>

<script>
import {ref} from 'vue';
import {getData, login,pwdreset0} from '@/api/user.ts';
import {useRequest} from 'alova';

export default {
  name: "Teacher",
  setup() {
    const account = ref('')
    const password = ref('123456')
   //官方写法 这样好像一个vue里只能写一个请求
    const {data, loading, error, onSuccess} = useRequest(getData, {
      initialData: [],
    });
    onSuccess((res) => {
      console.log(res.data)
    });

    //我自己发现的 支持setup里写多个请求
    const submit = (account1) => {
      if (!account1) {
        alert('Please input a account');
        return;
      }
      account.value = account1
      response.send();
      response.onSuccess(res=> {
        console.log(res.data)
        let token = res.data.token
        localStorage.setItem("X-Token",token)
      })
    };
    const pwdreset1 = (accountNo) =>{
      account.value = accountNo
      resp.send()
      resp.onSuccess(res=> {
        console.log(res.data)
      })
    }
    const resp = useRequest(() => pwdreset0(account.value), {
      immediate: false,
    });
    const response = useRequest(() => login(account.value,password.value), {
      immediate: false,
    });

    return {data, submit,pwdreset1}
  }
}
</script>

<style scoped>

</style>
