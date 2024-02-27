const UserTable = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>
              <th>User Phone Number</th>
              <th>User Name</th>
              <th>Total Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td><p className="text-xl font-normal">Phone Number</p></td>
              <td><p className="text-xl font-normal">Phone Number</p></td>
              <td><p className="text-xl font-normal">$</p></td>
              <td>
                <button className="btn mr-3">Block</button>
                <button className="btn">Manage</button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
