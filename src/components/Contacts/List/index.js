import { useState } from 'react'

function List({ contacts }) {
    const [filterText, setFilterText] = useState(" ");
    return (
        <div>
            <input placeholder='Filter Contact' />

            <ul>
                {contacts.map((contact, i) =>
                    <li key={i}>{contact.fullname}</li>
                )}
            </ul>
        </div>
    )
}

export default List