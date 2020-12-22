import { combineReducers } from "redux";



const selectFilter = (
  selectedFilter = { location: null, battle: null, type: null },
  action
) => {
  if (action.type == "BATTLE_SELECTED") {
    selectedFilter["battle"] = action.payload;
  } else if (action.type == "LOCATION_SELECTED") {
    selectedFilter["location"] = action;
  } else if (action.type == "TYPE_SELECTED") {
    selectedFilter["type"] = action;
  }
  return selectedFilter;
};

const battleList = (battleList = [], action) => {
  if (action.type == "FETCH_BATTLE") {
    return action.payload;
  }
  return battleList;
};

const uniqueBattleList = (uniqueBattles = [], action) => {
   
    if (action.type == "FETCH_BATTLE_LIST") {
      return action.payload.data||[];
    }
    return uniqueBattles;
  };

const searchText = (search_text = null, action) => {
  if (action.type == "SEARCH_TEXT") {
    return action.payload;
  }
  return search_text;
};


const filterSelected = (filter_selected = null, action) => {
    if (action.type == "FILTER_SELECTED") {
      return action.payload;
    }
    return filter_selected;
  };

export default combineReducers({
  selectFilter: selectFilter,
  battleList: battleList,
  searchText: searchText,
  uniqueBattleList:uniqueBattleList,
  filterSelected:filterSelected,
});
