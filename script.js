const binInput = document.querySelector(".bin");
const decOutput = document.querySelector(".dec");
const convertBtn = document.querySelector(".convert");
const clearBtn = document.querySelector(".clear");

const regex = /^[01]+$/g; // 1 or 0 only regex

convertBtn.addEventListener("click", () => {
  let arr = [];
  for (let i = 0; i < binInput.value.length; i++) {
    arr.push(2 ** i);
  }
  const newArr = arr.reverse(); // Reverse decimal order from right to left
  const inputArr = binInput.value;
  let resultArr = []; // New array for storing the multiplication of binary and decimal arrays
  for (let j = 0; j < inputArr.length; j++) {
    resultArr.push(newArr[j] * inputArr[j]);
  }
  let sum = 0; // Sum all numbers in array
  for (let r = 0; r < resultArr.length; r++) {
    sum += resultArr[r];
  }

  if (!inputArr) {
    alert("Your input is empty.");
  } else {
    if (regex.test(inputArr)) {
      decOutput.value = sum;
    } else {
      alert("You can only input 1 or 0.");
      binInput.value = "";
      decOutput.value = "";
    }
  }
});

clearBtn.addEventListener("click", () => {
  window.location.reload();
});
