import { get, post } from '@/api';


export const userApi = {
  getData: () => get('/index/info'),
  login: (account: string, password: string) => post('/index/login',{account,password}),
  pwdreset0: (accountNo: string) => post(`/user/pwdreset/${accountNo}`),
}
