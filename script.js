var button = document.querySelector(" form button");

var input = document.querySelector("#selectCountry");

var countryImage = document.querySelector("img");


//rendering options
for (countryCode in countryList) {
  input.innerHTML += `
    <option value="${countryList[countryCode]}">${countryCode}</option>
    `;
}


// flag render handler
button.addEventListener("click", (event) => {
  event.preventDefault();

  var countryCode = input.value;
  countryImage.src = `https://flagsapi.com/${countryCode}/shiny/64.png`;

  countryImage.addEventListener("error", function () {
    countryImage.src =
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtNTg2YmF0Y2gyLWVtb2ppLTAyNmMtMS1tb2NrdXBfMy5qcGc.jpg";
  });
});
