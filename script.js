function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
      console.log(response.json());
    })
    .then((data) => {
      const adviceId = data.slip.id;
      const advice = data.slip.advice;
      const h4Element = document.querySelector("h4");
      h4Element.textContent = `ADVICE  #${adviceId}`;
      const adviceDisplay = document.getElementById("adviceDisplay");
      adviceDisplay.textContent = `"${advice}"`;
    })
    .catch((error) => {
      console.error("There was a problem fetching advice:", error);
    });
}

const circleDiv = document.querySelector(".circle");
circleDiv.addEventListener("click", fetchAdvice);
