import { useState } from 'react'

function Form() {
    const [form, setForm] = useState({ fullname: "", phone_number: "" });

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div>
                <input name="fullname" placeholder='Fullname' />
            </div>

            <div>
                <input name="phone_number" placeholder='Phone Number' />
            </div>
            <div>
                <button>
                    Add
                </button>
            </div>
        </div>
    )
}

export default Form