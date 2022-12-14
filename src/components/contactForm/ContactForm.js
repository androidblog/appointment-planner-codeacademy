import React from 'react'

export default function ContactForm(
  {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit,
    isDuplicateName
  }
) {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit();
  }
  const onNameChange = (e) => {
    setName(e.target.value);
  }
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  }
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label>Name
          <input type='text' required value={name} onChange={onNameChange} />
        </label>
        <label>Phone (must contain 5-15 digits only)
          <input type='tel' pattern='[0-9]{5,15}' required value={phone} onChange={onPhoneChange} />
        </label>
        <label>Email
          <input type='email' required value={email} onChange={onEmailChange} />
        </label>
        <input 
          type='submit' 
          disabled={isDuplicateName} 
          value={isDuplicateName ? 'Please enter another name' : 'Submit'} 
        />
      </form>
    </div>
  )
}
