document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('numberInput');
    const factorizeBtn = document.getElementById('factorizeBtn');
    const resultDiv = document.getElementById('result');

    const getPrimeFactors = (n) => {
        const factors = [];
        let divisor = 2;

        while (divisor * divisor <= n) {
            while (n % divisor === 0) {
                factors.push(divisor);
                n = Math.floor(n / divisor);
            }
            divisor++;
        }
        if (n > 1) {
            factors.push(n);
        }
        return factors;
    };

    const handleFactorization = () => {
        const inputValue = numberInput.value;
        const num = parseInt(inputValue);

        resultDiv.innerHTML = '';
        resultDiv.className = 'result-area';

        if (!inputValue || isNaN(num)) {
            resultDiv.innerHTML = '<span class="error">Please enter a valid number.</span>';
            return;
        }

        if (num <= 1) {
            resultDiv.innerHTML = '<span class="error">Please enter a number greater than 1.</span>';
            return;
        }

        const factors = getPrimeFactors(num);

        const factorCounts = {};
        factors.forEach(factor => {
            factorCounts[factor] = (factorCounts[factor] || 0) + 1;
        });

        const resultParts = Object.keys(factorCounts).map(factor => {
            const count = factorCounts[factor];
            return count > 1 ? `${factor}<sup>${count}</sup>` : factor;
        });

        resultDiv.innerHTML = resultParts.join(' × ');
    };

    factorizeBtn.addEventListener('click', handleFactorization);

    numberInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleFactorization();
        }
    });
});
