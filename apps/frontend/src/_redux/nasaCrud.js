import axios from 'axios';
import { NASA_KEY } from '../vars';

export const NASA_API_URL = `http://localhost:4000/apods`;

export function getApod() {
  return axios.get(NASA_API_URL);
}