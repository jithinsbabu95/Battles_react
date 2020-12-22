import React, { Component } from "react";
import { connect } from "react-redux";
import "bulma/css/bulma.min.css";
import {
  battleFilter,
  fetchBattle,
  searchText,
  fetchBattleList,
  filterSelected,
} from "./actions/index";
import "./index.css";

class App extends Component {
  componentDidMount() {
    this.filterByInput();
    this.props.fetchBattleList();
  }

  filterByInput() {
    let a = {};
    if (this.props.state.searchText) {
      a.king = this.props.state.searchText;
    }
    if (this.props.state.filterSelected) {
      a.location = this.props.state.filterSelected;
    }
    this.props.fetchBattle(a);
  }
  updateSearchText(e) {
    console.log(this.props.state.searchText);
    let input = e.target.value;
    this.props.searchText(input);
  }

  async filterSelected(e) {
    let input = e.target.value;

    await this.props.filterSelected(input);
    this.filterByInput();
  }

  render() {
    let products = this.props.state.battleList.data;
    return (
      <div className="App">
        <div style={{ padding: "10px" }}>
          <div className="container">
            <h1 className="titles">GOT Battles</h1>
          </div>
        </div>

        <div className="container">
          <div style={{ padding: "10px" }}>
            <div className="flex-container" style={{ alignItems: "center" }}>
              <div class="search" style={{ display: "flex" }}>
                <input
                  type="text"
                  placeholder="Search for kings"
                  onChange={(e) => {
                    this.updateSearchText(e);
                  }}
                />
                <input
                  type="submit"
                  value="Search"
                  onClick={(e) => {
                    this.filterByInput(e);
                  }}
                ></input>
                {/* </form> */}
              </div>
              <div
                className="control"
                style={{ padding: "15px 0px 10px 0px", width: "280px" }}
              >
                <div className="select">
                  <select
                    onChange={(e) => {
                      this.filterSelected(e);
                    }}
                  >
                    <option value="" disabled selected>
                      Location
                    </option>
                    <option value="" /* disabled selected */>ALL</option>
                    {this.props.state.uniqueBattleList.map((q) => (
                      <option value={q}>{q}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="tile is-ancestor" style={{ flexWrap: "wrap" }}>
            {products &&
              products.length &&
              products.map((product) => (
                <div
                  className="tile is-parent is-3"
                  style={{ "margin-left": "13px", "margin-right": "50px" }}
                >
                  <div className="tile is-child box">
                    <p>
                      <b>Name: </b>
                      {product.name}
                    </p>
                    <p>
                      <b>battle_type: </b>
                      {product.battle_type}
                    </p>
                    <p>
                      <b>defender_king: </b>
                      {product.defender_king}
                    </p>
                    <p>
                      <b>attacker_king: </b>
                      {product.attacker_king}
                    </p>
                    <p>
                      <b>Location: </b>
                      {product.location}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("bgkjbgib", state);
  return { state };
};

export default connect(mapStateToProps, {
  battleFilter,
  fetchBattle,
  searchText,
  fetchBattleList,
  filterSelected,
})(App);
