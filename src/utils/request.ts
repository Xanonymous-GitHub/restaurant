// import http from 'http'
// import https from 'https'
// import axios, {AxiosResponse, AxiosRequestConfig, CancelTokenStatic} from "axios";
// import {Message, MessageBox} from "element-ui";
// import qs from 'qs'
//
// class Request {
//   protected baseURL: any = process.env.VUE_APP_BASE_API;
//   protected service: any;
//   protected pendding: Array<{
//     url: string,
//     cancel: Function
//   }> = [];
//   protected CanelToken: CancelTokenStatic = axios.CancelToken;
//   protected AxiosRequestConfi: AxiosRequestConfig = {};
//   protected successCode: Array<number> = [200, 201, 204];
//   private static _instance: Request;
//
//   constructor() {
//   }
//
//   protected requestConfig(): void {
//   }
//
//   protected interceptorsRequest() {
//   }
//
//   protected interceptorsResponse(): void {
//   }
//
//   protected removePending(config: any): void {
//   }
//
//   public async post(url: string, data: any = {}, config: object = {}) {
//   }
//
//   public async delete(url: string, config: object = {}) {
//   }
//
//   public async put(url: string, data: any = {}, config: object = {}) {
//   }
//
//   public async get(url: string, params: any = {}, config: object = {}) {
//   }
//
//   protected requestLog(request: any): void {
//   }
//
//   protected responseLog(response: any): void {
//   }
// }
// }
