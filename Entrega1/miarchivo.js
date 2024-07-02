function calcularEdadPromedio() {
    const agesInput = document.getElementById('agesInput').value;
    const agesArray = agesInput.split(',').map(age => parseInt(age.trim(), 10));

    if (agesArray.some(isNaN)) {
        document.getElementById('resultado').textContent = 'Ingresa edades válidas.';
        return;
    }

    const totalAges = agesArray.reduce((sum, age) => sum + age, 0);
    const averageAge = totalAges / agesArray.length;

    document.getElementById('resultado').textContent = `La edad promedio es: ${averageAge.toFixed(2)}`;}