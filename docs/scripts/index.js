function gallery(parentId) {
  var previewImgs = document.querySelectorAll("#" + parentId + " .preview img");

  function removeAllClassActive(previewImgs) {
    previewImgs.forEach(function (el) {
      el.classList.remove("active");
    });
  }

  previewImgs.forEach(function (el) {
    el.addEventListener("click", function (e) {
      removeAllClassActive(previewImgs);
      e.target.classList.add("active");
      document.querySelector("#" + parentId + " .view").src = e.target.src;
    });
  });
}
//--------------------------------------------------------------
gallery("certificates");
gallery("thanks");
