document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const menu = document.querySelector(".menu");

  show=false;

  function toggleSidebar() {
   show=!show
    if (!show) {
      sidebar.style.width = "250px";
    } else if(show) {

      sidebar.style.display="none";
      menu.style.width="240px";
       // Reset to default width
    }
  }

  // Attach the toggle function to the button
  const toggleButton = document.querySelector("#toggleMenuButton");
  toggleButton.addEventListener("click", toggleSidebar);
});
