import React from "react";

export default function Tab(props) {

  return (<div className="table">

    <div className="tabhead"><h1>TABLE</h1></div>
    <table>
      <tr>
        <th>Long URL</th>
        <th>Short URL</th>

      </tr>
      <tbody>{
        props.long.map(
          (val, ind) => {
            return (<tr><td>{val}</td>
              <td>{props.short[ind]}</td></tr>)
          }

        )
      }</tbody>
    </table>  </div>
  )
}