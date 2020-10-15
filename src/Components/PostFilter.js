import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton , TextInput, ReferenceInput, SelectInput ,Filter, DeleteButton} from 'react-admin';




export const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);