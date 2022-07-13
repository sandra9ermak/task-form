const countryNumberSelect = document.getElementById("countryNumber");

countryNumberSelect.addEventListener("click", async () => {
  fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((result) => markUp(result))
    .catch((error) => console.log(error));
});

const markUp = (countryNumber) => {
  console.log(countryNumber);

  const render = countryNumber
    .map((item) => {
      return `
        <option value=${item.callingCodes} class="register_form-option">${item.alpha3Code}+${item.callingCodes}</option>
      `;
    })
    .join("");

  countryNumberSelect.innerHTML = render;
};
