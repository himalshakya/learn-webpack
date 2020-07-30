const inputsAreValid = (...input) => input.every((num) => typeof num === 'number' && !Number.isNaN(num));

export default inputsAreValid;
