function calculateNumber(type, a, b) {
    roundeda = Math.round(a);
    roundedb = Math.round(b);

    if (type === 'SUM') return roundeda + roundedb;
    if (type === 'SUBTRACT') return roundeda - roundedb;
    if (type === 'DIVIDE') {
        if (roundedb === 0) return 'Error';
        return roundeda / roundedb;
    }
}

module.exports = calculateNumber
