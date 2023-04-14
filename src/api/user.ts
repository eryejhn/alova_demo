import { alovaInst } from '../api';
export const getData = () => alovaInst.Get('/index/info');
export const login = (account,password) => alovaInst.Post('/index/login',{account,password});
export const pwdreset0 = (accountNo) => alovaInst.Post(`/user/pwdreset/${accountNo}`);
