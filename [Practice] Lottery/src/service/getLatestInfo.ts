import axios from "axios";
import { getLatestLottoDrwNo } from "@_utils/calculateDate";

export const getLatestLotto = async () => {
  const { data } = await axios.get(`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${getLatestLottoDrwNo()}`);
  return data;
};
