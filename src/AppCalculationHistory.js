import React from 'react';

const AppCalculationHistory = ({ history, onRestore }) => {
  if (history.length === 0) return <p className="no-history">Brak historii działań.</p>;

  return (
    <div className="history-container">
      <h3>Historia działań</h3>
      <table className="history-table" border={1}>
        <thead>
          <tr>
            <th>Lp.</th>
            <th>Liczba A</th>
            <th>Liczba B</th>
            <th>Działanie</th>
            <th>Wynik</th>
            <th>Akcja</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.a}</td>
              <td>{item.b}</td>
              <td>{item.operation}</td>
              <td>{item.result}</td>
              <td>
                <button 
                  className="restore-btn" 
                  onClick={() => onRestore(index)}
                >
                  Przywróć
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppCalculationHistory;