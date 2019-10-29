<h1>Dependency Checker</h1>
    <p>*Allows a user to check a github repo for updates, stability and vulnerabilities*</p>
    
<h3>Build Instructions</h3>
<ul>
    <li>npm start - Start webpack server</li>
    <li>npm run-script build - Build application</li>
</ul>

<h3>Testing Instructions</h3>
    <ol>
        <li>Run npm start or npm build to start Dependency checker</li>
        <li>Input user name and project of repo that you want to scan</li>
        <li>
            <p>Example of positive result:</p>
            <table>
                <tr>
                    <td>Package Name</td>
                    <td>Current</td>
                    <td>Latest</td>
                    <td>Stable</td>
                    <td>Vulnerable</td>
                </tr>
                <tr>
                    <td>JSONStream</td>
                    <td>1.3.5</td>
                    <td>Latest</td>
                    <td>Stable</td>
                    <td>Secure</td>
                </tr>
            </table>
            <p>Example of a negative result:</p>
            <table>
                <tr>
                    <td>Package Name</td>
                    <td>Current</td>
                    <td>Latest</td>
                    <td>Stable</td>
                    <td>Vulnerable</td>
                </tr>
                <tr>
                    <td>escape-string-regexp</td>
                    <td>1.0.5</td>
                    <td>Outdated - New Version: 2.0.0</td>
                    <td>Unstable</td>
                    <td>Insecure</td>
                </tr>
            </table>
        </li>
    </ol>    
