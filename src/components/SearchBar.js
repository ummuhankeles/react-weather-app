import React, { Component } from "react";

class SearchBar extends Component {
    render() {
        return (
            <div>
            <div className="col-sm-12">
                <form className="search-box text-center">
                <input
                    onChange={this.props.searchCity}
                    type="text"
                    placeholder="search city..."
                />
                <button
                    onClick={this.props.showList}
                    type="button"
                    className="btn btn-light"
                >
                    Search
                </button> 
                </form>
            </div>
            </div>
        );
    }
}

export default SearchBar;
