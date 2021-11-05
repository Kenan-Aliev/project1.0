import axios from "axios";

export async function getSmartphones({ commit }) {
  const smartphones = await axios(
    "https://serene-springs-35316.herokuapp.com/smartphone/getAll"
  );
  commit("smartphonesMutation", smartphones.data);
}

export async function addSmartphone({ commit }, data) {
  await axios.post(
    "https://serene-springs-35316.herokuapp.com/smartphone/add",
    data
  );
}
