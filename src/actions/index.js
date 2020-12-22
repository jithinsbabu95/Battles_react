import api from "../apis/battles";

//SAction creator



export const battleFilter = (filter) => {
  //Return an acction

  return {
    type: "BATTLE_SELECTED",
    payload: filter,
  };
};

export const searchText = (filter) => {
  //Return an acction

  return {
    type: "SEARCH_TEXT",
    payload: filter,
  };
};

export const filterSelected = (filter) => {
  //Return an acction

  return {
    type: "FILTER_SELECTED",
    payload: filter,
  };
};

export const fetchBattle = (search_text) => {
  console.log(search_text);
  let params = Object.keys(search_text).length === 0 ? {} : search_text;
  console.log(params, "params");

  return async function (dispatch) {
    const response = await api.get(`/search`, {
      params,
    });
    dispatch({
      type: "FETCH_BATTLE",
      payload: response,
    });
  };
};

export const fetchBattleList = () => {
  return async function (dispatch) {
    const response = await api.get(`/list`);
    dispatch({
      type: "FETCH_BATTLE_LIST",
      payload: response,
    });
  };
};
