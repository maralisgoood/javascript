const isPalindrome = str => {
    return (
        str.split("").reverse().join() === str
    );
};

isPalindrome("madam");