document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".category");
  const contents = document.querySelectorAll(".content");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");

      // Hide all content sections
      contents.forEach(section => section.style.display = "none");

      // Show the selected one
      const target = document.getElementById(targetId);
      if (target) target.style.display = "block";
    });
  });
});
