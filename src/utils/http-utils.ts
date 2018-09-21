/*
 * @Author: kite 
 * @Date: 2018-09-21 14:42:06 
 * @Last Modified by: kite
 * @Last Modified time: 2018-09-21 19:13:53
 */
import axios from 'axios';

export const AxiosHttp = {

  /**
   * 
   * @param path 
   * @param config 
   */
  get(path: string,config?: AxiosRequestConfig): any{
    return axios.get(path, config).then((res)=> {
      return res.data;
    }).catch( (error)=> {
        console.log(error);
    });
  },

  /**
   * 
   * @param path 
   * @param params 
   * @param header 
   */
  post(path: string, params = {}, config?: AxiosRequestConfig){
    const Config = config || {};
    if(Config.headers && Config.headers['Content-Type'] === 'application/x-www-form-urlencoded'){
      params = JSON.stringify(params);
    }
    return axios.post(path, params, Config.headers).then((res)=>{
      return res.data;
    }).catch(error=>{
      console.log(error)
    })
  }

}

export interface AxiosRequestConfig {
  url?: string;
  method?: string;
  baseURL?: string;
  headers?: any;
  params?: any;
  data?: any;
  timeout?: number;
}