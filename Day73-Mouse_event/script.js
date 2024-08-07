const xEvent = document.getElementById("x-event");
const yEvent = document.getElementById("y-event");

window.addEventListener("mousemove", (e) => {
  xEvent.innerHTML = `${event.clientX}
    <h4>Mouse X position(px)</h4>
  `;
  yEvent.innerHTML = `${event.clientY}
    <h4>Mouse Y position(py)</h4>
  `;
});