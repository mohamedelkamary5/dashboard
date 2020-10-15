import React from "react";
import { SimpleForm, TextInput, ReferenceInput, SelectInput, Create } from 'react-admin';



 const PostCreate = props => (
    //  [title, setTitle] = useState('')
    
    <Create {...props}>    
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);

export default PostCreate