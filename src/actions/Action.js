import { GET_SEVITA, GET_HYBRIDE } from "./types";
import { HybrideData } from "../components/hybrideProducts/HybrideData";
import { SevitaData } from "../components/sevita/SevitaData";

export const getHybride = () => {
  return function (dispatch) {
    dispatch({
      type: GET_HYBRIDE,
      products: HybrideData,
    });
  };
};
export const getSevita = () => {
  return function (dispatch) {
    dispatch({
      type: GET_SEVITA,
        products: [
          {
            id: 1,
            price: 35.0,
            title: "acapulco gold AAAA",
            image:
              "sevitaCannabisProduct/ACAPULCO-GOLD-AAAA-CANNABIS-$35.00.jpg",
            info:
              "lorecsofhvdshfvksvb<wjxvmch<ndslvcbxwckj bxwcslwuhcsqckjbxkc bkqw bcxw nk ncnnvnvnvbvccvcnvnvnvbnbvbcnccjvjvjvnvncncjcjcj<bwxc kcw",
            incart: false,
            count: 0,
            total: 0,
          },
          {
            id: 2,
            price: 32.0,
            image:
              "sevitaCannabisProduct/BRUCE-BANNER-AAAA-CANNABIS-$32.00.jpg",
            title: "Bruce banner AAAA",
            info:
              "lorecsofhvdshfvksvb<wjxvmch<ndslvcbxwckj bxwcslwuhcsqckjbxkc bkqw bcxw nk ncnnvnvnvbvccvcnvnvnvbnbvbcnccjvjvjvnvncncjcjcj<bwxc kcw",
            incart: false,
            count: 0,
            total: 0,
          },
          {
            id: 3,
            price: 22.0,
            title: "Durban Poison",
            image:
              "sevitaCannabisProduct/Buy-Durban-Poison-Cannabis-$22,260.00.jpg",
            info:
              "lorecsofhvdshfvksvb<wjxvmch<ndslvcbxwckj bxwcslwuhcsqckjbxkc bkqw bcxw nk ncnnvnvnvbvccvcnvnvnvbnbvbcnccjvjvjvnvncncjcjcj<bwxc kcw",
            incart: false,
            count: 0,
            total: 0,
          },
          {
            id: 4,
            price: 22.0,
            title: "LSD AA",
            image: "sevitaCannabisProduct/BUY-LSD-AA-CANNABIS-$25.jpg",
            info:
              "lorecsofhvdshfvksvb<wjxvmch<ndslvcbxwckj bxwcslwuhcsqckjbxkc bkqw bcxw nk ncnnvnvnvbvccvcnvnvnvbnbvbcnccjvjvjvnvncncjcjcj<bwxc kcw",
            incart: false,
            count: 0,
            total: 0,
          },
          {
            id: 5,
            price: 25.0,
            title: "MIMOSA-AAA",
            image: "sevitaCannabisProduct/BUY-MIMOSA-AAA-CANNABIS-$28.00.jpg",
            info:
              "lorecsofhvdshfvksvb<wjxvmch<ndslvcbxwckj bxwcslwuhcsqckjbxkc bkqw bcxw nk ncnnvnvnvbvccvcnvnvnvbnbvbcnccjvjvjvnvncncjcjcj<bwxc kcw",
            incart: false,
            count: 0,
            total: 0,
          },
          {
            id: 6,
            price: 32.0,
            title: "Moby Dick AAA",
            image:
              "sevitaCannabisProduct/Buy-Moby-Dick-AAA-Cannabis-$35.00.jpg",
            info:
              "lorecsofhvdshfvksvb<wjxvmch<ndslvcbxwckj bxwcslwuhcsqckjbxkc bkqw bcxw nk ncnnvnvnvbvccvcnvnvnvbnbvbcnccjvjvjvnvncncjcjcj<bwxc kcw",
            incart: false,
            count: 0,
            total: 0,
          },
          {
            id: 7,
            price: 17.0,
            title: "BRUCE BANNER AAAA",
            image: "sevitaCannabisProduct/Buy-Purple-Haze-Cannabis-$17.50.jpg",
            info:
              "lorecsofhvdshfvksvb<wjxvmch<ndslvcbxwckj bxwcslwuhcsqckjbxkc bkqw bcxw nk ncnnvnvnvbvccvcnvnvnvbnbvbcnccjvjvjvnvncncjcjcj<bwxc kcw",
            incart: false,
            count: 0,
            total: 0,
          },
          {
            id: 8,
            price: 24000.0,
            title: "BRUCE BANNER AAAA",
            image:
              "sevitaCannabisProduct/Buy-Purple-Haze-Cannabis-$24,280.00.jpg",
            info:
              "lorecsofhvdshfvksvb<wjxvmch<ndslvcbxwckj bxwcslwuhcsqckjbxkc bkqw bcxw nk ncnnvnvnvbvccvcnvnvnvbnbvbcnccjvjvjvnvncncjcjcj<bwxc kcw",
            incart: false,
            count: 0,
            total: 0,
          },
        ],
    });
  };
};
