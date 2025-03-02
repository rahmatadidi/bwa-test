document.addEventListener("DOMContentLoaded", () => {
  const inputs = [
    {
      type: "text",
      name: "Complete Name",
      label: "Full Name",
      placeholder: "Type Your Name",
      icon: "fa-regular fa-user",
    },
    {
      type: "ocupation",
      name: "Ocupation",
      label: "Ocupation",
      placeholder: "Type Your Ocupation",
      icon: "fa-solid fa-briefcase",
    },
    {
      type: "email",
      name: "Email Address",
      label: "Email Address",
      placeholder: "Type Your Valid Email Address",
      icon: "fa-regular fa-envelope",
    },
    {
      type: "password",
      name: "Password",
      label: "Password",
      placeholder: "Type Your Valid Password",
      icon: "fa-solid fa-key",
    },
    {
      type: "password",
      name: "Confirm Password",
      label: "Confirm Password",
      placeholder: "Type Your Valid Password",
      icon: "fa-solid fa-key",
    },
  ];

  const formSection = document.getElementById("form-section");

  inputs.forEach((input) => {
    const inputContainer = document.createElement("div");
    inputContainer.className = "input-container";

    const label = document.createElement("label");
    label.htmlFor = input.name;
    label.className = "input-label";
    label.textContent = input.label;

    const inputGroup = document.createElement("div");
    inputGroup.className = "input-group";

    const icon = document.createElement("i");
    icon.className = `input-icon ${input.icon}`;

    const inputField = document.createElement("input");
    inputField.type = input.type;
    inputField.name = input.name;
    inputField.placeholder = input.placeholder;
    inputField.className = "input-field";
    inputField.id = input.name;

    inputGroup.appendChild(icon);
    inputGroup.appendChild(inputField);
    inputContainer.appendChild(label);
    inputContainer.appendChild(inputGroup);
    formSection.appendChild(inputContainer);
  });
});
document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const preview = document.getElementById("preview");
        const overlay = document.getElementById("overlay");
        const deleteButton = document.getElementById("deleteButton");

        preview.src = e.target.result;
        preview.classList.remove("hidden");
        overlay.style.display = "none";
        deleteButton.classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    }
  });

// Event listener untuk tombol hapus
document.getElementById("deleteButton").addEventListener("click", function () {
  const preview = document.getElementById("preview");
  const overlay = document.getElementById("overlay");
  const fileInput = document.getElementById("fileInput");
  const deleteButton = document.getElementById("deleteButton");

  preview.src = "";
  preview.classList.add("hidden");
  overlay.style.display = "flex";
  fileInput.value = "";
  deleteButton.classList.add("hidden");
});
