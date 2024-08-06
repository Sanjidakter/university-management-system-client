import React from 'react';
import { useAddAcademicDepartmentMutation } from '../../../redux/features/admin/academicManagement.api';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

const CreateAcademicDepartment = () => {
    const [addAcademicDepartment] = useAddAcademicDepartmentMutation();

    const onSubmit:SubmitHandler<FieldValues>= async(data)=>{
       const toastId = toast.loading('Creating...');
       console.log('form Data:',data); 
    }
    return (
        <div>
           <h1>Carete academic dept</h1> 
        </div>
    );
};

export default CreateAcademicDepartment;