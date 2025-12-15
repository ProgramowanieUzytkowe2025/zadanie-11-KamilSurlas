import React, { useState, useEffect } from 'react';
import AppActionButton from './AppActionButton';
import AppCalculationHistory from './AppCalculationHistory';

const AppCalculator = () => {
    const [valA, setValA] = useState('');
    const [valB, setValB] = useState('');
    const [result, setResult] = useState('');
    const [comparisonMsg, setComparisonMsg] = useState('');
    const [history, setHistory] = useState([]);

    useEffect(() => {
        if (valA === '' || valB === '') {
            setComparisonMsg('Wprowadź obie liczby, aby porównać.');
            return;
        }

        const numA = parseFloat(valA);
        const numB = parseFloat(valB);

        if (isNaN(numA) || isNaN(numB)) {
            setComparisonMsg('Wartości muszą być liczbami.');
        } else if (numA > numB) {
            setComparisonMsg('Liczba A jest większa od liczby B');
        } else if (numA < numB) {
            setComparisonMsg('Liczba A jest mniejsza od liczby B');
        } else {
            setComparisonMsg('Liczba A jest równa liczbie B');
        }
    }, [valA, valB]);

    const handleCalculate = (operation) => {
        const numA = parseFloat(valA);
        const numB = parseFloat(valB);

        if (operation === '/' && numB === 0) {
            alert("Nie można dzielić przez zero!");
            return;
        }

        let res = 0;
        switch (operation) {
            case '+': res = numA + numB; break;
            case '-': res = numA - numB; break;
            case '*': res = numA * numB; break;
            case '/': res = numA / numB; break;
            default: return;
        }

        setResult(res);

        const newHistoryItem = {
            id: Date.now(),
            a: valA,
            b: valB,
            operation: operation,
            result: res,
        };
        setHistory([...history, newHistoryItem]);
    };

    const handleRestore = (index) => {
        const record = history[index];
        setValA(record.a);
        setValB(record.b);
        setResult(record.result);
        const newHistory = history.slice(0, index + 1);
        setHistory(newHistory);
    };

    const isActionDisabled = valA === '' || valB === '';

    return (
        <div className="calculator-container">
            <h2>Kalkulator</h2>
            
            <div className="input-group">
                <label>
                    Liczba A: 
                    <input 
                        type="number" 
                        value={valA} 
                        onChange={(e) => setValA(e.target.value)} 
                        className="calc-input"
                    />
                </label>
                <label>
                    Liczba B: 
                    <input 
                        type="number" 
                        value={valB} 
                        onChange={(e) => setValB(e.target.value)} 
                        className="calc-input"
                    />
                </label>
            </div>

            <div className="actions-group">
                <AppActionButton label="+" onClick={() => handleCalculate('+')} disabled={isActionDisabled} />
                <AppActionButton label="-" onClick={() => handleCalculate('-')} disabled={isActionDisabled} />
                <AppActionButton label="*" onClick={() => handleCalculate('*')} disabled={isActionDisabled} />
                <AppActionButton label="/" onClick={() => handleCalculate('/')} disabled={isActionDisabled} />
            </div>

            <div className="result-group">
                <strong>Wynik działania: </strong>
                <input type="text" value={result} readOnly className="result-input" />
            </div>

            <div className="comparison-group">
                <strong>Status porównania: </strong>
                <span>{comparisonMsg}</span>
            </div>

            <hr />

            <AppCalculationHistory history={history} onRestore={handleRestore} />
        </div>
    );
};

export default AppCalculator;