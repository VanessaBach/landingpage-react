import styles from './Form.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

interface FormProps {
  author: string;
  phoneNumber: number;
  emailAdress: string;
}

export function Form({author, phoneNumber, emailAdress}:FormProps) {
  const[form, setForm] = useState('')
  const[newForm, setNewForm] = useState('')

  const[name, setName] = useState('')
  const[newName, setNewName] = useState('')

  const[number, setNumber] = useState('')
  const[newNumber, setNewNumber] = useState('')

  const[email, setEmail] = useState('')
  const[newEmail, setNewEmail] = useState('')



  function handleCreateNewForm(event: FormEvent) {
    event.preventDefault();
    setNewForm('');    
  }

  function handleNewNameChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewName(event.target.value);
  }
  function handleNewNumberChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewNumber(event.target.value);
  }

  function handleNewEmailChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewEmail(event.target.value);
  }
  return(
    <form onSubmit= {handleCreateNewForm} className= {styles.textForm}>
      <input 
        type="text" 
        name="nome" 
        value={newName}
        onChange={handleNewNameChange}
        placeholder="COMO DEVEMOS TE CHAMAR"
      />
      <input 
        type="tel" 
        name="telefone" 
        value={newNumber}
        onChange={handleNewNumberChange}
        placeholder="SEU TELEFONE"
      />
      <input 
        type="email" 
        name="e-mail" 
        placeholder="SEU MELHOR E-MAIL" 
        value={newEmail}
        onChange={handleNewEmailChange}
      />
      <button type="submit">
        Enviar
      </button>
    </form>


  );
}

