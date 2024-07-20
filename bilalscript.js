const data = [
    { propertyAddress: '123 Maple St, Springfield, IL', namedInsured: 'John Doe', phoneNumber: '555-123-4567', emailAddress: 'john.doe@example.com', assignedProducer: 'Alice Smith', addNotes: 'Policy renewed ', entryDate: '2024-07-15', status: 'Active' },
    { propertyAddress: '456 Oak St, Springfield, IL', namedInsured: 'Jane Roe', phoneNumber: '555-234-5678', emailAddress: 'jane.roe@example.com', assignedProducer: 'Bob Johnson', addNotes: 'New policy issued', entryDate: '2024-07-16', status: 'Inactive' },
    { propertyAddress: '789 Pine St, Springfield, IL', namedInsured: 'Emily Clark', phoneNumber: '555-345-6789', emailAddress: 'emily.clark@example.com', assignedProducer: 'Charlie Brown', addNotes: '', entryDate: '2024-07-17', status: 'Active' },
    { propertyAddress: '101 Maple St, Springfield, IL', namedInsured: 'Michael Johnson', phoneNumber: '555-456-7890', emailAddress: 'michael.johnson@example.com', assignedProducer: 'Diana Prince', addNotes: '', entryDate: '2024-07-18', status: 'Inactive' },
    { propertyAddress: '202 Elm St, Springfield, IL', namedInsured: 'Sarah Brown', phoneNumber: '555-567-8901', emailAddress: 'sarah.brown@example.com', assignedProducer: 'Evan Adams', addNotes: ' updated', entryDate: '2024-07-19', status: 'Active' },
    { propertyAddress: '303 Cedar St, Springfield, IL', namedInsured: 'David Wilson', phoneNumber: '555-678-9012', emailAddress: 'david.wilson@example.com', assignedProducer: 'Fiona Green', addNotes: 'Policy canceled', entryDate: '2024-07-20', status: 'Inactive' },
    { propertyAddress: '404 Birch St, Springfield, IL', namedInsured: 'Laura Miller', phoneNumber: '555-789-0123', emailAddress: 'laura.miller@example.com', assignedProducer: 'George Harris', addNotes: 'Policy updated', entryDate: '2024-07-21', status: 'Active' },
    { propertyAddress: '505 Willow St, Springfield, IL', namedInsured: 'James Martinez', phoneNumber: '555-890-1234', emailAddress: 'james.martinez@example.com', assignedProducer: 'Hannah Scott', addNotes: 'Documents under review', entryDate: '2024-07-22', status: 'Inactive' },
    { propertyAddress: '606 Aspen St, Springfield, IL', namedInsured: 'Olivia Taylor', phoneNumber: '555-901-2345', emailAddress: 'olivia.taylor@example.com', assignedProducer: 'Ian Thompson', addNotes: 'Coverage increased', entryDate: '2024-07-23', status: 'Active' },
    { propertyAddress: '707 Cherry St, Springfield, IL', namedInsured: 'William Anderson', phoneNumber: '555-012-3456', emailAddress: 'william.anderson@example.com', assignedProducer: 'Jasmine Lewis', addNotes: ' ', entryDate: '2024-07-24', status: 'Inactive' },
];

const rowsPerPage = 6;
let currentPage = 1;

function renderTable(page) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const tableBody = document.getElementById('table-body');

    tableBody.innerHTML = '';

    const pageData = data.slice(start, end);

    pageData.forEach((item, index) => {
        const row = document.createElement('tr');
        const statusClass = item.status == 'Active' ? 'status-active' : 'status-inactive';
        row.innerHTML = `
            <td>${item.propertyAddress}</td>
            <td>${item.namedInsured}</td>
            <td>${item.phoneNumber}</td>
            <td>${item.emailAddress}</td>
            <td>${item.assignedProducer}</td>
            <td id="notes-${start + index}">${item.addNotes}</td>
            <td>${item.entryDate}</td>
            <td id="${statusClass}">${item.status}</td>
            <td>
                <img src="pic1.png" alt="Edit" onclick="editNotes(${start + index})">
                <img src="pic2.png" alt="hide">
            </td>
        `;
        tableBody.appendChild(row);
    });

    document.getElementById('page-number').textContent = page;
}

function nextPage() {
    if (currentPage * rowsPerPage < data.length) {
        currentPage++;
        renderTable(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderTable(currentPage);
    }
}

function editNotes(index) {
    const noteCell = document.getElementById(`notes-${index}`);
    const currentNote = noteCell.textContent;
    const newNote = prompt('Edit Note:', currentNote);
    if (newNote !== null) {
        noteCell.textContent = newNote;
        data[index].addNotes = newNote;
    }
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderTable(currentPage);
});
