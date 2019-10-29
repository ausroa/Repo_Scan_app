import React, {Component} from 'react';
import Utils from '../../hoc/Utils';
import classes from './Search.css';

import ResultTable from "../ResultTable/ResultTable";

class SearchDependency extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
            showResults: false,
            error: false,
            noDataFound: false,
            user: null,
            repo: null
        };
    }

    async searchRepo() {
        const base64 = require('base-64');
        const user = document.getElementById('userInput').value;
        const repo = document.getElementById('repoInput').value;
        const url = 'https://api.github.com/repos/' + user + '/' + repo + '/contents/package-lock.json';
        if (user && repo) {
            const response = await fetch(url).catch((e) => {});
            const data = await response.json();
            if (data.message !== 'Not Found') {
                let dataDecoded = await JSON.parse(base64.decode(data.content));
                dataDecoded = dataDecoded.dependencies;
                this.setState({
                    value: dataDecoded,
                    showResults: true,
                    error: false,
                    noDataFound: false,
                    user: user,
                    repo: repo
                });
            } else {
                this.setState({
                    value: null,
                    showResults: false,
                    error: false,
                    noDataFound: true
                });
            }
        } else {
            this.setState({
                value: null,
                showResults: false,
                error: true,
                noDataFound: false
            });
        }
    }

    render() {
        return (
            <Utils>
                <div className="search">
                    <label htmlFor="userInput">Enter User Name: </label>
                    <input id="userInput" type="text" className="search-input" />
                    <label htmlFor="repoInput" className="project-label">Enter Project Name: </label>
                    <input id="repoInput" type="text" className="search-input" />
                    <button className="search-button" onClick={() => this.searchRepo()}>Check</button>
                </div>
                {this.state.showResults ? <ResultTable search={this.state.value} user={this.state.user} repo={this.state.repo}/> : null}
                {this.state.error ? <div className="error">Enter a valid username and repo name combination</div> : null}
                {this.state.noDataFound ? <div className="error">No package-lock.json file found</div> : null}
            </Utils>
        );
    }
}

export default SearchDependency;

