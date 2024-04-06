var button = document.querySelector(" form button");

var input = document.querySelector("form input");

var countryImage = document.querySelector("img");

button.addEventListener("click", (event) => {
  event.preventDefault();
  var inpval = input.value;
  var country = inpval.toUpperCase();

  countryImage.src = `https://flagsapi.com/${country}/shiny/64.png`;

  countryImage.addEventListener("error", function () {
    countryImage.src =
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtNTg2YmF0Y2gyLWVtb2ppLTAyNmMtMS1tb2NrdXBfMy5qcGc.jpg";
  });
});
