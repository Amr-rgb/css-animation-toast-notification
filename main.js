const toast = document.getElementById("toastWrapper");
const btn = document.getElementById("btn");
const closeBtn = document.getElementById("closeBtn");

btn.addEventListener("click", () => {
  toast.classList.add("active");
  removeClass = setTimeout((_) => {
    toast.classList.remove("active");
  }, 5000);
});

closeBtn.addEventListener("click", () => {
  toast.classList.remove("active");
  clearTimeout(removeClass);
});

console.log(closeBtn);
