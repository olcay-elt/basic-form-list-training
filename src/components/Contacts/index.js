import { useState, useEffect } from 'react'

import Form from './Form'
import List from "./List"

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Ahmet",
            phone_number: "123123"
        }, {
            fullname: "Mehmet",
            phone_number: "456456"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;