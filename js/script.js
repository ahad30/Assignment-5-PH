
let selectedCount = 0;
let buttons = document.querySelectorAll(".button-container button");

for (let i = 0; i < buttons.length; i++) {
    const seatButton =  buttons[i];

    seatButton.addEventListener('click', function () {
        if (selectedCount >= 4 && !seatButton.classList.contains('bg-green-100')) {
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
      }
      
       const title = seatButton.querySelector('h3').innerText;
       const seatName = document.getElementById('seatName')
       const p= document.createElement('p')
       p.innerText = title
      seatName.appendChild(p)
    })   
}