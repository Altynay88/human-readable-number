module.exports = function toReadable(number) {
    const singleToTeen = [
        " ",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const doubleDigit = [
        " ",
        " ",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let strings = number.toString();

    if (number === 0) return "zero";
    if (number < 20) return singleToTeen[number];
    if (strings.length === 2) return doubleDigit[strings[0]] + " " + singleToTeen[strings[1]];
    if (strings.length === 3) {
        if (strings[1] === "0" && strings[2] === "0") {
            return singleToTeen[strings[0]] + " hundred"
        // } else if (strings[2] === "0") {
        //     return (
        //         singleToTeen[strings[0]] +
        //         " hundred " +
        //         doubleDigit[strings[1]]
        //     );
            } else {
            return (
                singleToTeen[strings[0]] +
                " hundred " +
                toReadable(+(strings[1] + strings[2]))
            );
        }
    }
}
