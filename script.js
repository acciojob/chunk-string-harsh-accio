function stringChop(str, size) {
  let result = [];

  size = Number(size); // convert input to number
  if (size <= 0) throw new Error("Chunk size must be greater than 0");

  if (size >= str.length) {
    result.push(str);
    return result; // return array
  }

  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String:");
const size = prompt("Enter Chunk Size:");
alert(stringChop(str, size));
