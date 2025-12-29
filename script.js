let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

document.getElementById("date").min = 
new Date().toISOString().split("T")[0];

function bookAppointment() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const phone = document.getElementById("phone").value.trim();
    const confirmation = document.getElementById("confirmation");

    const booking = { name, email, service, date, time, phone };
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(booking));

    confirmation.style.display = "block";
    confirmation.innerHTML = `✅ Thank you ${name}, your appointment is confirmed`;

    const message = `Hello ${name},
    Your salon appointment is confirmed.
    
    Service: ${service}
    Date: ${date}
    Time: ${time}
    
    Thank you for choosing us 💇🏻‍♀️`;

    window.open(
        `https://wa.me/234${phone.slice(1)}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
}

function toggleMode() {
    document.body.classList.toggle("dark");
}