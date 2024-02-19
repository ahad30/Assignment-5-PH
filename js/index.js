function appendSeatClassPrice(id) {
    const seatName = document.getElementById('seatName');
    const className = document.getElementById('className');
    const price = document.getElementById('price');

    const seat = document.createElement('p');
    seat.innerText = id;
    seatName.appendChild(seat);

    const classElement = document.createElement('p');
    classElement.innerText = 'Economy';
    className.appendChild(classElement);

    const priceElement = document.createElement('p');
    priceElement.innerText = '550 Taka';
    price.appendChild(priceElement);
}