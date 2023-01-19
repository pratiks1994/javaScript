const labelEl = document.querySelectorAll(".input-label")
const inputMail=document.getElementsByClassName("input-field-email")
const inputPassword = document.getElementsByClassName("input-field-password")




labelEl.forEach((label)=>label.innerHTML =label.innerText.split("").map((letter,idx) =>`<span style="transition-delay:${idx*50}ms">${letter}</span>`).join(""))

