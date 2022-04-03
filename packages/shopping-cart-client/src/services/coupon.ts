import { postRequest } from '../utils/apiHelper';
import { ApiData } from '../utils/interfaces';
const endpoint: string = "/coupon";

export const chaeckCoupon = (apiData: ApiData) => {
  postRequest(endpoint + "/check", apiData);
}