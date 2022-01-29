// javascript code block

cancelBtn = document.querySelector(".alert-cancel-btn");
alertContainer = document.querySelector("#alert-cancel");

cancelBtn.addEventListener("click",()=>{
    alertContainer.style.display="none";
});