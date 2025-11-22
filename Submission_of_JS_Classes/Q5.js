// Q5 code placeholder
// Q5: Movie Ticket Booking

function validateBooking(name, email, seats) {
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const seatRegex = /^[1-9]$|^10$/;

    if (!nameRegex.test(name)) return "Invalid Name";
    if (!emailRegex.test(email)) return "Invalid Email";
    if (!seatRegex.test(seats)) return "Seats must be between 1-10";

    return "valid";
}

function bookTicket(name, email, seats) {
    const status = validateBooking(name, email, seats);

    if (status !== "valid") {
        console.log(status);
        return;
    }

    const ticket = {
        name,
        email,
        seats
    };

    console.log("🎟 Ticket Booked:", ticket);
}

bookTicket("Ayush", "ayush@gmail.com", "3");
