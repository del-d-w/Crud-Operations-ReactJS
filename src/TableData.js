import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const TableData=({employeeData,editData,deleteData,handleGenderChange})=>{
    return(
        <>
        <table className='table table-striped' style={{margin:'auto',width:1100}}>
        <thead>
          <tr>
          <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>DOB</th>
            <th>City</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.salary}</td>
              <td>{employee.dob}</td>
              <td>{employee.city}</td>
              <td>{employee.address}</td>
              <td>
                <select className="form-control"
                  value={employee.gender}
                  onChange={(e) => handleGenderChange(employee.id, e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </td>
              <td width={100}>
                <EditIcon onClick={() => editData(employee.id)} style={{marginRight:20}} />
                <DeleteIcon onClick={() => deleteData(employee.id)} />
              </td>

            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}

export default TableData