import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PaymentNotification: React.FC = () => {
    const [showNotification, setShowNotification] = useState<boolean>(false);

    useEffect(() => {
        // Sayfa açıldığında bildirimi göster
        setShowNotification(true);
    }, []);

    useEffect(() => {
        if (showNotification) {
            notifyError();
        }
    }, [showNotification]);

    const notifyError = () => {
        toast.error("UYARI: Fatura bilgisi için müşteri bilgilerindeki ad soyadı girmelisiniz!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
           
        });
    };

    return (
        <div>
            <ToastContainer position="top-right" className="p-3"/>
                {/* Toast bildirimi burada değil, toast.success() fonksiyonuyla oluşturulacak */}
            
        </div>
    );
};

export default PaymentNotification;

