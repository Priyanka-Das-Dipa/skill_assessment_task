const AgentTable = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Agent Name</th>
              <th>Total Money</th>
              <th>Add Money</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td><p className="text-xl font-normal">$ </p></td>
              <td>
               data
              </td>
              <td>
                <button className="btn mr-3">Verify</button>
                <button className="btn">Approve</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentTable;
