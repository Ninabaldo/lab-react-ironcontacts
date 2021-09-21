import { UseState } from "react";
import "./App.css";
import contactsData from "./contacts.json"


function App() {
  return <div className="App"></div>;

function contactList(){
   const [contacts, setContacs] =UseState(contactsData.slice(0,5));
   return(
     <div>
     <h1>Iron Contacts</h1>

     <table>
     <tr> 
     <th>Picture</th>
     <th>Name</th>
     <th>Popularity</th>
     <th>Won Oscar</th>
     <th>Won Emmy</th>
     </tr>
     {contacts.map((contact)=>(
      <tr>
      <td> <img class="images" src={contact.pictureUrl} alt="image"></img> </td>
      <td>{contact.name}</td>
      <td>{Math.round(contact.popularity*100)/100}</td>
      <td>{contact.wonOscar ? '✨':''}</td>
      <td>{contact.wonEmmy ? '✨':''}</td>
      </tr>
     ))}
    </table>
   
   </div>
)
}}


export default App;
