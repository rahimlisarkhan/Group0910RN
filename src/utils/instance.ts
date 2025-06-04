import axios from 'axios';
import chalk from 'chalk'; // npm install chalk (v4 for CommonJS support)
import LocalStorage from '../store/localStorage';
import { useAuthStore } from '../store/auth/auth.store';

const BASE_URL = 'https://api.sarkhanrahimli.dev/api/filmalisa/';

const instance = axios.create({
  baseURL: BASE_URL,
});

// Request Interceptor
instance.interceptors.request.use(
  (config) => {
    const method = config.method?.toUpperCase();
    const url = config.url;

    config.headers['Authorization'] = `Bearer ${LocalStorage.getItem(
      'access_token'
    )}`;

    config.headers['Accept-Language'] = LocalStorage.getItem('localization');

    if (method === 'POST') {
      console.log(chalk.green(`[POST] ${url}`));
      console.log(
        chalk.green(`Payload: ${JSON.stringify(config.data, null, 2)}`)
      );
    } else if (method === 'GET') {
      console.log(chalk.blue(`[GET] ${url}`));
      console.log(
        chalk.blue(`Params: ${JSON.stringify(config.params, null, 2)}`)
      );
    } else {
      console.log(chalk.yellow(`[${method}] ${url}`));
    }

    return config;
  },
  (error) => {
    console.error(chalk.red('Request Error:'), error);
    return Promise.reject(error);
  }
);

// Response Interceptor
instance.interceptors.response.use(
  (response) => {
    const method = response.config.method?.toUpperCase();
    const url = response.config.url;

    if (method === 'POST') {
      console.log(chalk.green(`[POST Response] ${url} ✅`));
    } else if (method === 'GET') {
      console.log(chalk.blue(`[GET Response] ${url} ✅`));
    } else {
      console.log(chalk.yellow(`[${method} Response] ${url} ✅`));
    }

    return response;
  },
  (error) => {
    const method = error.config?.method?.toUpperCase();
    const url = error.config?.url;

    if (method && url) {
      console.log(chalk.red(`[${method} Error] ${url} ❌`));
      if (error.response?.data) {
        console.log(
          chalk.red(
            `Error Data: ${JSON.stringify(error.response.data, null, 2)}`
          )
        );
      }
    } else {
      console.log(chalk.red('Network Error:'), error.message);
    }

    return error;
  }
);

export const logout = () => {
  // Remove token from local storage
  LocalStorage.removeItem('access_token');
  // Clear Authorization header from instance (assumes Axios or similar)
  instance.defaults.headers.common['Authorization'] = null;
  // Reset auth state
  useAuthStore.getState().actions.reset();
};

export default instance;
