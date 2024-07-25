document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('access-form');
    const idInput = document.getElementById('id-input');
    const keyId = document.getElementById('keyID');
    const message = document.getElementById('message');
    const recordsList = document.getElementById('records-list');
    let records = JSON.parse(localStorage.getItem('records')) || [];

    function loadRecords() {
        const recordsList = document.getElementById('records-list');
        recordsList.innerHTML = '';
        records.sort((a, b) => new Date(b.timeTaken) - new Date(a.timeTaken));
    
        records.forEach(record => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                ID: ${record.id}<br>
                Name: ${record.fullname}<br>
                Class: ${record.room}<br>
                Phone: ${record.phone}<br>
                Key: ${record.keys}<br>
                Time Taken: ${record.time}<br>
            `;
            recordsList.appendChild(listItem);
        });
    }
    
    document.getElementById('back-button').addEventListener('click', function () {
        window.location.href = 'login.htm';
    });
    
    loadRecords();
});
