const rating = document.querySelectorAll('.rating'); 
let selRating = document.querySelector(".selectedRating")
const submitBtn = document.querySelector(".submit")  
const modal = document.querySelector(".rating_modal")  
const thankYou = document.querySelector(".thank-you_wrapper")  
    
for (let i = 0; i < rating.length; i++) {
  rating[i].onclick = function(e) {
    let c = 0;
    while (c < rating.length) {
      rating[c++].className = 'rating';
    }
    rating[i].className = 'active';
    selRating.textContent = e.target.innerText
  };
 submit()
}

function submit(){
    submitBtn.addEventListener ("click", () => {
        modal.classList.add("hide")
        thankYou.classList.remove("hide")
    })
}