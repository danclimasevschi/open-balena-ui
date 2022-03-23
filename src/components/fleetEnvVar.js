import * as React from "react";
import {
    Create,
    Edit,
    TextField,
    Datagrid,
    ReferenceField,
    ChipField,
    List,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    EditButton,
    DeleteButton,
} from 'react-admin';

const FleetEnvVarTitle = ({ record }) => {
    return <span>Fleet Environment Variable {record ? `"${record.name}"` : ''}</span>;
};

export const FleetEnvVarList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <ReferenceField label="Fleet" source="application" reference="application" target="id">
                    <ChipField source="app name" />
                </ReferenceField>
                <TextField label="Name" source="name" />
                <TextField label="Value" source="value" />
                <EditButton label="" color="default"/>
                <DeleteButton label="" style={{color: "black"}} size="medium"/>
            </Datagrid>
        </List>
    )
};

export const FleetEnvVarCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <ReferenceInput source="application" reference="application" target="id">
                <SelectInput optionText="app name" optionValue="id" />
            </ReferenceInput>
            <TextInput label="Name" source="name" />
            <TextInput label="Value" source="value" />
        </SimpleForm>
    </Create>
);

export const FleetEnvVarEdit = props => (
    <Edit title={<FleetEnvVarTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput source="application" reference="application" target="id">
                <SelectInput optionText="app name" optionValue="id" />
            </ReferenceInput>
            <TextInput label="Name" source="name" />
            <TextInput label="Value" source="value" />
        </SimpleForm>
    </Edit>
);

const fleetEnvVar = {
    list: FleetEnvVarList,
    create: FleetEnvVarCreate,
    edit: FleetEnvVarEdit
}

export default fleetEnvVar;