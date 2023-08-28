function zeros(n) {
    let count = 0;

    // Count the number of factors of 5 in the factorial
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }

    return count;
}