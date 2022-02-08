// cancel button functionality

cancelBtn = document.querySelector(".alert-cancel-btn");
alertContainer = document.querySelector("#alert-cancel");

cancelBtn.addEventListener("click",()=>{
    alertContainer.style.display="none";
});


// close modal functionality
modalBox = document.querySelector(".modal-container");
modalOpen = document.querySelector(".modal-open");
modalClose = document.querySelector(".modal-cancel");

modalOpen.addEventListener('click',()=>{
    modalBox.style.display = "flex";
    document.body.style.overflow = 'hidden';
})

modalClose.addEventListener('click',()=>{
    modalBox.style.display = "none";
    document.body.style.overflow = 'auto';
    
})

//toast functionality
toastMsg = document.querySelector(".toast");
openToast = document.querySelector(".open-toast");

openToast.addEventListener('click',()=>{
    toastMsg.style.display="block";
    setTimeout(()=>{
        toastMsg.style.display="none";
    },3000)
})
