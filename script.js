document.addEventListener('DOMContentLoaded', function () {
    const courseReps = [
        {
            fullName: "Angela Gyasi",
            ID: "4121220303CR",
            room: "B1",
            phone: "+233244000001"
        },
        {
            fullName: "Nadia Gyasi",
            ID: "4121220312CR",
            room: "B1",
            phone: "+233244000001"
        },
        {
            fullName: "Ralph Tetteh",
            ID: "4111220043CR",
            room: "G7",
            phone: "+233244000001"
        },
        {
            fullName: "Kelvin Afriyie",
            ID: "4111220140CR",
            room: "C3",
            phone: "+233244000001"
        },
        {
            fullName: "Josephine Antwi",
            ID: "4111220077CR",
            room: "B4",
            phone: "+233244000001"
        }
    ];

    const form = document.getElementById('access-form');
    const idInput = document.getElementById('id-input');
    const keyId = document.getElementById('keyID');
    const message = document.getElementById('message');
    const recordsList = document.getElementById('records-list');
    let records = JSON.parse(localStorage.getItem('records')) || [];

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const id = idInput.value.trim();
        const keys = keyId.value.trim();
        const courseRep = courseReps.find(rep => rep.ID === id);

        if (courseRep) {
            const time = new Date().toLocaleString();
            records.unshift({ id, time, keys, fullname: courseRep.fullName, phone: courseRep.phone, room:courseRep.room });
            localStorage.setItem('records', JSON.stringify(records));
            message.textContent = `Access Granted: ${courseRep.fullName}, Phone: ${courseRep.phone}`;
            message.style.color = 'green';
        } else {
            message.textContent = 'Access Denied: Unauthorized ID';
            message.style.color = 'red';
        }
        idInput.value = '';
        keyId.value = '';
    });

});
