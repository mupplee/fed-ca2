// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          // Launch Bootstrap success modal
          const modal = new bootstrap.Modal(
            document.getElementById("exampleModal")
          );
          modal.show();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();