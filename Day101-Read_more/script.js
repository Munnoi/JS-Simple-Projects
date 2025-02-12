function readMore() {
  const dots = document.getElementById("dots");
  const more = document.getElementById("more");
  const btn = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Read More";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Read Less";
    more.style.display = "inline";
  }
}