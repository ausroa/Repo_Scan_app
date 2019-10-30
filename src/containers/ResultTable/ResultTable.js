import React, {Component} from 'react';
import Utils from '../../hoc/Utils';
import classes from './ResultTable.css';

class ResultTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.createResultsList();
    }

    createResultsList() {
        const arrayList = [];

        if (this.props.search) {
            for (let [key, value] of Object.entries(this.props.search)) {
                if (key.startsWith('@')) {
                    key = null;
                    value = null;
                } else {
                    this.createPackageDisplay(key, value, arrayList).catch((e) => {});
                }
            }
        }
    }

    async createPackageDisplay(packageName, packageVersion, arr) {
        const response = await fetch('https://api.npms.io/v2/search?q=' + packageName).catch((e) => {});
        const data = await response.json();
        const l = data.results.length;
        for (let i = 0; i < l; i++) {
            if (data.results[i].package.name === packageName) {
                arr.push({result: data.results[i], current: packageVersion.version});
            }
        }

        this.setState({data: arr});
    }

    render() {
        return (
            <Utils>
                <table>
                    <tbody className="result-table">
                        <tr>
                            <td>Package Name</td>
                            <td>Current</td>
                            <td>Latest</td>
                            <td>Stable</td>
                            <td>Vulnerable</td>
                        </tr>
                        {this.state.data.map(el => (
                            <tr key={el.result.package.name}>
                                <td>{el.result.package.name}</td>
                                <td>{el.current}</td>
                                {el.current < el.result.package.version ? <td>Outdated - New Version: {el.result.package.version}</td> : <td>Latest</td>}
                                {el.result.flags && el.result.flags.hasOwnProperty(`unstable`) ? <td>Unstable</td> : <td>Stable</td>}
                                {el.result.flags && el.result.flags.hasOwnProperty(`insecure`) ? <td>Insecure</td> : <td>Secure</td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Utils>
        );
    }
}

export default ResultTable;