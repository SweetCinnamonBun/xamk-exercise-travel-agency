const reservations = [];

const seatInput = document.getElementById("seat-number");
const bookButton = document.getElementById("book-button");
const seats = document.querySelectorAll(".booking-grid li");

bookButton.addEventListener("click", () => {
    const seat = parseInt(seatInput.value);

    if (reservations.includes(seat)) {
        alert("Paikka on jo varattu!")
        return;
    }

    reservations.push(seat);
    const setSeatColor = Array.from(seats).find(x => parseInt(x.textContent) === seat);
    setSeatColor.classList.add("booked");
    seatInput.value = "";
})

