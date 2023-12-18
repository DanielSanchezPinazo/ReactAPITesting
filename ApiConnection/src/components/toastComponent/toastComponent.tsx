
import { useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { ToastComponentProps } from '../../interfaces/respose.interface';
// Dispatch<SetStateAction<boolean>>
export const ToastComponent = ({permissionToShowError}: ToastComponentProps ) => {
   
    const toast = useRef<Toast>(null);

    const showError = () => {
  
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3000 });
    };

    useEffect( () => {

        if (permissionToShowError) {
            
            showError();
        }
    }, [permissionToShowError]);

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
        </div>
    )
}
        
        