function formatPhoneNumber(value) {
    if(!value) return value;
    const phoneNum = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNum.length;
    if (phoneNumberLength < 4) return phoneNum;
    if (phoneNumberLength < 7) {
        return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3)}`;
    }
    return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(
        3,
        6,
        )}-${phoneNum.slice(6, 9)}`;
}

function phoneNumberFormat() {
    const inputField = document.getElementById('phoneNumber');
    const formattedInputValue = formatPhoneNumber(inputField.value);
    inputField.value = formattedInputValue;
}