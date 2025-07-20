window.onload = function () {
  const img = document.getElementById("product-img");
  const zoomBox = document.getElementById("zoom-box");

  const zoom = 3;

  // Show zoom box on hover
  img.addEventListener("mouseenter", function () {
    zoomBox.style.display = "block";
    zoomBox.style.backgroundImage = `url('${img.src}')`;
  });

  // Hide zoom box when mouse leaves
  img.addEventListener("mouseleave", function () {
    zoomBox.style.display = "none";
  });

  // Move zoom area with mouse
  img.addEventListener("mousemove", function (e) {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const bgX = (x / img.offsetWidth) * (img.offsetWidth * zoom);
    const bgY = (y / img.offsetHeight) * (img.offsetHeight * zoom);

    zoomBox.style.backgroundPosition = `-${bgX - zoomBox.offsetWidth / 2}px -${bgY - zoomBox.offsetHeight / 2}px`;
  });
};
