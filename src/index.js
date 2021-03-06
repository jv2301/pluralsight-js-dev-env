import {getUsers, deleteUser} from './api/usersApi';
import './index.css';

getUsers().then(result => {
  let usersBody = "";
  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id=${user.id} class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>`;
    global.document.getElementById('users').innerHTML = usersBody;
  });
});

const deleteLinks = global.document.getElementByClassName('deleteUser');

Array.from(deleteLinks, link => {
  link.onClick = event => {
    const element = event.target;
    event.preventDefault();
    deleteUser(element.attributes['data-id'].value);
    const row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
})
