
let selectedCount = 0;
let totalPrice = 0
let buttons = document.querySelectorAll(".button-container button");

for (let i = 0; i < buttons.length; i++) {
    const seatButton =  buttons[i];

    seatButton.addEventListener('click', function () {
        if (selectedCount >= 4 && !seatButton.classList.contains('bg-green-500')) {
            alert('You can select only four Ticket once.');
            return;
          }
       else if (seatButton.classList.contains('bg-green-500')) {
            seatButton.classList.remove('bg-green-500');
            selectedCount--;
          }
        else if (selectedCount < 4) {
            seatButton.classList.add('bg-green-500');
            selectedCount++;
            seatButton.setAttribute('disabled', true)
      }

      const title = seatButton.querySelector('h3').innerText;
       const seatName = document.getElementById('seatName');
       

       const p= document.createElement('p');
       p.innerText = title
       seatName.appendChild(p)




         // Update seat count
         const seatCountElement = document.getElementById('seat-count');
         seatCountElement.innerText = 40 - selectedCount;
 
         // Update current seat number
         const currentSeatElement = document.getElementById('current-seat');
         currentSeatElement.innerText = selectedCount;

           // Calculate and update total price
        const totalPriceElement = document.getElementById('Total-Price');
        totalPrice = totalPriceElement.innerText = totalPrice + selectedCount * 550;

   

 
    })   
}

const btn = document.getElementById('Apply-btn');
btn.addEventListener('click', function () {
  const applyInput = document.getElementById('Coupone').value;
  const couponeCode = applyInput.split("").join("").toUpperCase();
  if(couponeCode === 'NEW15'){
    const discountPrice = document.getElementById('Discount-Price');
    const discountAmount = totalPrice * 0.15
    discountPrice.innerText = discountAmount

       // Calculate and grand total price
       const grandTotal = document.getElementById('Grand-Total');
       grandTotal.innerText = totalPrice - discountAmount.toFixed(2);
 }


 else{
 alert( 'Invalid Coupone')
 }
})
