document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const menu = document.querySelector(".menu");

  show = false;

  function toggleSidebar() {
    show = !show
    if (!show) {
      sidebar.style.width = "250px";
    } else if (show) {

      sidebar.style.display = "none";
      menu.style.width = "240px";
      // Reset to default width
    }
  }

  // Attach the toggle function to the button
  const toggleButton = document.querySelector("#toggleMenuButton");
  toggleButton.addEventListener("click", toggleSidebar);
});


let dropArea = document.getElementById('dropArea');
let fileUpload = document.getElementById('fileInput');
let image = document.getElementById('image');
let uploadButton = document.getElementById('fileUpload');

function displayImage(file) {
  if (file && file.type.startsWith('image/')) {
    let imgLink = URL.createObjectURL(file);
    image.style.backgroundImage = `url(${imgLink})`;
    image.style.backgroundSize = 'cover';
    image.style.backgroundPosition = 'center';
  } else {
    alert('Please upload a valid image file.');
  }
}


fileUpload.addEventListener('change', function () {
  if (fileUpload.files.length > 0) {
    displayImage(fileUpload.files[0]);
  }
});


uploadButton.addEventListener('click', function () {
  fileUpload.click();
});

dropArea.addEventListener('dragover', function (e) {
  e.preventDefault();
  dropArea.style.borderColor = "green";
});


dropArea.addEventListener('dragleave', function () {
  dropArea.style.borderColor = "steelblue";
});


dropArea.addEventListener('drop', function (e) {
  e.preventDefault();
  dropArea.style.borderColor = "steelblue";
  let files = e.dataTransfer.files;
  if (files.length > 0) {
    displayImage(files[0]);
  }
});
let show = false;
let profile = document.getElementById('profile');
let form = document.getElementById('form-custom');
function toggleMenu() {
  show = !show


  var sidebar = document.querySelector('.sidebar-2');

  profile.classList.toggle('increase');
  sidebar.classList.toggle('hidden');
  form.classList.toggle('enlarge');


}
function toggleMenu() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('collapsed');
}
