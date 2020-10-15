import React from 'react';
import { Admin, Resource   } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './Components/Users';
import { PostList } from './Components/posts';
import { PostEdit } from './Components/PostEdit';
import  PostCreate  from './Components/PostCreate'
import Dashboard from './Components/Dashboard';
import authProvider from './authProvider';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import 'bootstrap/dist/css/bootstrap.min.css';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const App = () => {
  return(
    <Admin dashboard={Dashboard} authProvider={authProvider}  dataProvider={dataProvider} >
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
  )
}

export default App;

