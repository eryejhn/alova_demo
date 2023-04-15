import { useRequest } from 'alova';
import { userApi } from '@/api/user';

/**
 * @Description
 * @Author youus
 * @Date 2023/4/15 15:52
 * @Version v1.0.0
 *
 * Hello, humor
 */
export default function useUser() {
  const getUserInfo = () => {
    const { data, onSuccess } = useRequest(userApi.getData, {
      initialData: [],
    });

    return {
      userInfo: data,
      getUserInfoSucceed: onSuccess,
    }
  }

  const login = () => {
    const { data, onSuccess, send } = useRequest(userApi.login, {
      immediate: false,
    });

    return {
      loginSucceed: onSuccess,
      toLogin: send,
    }
  }

  const resetPassword = () => {
    const { onSuccess, send } = useRequest(userApi.pwdreset0, {
      immediate: false,
    });

    return {
      resetPasswordSucceed: onSuccess,
      toResetPassword: send,
    }
  }

  return {
    getUserInfo,
    login,
    resetPassword,
  }

}
