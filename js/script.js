let selectedCount = 0;
let totalPrice = 0;

let buttons = document.querySelectorAll(".button-container button");
for (let i = 0; i < buttons.length; i++) {
  const seatButton = buttons[i];
  seatButton.addEventListener('click', function () {
    if (selectedCount >= 4 && !seatButton.classList.contains('bg-green-500')) {
      alert('You can select only four Ticket once.');
      return;
    }

    else if (selectedCount < 4) {
      seatButton.classList.add('bg-green-500');
      selectedCount++;
      seatButton.setAttribute('disabled', true)    
    }

   // Appending seatname, economy , price
   appendSeatClassPrice(seatButton.id);


    // Update seat count
    const seatCountElement = document.getElementById('seat-count');
    seatCountElement.innerText = 40 - selectedCount;

    // Update current seat number
    const currentSeatElement = document.getElementById('current-seat');
    currentSeatElement.innerText = selectedCount;

    // Calculate and update total price
    const totalPriceElement = document.getElementById('Total-Price');
    totalPrice = totalPriceElement.innerText = totalPrice + selectedCount * 550;

    const grandTotal = document.getElementById('Grand-Total');
    grandTotal.textContent = totalPrice;
  })
}


// Apply Coupone Start

const btn = document.getElementById('Apply-btn');
btn.addEventListener('click', function () {
  const applyInput = document.getElementById('Coupone').value;
  const couponeCode = applyInput.split("").join("").toUpperCase();
  if(selectedCount >=4){
  if (couponeCode === 'NEW15') {
    const discountPrice = document.getElementById('Discount-Price');
    const discountAmount = totalPrice * 0.15
    discountPrice.innerText = discountAmount

    // Calculate discount and grand total price
    const grandTotal = document.getElementById('Grand-Total');
    grandTotal.innerText = (totalPrice - discountAmount).toFixed(2);
  }
  else if (couponeCode === 'COUPLE 20') {
    const discountAmount = totalPrice * 0.20;
    const discountPrice = document.getElementById('Discount-Price');
    discountPrice.textContent = discountAmount;

    // Calculate discount and grand total price
    const grandTotal = document.getElementById('Grand-Total');
    grandTotal.textContent = (totalPrice - discountAmount).toFixed(2) + 'Taka';
  }
  else {    
    return alert('Invalid Coupone');
  }

}

else{
  return alert('Please select at least 4 seats')
}
  // Hide the Input Field
  document.getElementById('btn-input').style.display = 'none';
})

// Apply Coupone End

