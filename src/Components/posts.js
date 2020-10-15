import React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton , DeleteButton} from 'react-admin';
import {PostFilter} from './PostFilter'
// import firebase from './../Utill/firebase'
// const [todoList, setTodoList] = useState()




export const PostList = (props) => (
    
    <List filters={<PostFilter />} {...props}>
        <Datagrid>
            <TextField disabled source="id"   />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>

   
);



// export class PostList extends Component {
//     render() {
//         return (
//             <div>
//                 {PostList2}
//             </div>
//         )
//     }
// }







// export const PostList = props => (
    
//     <List filters={<PostFilter />} {...props}>
//         <Datagrid>
//             <TextField disabled source="id"   />
//             <ReferenceField source="userId" reference="users">
//                 <TextField source="name" />
//             </ReferenceField>
//             <TextField source="title" />
//             <TextField source="body" />
//             <EditButton />
//             <DeleteButton />
//         </Datagrid>
//     </List>

   
// );






