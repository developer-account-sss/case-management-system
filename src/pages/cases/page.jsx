import { Link } from "react-router-dom";
import styles from './page.module.css';

const Cases = () => {
    return (
        <>
            <div className="container-fluid" style={{ padding: '0 0.5em' }}>
                <div className="row">

                </div>
            </div>
            <h1>Your Cases</h1>
            <table className={`table table-striped table-bordered ${styles.table}`}>
                <thead>
                    <tr>
                        <th scope="col">Case Number</th>
                        <th scope="col">Case Name</th>
                        <th scope="col">Date opened</th>
                        <th scope="col">Date closed</th>
                        <th scope="col">Status</th>
                        <th scope="col">Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><Link to= '/case-details/1'>Case 111</Link></td>
                        <td>12- 02- 2023</td>
                        <td>N.A</td>
                        <td>Open</td>
                        <td>Criminal</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td><Link to= '/case-details/1'>Case 2232</Link></td>
                        <td>12- 02- 2023</td>
                        <td>N.A</td>
                        <td>Open</td>
                        <td>Civil</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td><Link to= '/case-details/1'>Case 23453</Link></td>
                        <td>12- 02- 2023</td>
                        <td>N.A</td>
                        <td>Open</td>
                        <td>Criminal</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Cases;