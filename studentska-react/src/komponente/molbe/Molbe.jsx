import React from "react";
import './Molbe.css';

const Molbe = ({ molbe, setMolbe }) => {

    const handleDelete = (index) => {
      const updatedMolbe = [...molbe];
      updatedMolbe.splice(index, 1);
      setMolbe(updatedMolbe);
    };
  
    return (
      <div className="molbe-container">
        <h2>Molbe</h2>
        <table className="molbe-table">
          <thead>
            <tr>
              <th>Ime studenta</th>
              <th>Broj indeksa</th>
              <th>Email</th>
              <th>Molba</th>
              <th>Operacije</th>  
            </tr>
          </thead>
          <tbody>
            {molbe.map((molba, index) => (
              <tr key={index}>
                <td>{molba.ime}</td>
                <td>{molba.indeks}</td>
                <td>{molba.email}</td>
                <td>{molba.molba}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Obrisi molbu</button>  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Molbe;