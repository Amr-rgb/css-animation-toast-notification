const toast = document.getElementById("toastWrapper");
const firstText = document.getElementById("firstText");
const lastText = document.getElementById("lastText");
const btn = document.getElementById("btn");
const closeBtn = document.getElementById("closeBtn");

const func = (status) => {
  if (!toast.classList.contains("active")) {
    toast.classList.remove("fail", "success");

    if (status === "success") {
      firstText.innerText = "Success";
      lastText.innerText = "Your changes has been saved";
    } else {
      firstText.innerText = "Fail";
      lastText.innerText = "Your changes has not been saved";
    }

    toast.classList.add(status);
    toast.classList.add("active");
    removeClass = setTimeout((_) => {
      toast.classList.remove("active");
    }, 5000);
  }
};

btn.addEventListener("click", () =>
  func(Math.round(Math.random()) ? "fail" : "success")
);

closeBtn.addEventListener("click", () => {
  toast.classList.remove("active");
  clearTimeout(removeClass);
});
