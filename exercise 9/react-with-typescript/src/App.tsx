

import './App.css'
import AgeForm from './Componant/AgeForm'
import ContactForm from './Componant/Contact Form'
import EmailForm from './Componant/EmailForm'


function App() {

 
  const handleEmailSubmit = (input:string) => {
    console.log("email is ready ", input)

  }

  const handleAgeSubmit = (age:number) => {
    console.log("Age is ready ", age)


  }

  const handleContactFormSubmit = (data:{email:string, name:string}) => {
    console.log("Contact form data is ready ", data)
  }

  return (
 <>
<EmailForm onSubmit={handleEmailSubmit}/>
<AgeForm onSubmit={handleAgeSubmit}/>
<ContactForm onSubmit={handleContactFormSubmit}/>

    </>
  )
}

export default App
