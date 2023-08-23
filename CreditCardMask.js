// return masked string
function maskify(cc) {
    const ccLenght = cc.length;
    if (ccLenght < 4) return cc;
    let masked = "#".repeat(ccLenght - 4) + cc.slice(ccLenght - 4);
    return masked;
}
maskify('1234567890123456');
