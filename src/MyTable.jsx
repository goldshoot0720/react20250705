function MyTable({
  mytableth1,
  mytableth2,
  mytableth3,
  mytableth4,
  mytableth5,
  mytableth6,
  mytablecontent,
  showMytable5 = false,
  showMytable6 = false,
  showMytable5link = false,
  showMytable6map = false
}) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">{mytableth1}</th>
          <th scope="col">{mytableth2}</th>
          <th scope="col">{mytableth3}</th>
          <th scope="col">{mytableth4}</th>
          {showMytable5 && <th scope="col">{mytableth5}</th>}
          {showMytable6 && <th scope="col">{mytableth6}</th>}
          {showMytable5link && <th scope="col">{mytableth5}</th>}
          {showMytable6map && <th scope="col">{mytableth6}</th>} 
        </tr>
      </thead>
      <tbody>
        {mytablecontent.map((item, index) => (
          <tr key={index}>
            <td>{item.column1}</td>
            <td>{item.column2}</td>
            <td>{item.column3}</td>
            <td>{item.column4}</td>
            {showMytable5 && <td>{item.column5}</td>}
            {showMytable6 && <td>{item.column6}</td>}
            {showMytable5link && <td><a href={item.column5} target="_blank"><img src="internet.png" title={item.column3} alt={item.column5} width={"33px"}/></a></td>}
            {showMytable6map && <td><a href={item.column6} target="_blank"><img src="map.png" title={item.column3} alt={item.column6} width={"33px"}/></a></td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyTable;
