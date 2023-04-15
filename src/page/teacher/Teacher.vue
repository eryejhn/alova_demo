<template>
  <div>teacher
    <p @click="toSubmit('account')">1234566</p>
    <p @click="resetPwd('account')">{{ userInfo.name }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import useUser from "@/composables/useUser.js";

export default {
  name: "Teacher",
  setup() {
    const account = ref('')
    const password = ref('123456')

    // TODO 得调试一下，知道逻辑同不同
    const user = useUser();

    const { userInfo, getUserInfoSucceed } = user.getUserInfo();

    const { toLogin, loginSucceed } = user.login();

    const { toResetPassword, resetPasswordSucceed } = user.resetPassword();

    getUserInfoSucceed((res) => {
      console.log(res)
    });

    const toSubmit = (_account) => {
      if (!_account) {
        alert('Please input a account');
        return;
      }
      account.value = _account;
      toLogin(account.value, password.value);
      loginSucceed((res) => {
        localStorage.setItem("X-Token", res.data.token);
      });
    };

    const resetPwd = (_account) => {
      if (!_account) {
        alert('Please input a account');
        return;
      }
      account.value = _account;
      toResetPassword(account.value);
      resetPasswordSucceed((res) => {
        console.log(res)
      });
    };


    return {
      userInfo,
      toSubmit,
      resetPwd
    }
  }
}
</script>

<style scoped>

</style>
