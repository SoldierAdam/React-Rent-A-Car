
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Invoice } from "../../store/payment/paymentSlice";

import axios from "axios";
import { RootState } from "../../store/configureStore";
import './profile.css';

const Profile: React.FC = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const { firstName, lastName } = useSelector((state: RootState) => state.rent);
    const { userName } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
   

    useEffect(() => {
        if (firstName && lastName) {
            axios.get('http://localhost:8080/api/invoices/getAll')
                .then(response => {
                    const data = response.data.data;
                    const userInvoices = data.filter((invoice: Invoice) => invoice.cardNameSurname === `${firstName} ${lastName}`);
                    setInvoices(userInvoices);
                })
                .catch(error => {
                    console.error('Error fetching invoices:', error);
                });
        }
    }, [firstName, lastName]);

    return (
        <div>
            <h1 className="ml-5">Profil Sayfası</h1>
            <div>
                <h2 className="ml-5">Müşteri Bilgileri</h2>
                <br/>
                {firstName && lastName ? (
                    <table className="table-fill">
                        <tbody className="table-hover">
                            <tr>
                                <th className="text-left">Müşteri Adı Soyadı</th>
                                <th className="text-left">Kullanıcı Adı</th>
                            </tr>
                            <tr>
                                <td className="text-left">{firstName} {lastName}</td>
                                <td className="text-left">{userName}</td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <p className="ml-5">Müşteri Bilgisi Yoktur</p>
                )}
                <br/>

                <h2 className="ml-5">Fatura Bilgileri</h2>
                <br/>
                {invoices.length > 0 ? (
                    <table className="table-fill">
                        <thead>
                            <tr>
                                <th className="text-left">Kart Adı Soyadı</th>
                                <th className="text-left">Kart Numarası</th>
                                <th className="text-left">Son Kullanma Tarihi</th>
                                <th className="text-left">CVV</th>
                                <th className="text-left">Toplam Fiyat</th>
                            </tr>
                        </thead>
                        <tbody className="table-hover">
                            {invoices.map((invoice, index) => (
                                <tr key={index}>
                                    <td className="text-left">{invoice.cardNameSurname}</td>
                                    <td className="text-left">{invoice.cardNumber}</td>
                                    <td className="text-left">{invoice.expireDate}</td>
                                    <td className="text-left">{invoice.cvv}</td>
                                    <td className="text-left">{invoice.totalPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="ml-5">Fatura bulunamadı.</p>
                )}
            </div>
        </div>
    );
}

export default Profile;


