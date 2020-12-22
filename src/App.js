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
      let a={}
    if(this.props.state.searchText)
      { a.king= this.props.state.searchText }
    if(this.props.state.filterSelected) {
        a.location=this.props.state.filterSelected
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
    
   await  this.props.filterSelected(input)
    this.filterByInput()
  }

  sortByInput(e) {
    let value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "desc";

    if (value.startsWith("price")) {
      // this.props.dispatch(sortByPrice({direction}))
      this.props.battleFilter(value + "ttt");
      this.props.fetchBattle({ search_text: this.props.state.searchText });
    } else {
      // this.props.dispatch(sortByAlphabet({direction}));
    }
  }

  render() {
    // let products = this.props.state.filteredProducts;
    let products = this.props.state.battleList.data;
    return (
      <div className="App">
        <div style={{ padding: "10px" }} >
          <div className="container">
            <h1 className="titles">GOT Battles</h1>
            {/* <h2 className="subtitle">
                                A detailed guide
                            </h2> */}
          </div>
        </div>

        {/* <div className='container'>
                        <nav className="pagination" role="navigation" aria-label="pagination">
                            <button className="button pagination-previous" onClick={() => {
                                this.previousPage()
                            }}>Previous
                            </button>
                            <button className="button pagination-next" onClick={() => {
                                this.nextPage()
                            }}>Next page
                            </button>
                            <ul className="pagination-list">
                                {
                                    [...Array(this.props.state.filteredPages)].map((value, index) => (
                                        <button
                                            className={`button pagination-link ${this.props.state.currentPage === index + 1 ? "is-current" : ""}`}
                                            aria-label="Page 1"
                                            onClick={() => this.goToPage(index + 1)}
                                            aria-current="page">
                                            {index + 1}
                                        </button>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div> */}

        {/* <section className='section'> */}
        <div className="container">
          <div style={{ padding: "10px" }}>
            <div
              className="flex-container"
              style={{ alignItems: "center" }}
            >
              <div class="search" style={{display: 'flex' }}>
                {/* <form class="search-form" > */}
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
                style={{ padding: '15px 0px 10px 0px', width: "280px" }}
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
                    <option value="" /* disabled selected */>
                      ALL
                    </option>
                    {this.props.state.uniqueBattleList.map((q) => (
                      <option value={q}>{q}</option>
                    ))}
                    {/* <option value='alphabet_asc'>Name - A-Z</option>
                                            <option value='alphabet_desc'>Name - Z-A</option>

                                            <option value='price_asc'>Price - Lowest to Highest</option>
                                            <option value='price_desc'>Price - Highest to Lowest</option> */}
                  </select>
                </div>
              </div>
              {/* <div className="control" style={{padding:'5px',width:'300px'}}>
                                    <div className="select">
                                        <select onChange={e => {
                                            this.sortByInput(e)
                                        }}>
                                            <option value="" disabled selected>Sort by</option>

                                            <option value='alphabet_asc'>Name - A-Z</option>
                                            <option value='alphabet_desc'>Name - Z-A</option>

                                            <option value='price_asc'>Price - Lowest to Highest</option>
                                            <option value='price_desc'>Price - Highest to Lowest</option>

                                        </select>
                                    </div>
                                </div> */}

              {/*  <div className='control' style={{minWidth: "300px"}}>
                                    <input onChange={e => {
                                        this.filterByInput(e);
                                    }} style={{width: "100%"}} placeholder='Filter by' type='text'/>
                                </div> */}
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
