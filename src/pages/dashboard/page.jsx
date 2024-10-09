
const Dashboard = () => {
    return (
        <>
            <div className="container-fluid" style={{ padding: '0 0.5em' }}>
                <div className="row">

                </div>
            </div>
            <h1>Welcome to your Dashboard</h1>
            <table className="table table-striped table-bordered">
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
                        <td>Case 111</td>
                        <td>12- 02- 2023</td>
                        <td>N.A</td>
                        <td>Open</td>
                        <td>Criminal</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Case 2232</td>
                        <td>12- 02- 2023</td>
                        <td>N.A</td>
                        <td>Open</td>
                        <td>Civil</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Case 23453</td>
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

export default Dashboard;