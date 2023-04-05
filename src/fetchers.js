import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export async function getData(endpoint) {
  try {
    const res = await axios.get(endpoint);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
}
