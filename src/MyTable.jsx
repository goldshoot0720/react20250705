function MyTable({
  mytableth1,
  mytableth2,
  mytableth3,
  mytableth4,
  mytableth5,
  mytableth6,
  mytablecontent,
  showMytable4 = false,
  showMytable5 = false,
  showMytable6 = false,
  showMytablelink = false,
  showMytablemap = false,
}) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">{mytableth1}</th>
          <th scope="col">{mytableth2}</th>
          <th scope="col">{mytableth3}</th>
          {showMytable4 && <th scope="col">{mytableth4}</th>}
          {showMytable5 && <th scope="col">{mytableth5}</th>}
          {showMytable6 && <th scope="col">{mytableth6}</th>}
          {showMytablelink && <th scope="col">{mytableth5}</th>}
          {showMytablemap && <th scope="col">{mytableth6}</th>}
        </tr>
      </thead>
      <tbody>
        {mytablecontent.map((item, index) => (
          <tr key={index}>
            <td>{item.column1}</td>
            <td>{item.column2}</td>
            <td>{item.column3}</td>
            {showMytable4 && <td>{item.column4}</td>}
            {showMytable5 && <td>{item.column5}</td>}
            {showMytable6 && <td>{item.column6}</td>}
            {showMytablelink && (
              <td>
                <a href={item.link} target="_blank">
                  <img
                    src="internet.png"
                    title={item.title}
                    alt={item.alt}
                    width={"33px"}
                  />
                </a>
              </td>
            )}
            {showMytablemap && (
              <td>
                <a href={item.map} target="_blank">
                  <img
                    src="map.png"
                    title={item.title}
                    alt={item.alt}
                    width={"33px"}
                  />
                </a>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyTable;
