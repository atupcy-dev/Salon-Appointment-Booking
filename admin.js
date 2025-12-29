const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
const table = document.getElementById("adminTable");

bookings.forEach(b => {
    table.innerHTML += `
    <tr>
        <td>${b.name}</td>
        <td>${b.email}</td>
        <td>${b.phone}</td>
        <td>${b.date}</td>
        <td>${b.time}</td>
        <td>${b.service}</td>
    </tr>
    `;
});

function clearBookings() {
    localStorage.clear();
    location.reload();
}