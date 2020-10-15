import * as React from "react";
import {  Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
}

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
           <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
               <SelectInput disabled optionText="id" />
            </ReferenceInput>
            <TextInput source="title" />
           <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);