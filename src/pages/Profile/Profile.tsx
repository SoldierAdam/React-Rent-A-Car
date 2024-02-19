import React from "react";
import { useSelector } from "react-redux";
import {Invoice} from "../../store/payment/paymentSlice";
import { RentCustomerInfo } from "../../store/rentNow/rentSlice";




const Profile: React.FC = () =>{
    const invoiceInfo: Invoice = useSelector((state:any)=> state.invoice);
    const rentInfo: RentCustomerInfo = useSelector((state: any) => state.rentInfo);

    
    return(
        
<div>
            <h1>Profil Sayfası</h1>
            <div>
                <h2>Kiralama Bilgileri</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Ad:</td>
                            <td>{rentInfo.firstName}</td>
                        </tr>
                        <tr>
                            <td>Soyad:</td>
                            <td>{rentInfo.lastName}</td>
                        </tr>
                       
                        <tr>
                            <td>Email:</td>
                            <td>{rentInfo.email}</td>
                        </tr>
                      
                        <tr>
                            <td>Şehir:</td>
                            <td>{rentInfo.city}</td>
                        </tr>
                       
                    </tbody>
                </table>
                <h2>Fatura Bilgileri</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Kullanıcı Adı:</td>
                            <td>{invoiceInfo.username}</td>
                        </tr>
                        <tr>
                            <td>Kart Adı Soyadı:</td>
                            <td>{invoiceInfo.cardNameSurname}</td>
                        </tr>
                        <tr>
                            <td>Kart Numarası:</td>
                            <td>{invoiceInfo.cardNumber}</td>
                        </tr>
                        <tr>
                            <td>Son Kullanma Tarihi:</td>
                            <td>{invoiceInfo.expireDate}</td>
                        </tr>
                        <tr>
                            <td>CVV:</td>
                            <td>{invoiceInfo.cvv}</td>
                        </tr>
                        <tr>
                            <td>Toplam Fiyat:</td>
                            <td>{invoiceInfo.totalPrice}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
    
}
export default Profile;