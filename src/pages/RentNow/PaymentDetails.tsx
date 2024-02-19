import { Formik, Form } from "formik";
import {
  CardFormValues,
  CardInitialValues,
  CardValidationSchema,
  CardFormikInformation,
} from "./FormikInput";
import "./CarDetails.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { FormikHelpers } from "formik";
import { FormikInputFunction } from "../../components/FormikInput/FormikInput";

function PaymentDetails({ onBackClick }) {
  // useSelector ile Redux store'dan veri alımı
  const customerInfoString = useSelector((state: any) =>
    JSON.stringify(state.rent)
  );
  const userInfo = useSelector((state: any) => state.user);
  const car = useSelector((state: any) => state.car);
  const startDate = localStorage.getItem("pickupDate");
  const endDate = localStorage.getItem("dropoffDate");
  const startKilometer = car.kilometer;
  const userName = localStorage.getItem("userName");
  const totalPrice =
    car.dailyPrice *
    (new Date(endDate).getDate() - new Date(startDate).getDate());
  const customerInfo = JSON.parse(customerInfoString);

  interface Customer {
    firstName: string;
    lastName: string;
    identityNumber: string;
    birthDate: string;
    city: string;
    address: string;
    email: string;
    drivingLicenseDate: string;
    postalCode: string;
    phoneNumber: string;
    username: number;
  }

  // Customer nesnesi oluşturma
  const createCustomerObject = (customerInfo: any, userInfo: any): Customer => {
    return {
      firstName: customerInfo.firstName || "zeynep",
      lastName: customerInfo.lastName || "ozan",
      identityNumber: "11111111111",
      birthDate: customerInfo.birthDate || "11111111",
      city: customerInfo.city || "İstanbul",
      address: customerInfo.address || "Üsküdar",
      email: customerInfo.email || "pzanzzeynep@gmaill.com",
      drivingLicenseDate: customerInfo.drivingLicenseDate || "",
      postalCode: customerInfo.postalCode || "",
      phoneNumber: userInfo.phoneNumber || "",
      username: userInfo.userName || 1,
    };
  };
  // Yeni Customer nesnesi oluştur
  const customer = createCustomerObject(customerInfo, userInfo);

  console.log("Customer:", customer);
  // Axios ile API isteğini gönderme
  const handleSubmit = async (
    values: CardFormValues,
    formikHelpers: FormikHelpers<CardFormValues>
  ) => {
    console.log("Values:", values);
    const cardNameSurname = values.fullName;
    const cardNumber = values.creditCardNumber;
    const expirationDate = values.expirationTime;
    const cvv = values.cvv;

    const rental = {
      startDate: startDate,
      endDate: endDate,
      returnDate: null,
      startKilometer: startKilometer,
      endKilometer: null,
      totalPrice: totalPrice,
      username: userName,
      carId: car.id,
    };

    const invoice = {
      cardNameSurname: cardNameSurname,
      cardNumber: cardNumber,
      expireDate: expirationDate,
      cvv: cvv,
      totalPrice: totalPrice,
      username: userName,
      carId: car.id,
      rentalId: null,
      startDate: startDate,
    };

		try {
			const customerResponse = await axios.post('http://localhost:8080/api/customers/add', customer, {
			  headers: {
				'Content-Type': 'application/json'
			  }
			});
			console.log("API customerResponse:", customerResponse.data);
			console.log("seçtiğimiz tarih", rental)
			const rentalResponse = await axios.post('http://localhost:8080/api/rentals/add', rental, {
			  headers: {
				'Content-Type': 'application/json'
			  }
			});
			console.log("rentalResponse.data:", rentalResponse.data);
			invoice.rentalId = rentalResponse.data.data.id;
			console.log("Invoice:", invoice);

			// const invoiceResponse = await axios.post('http://localhost:8080/api/invoices/add', invoice, {
			//   headers: {
			// 	'Content-Type': 'application/json'
			//   }
			// });
		  
			// console.log("API invoiceResponse:", invoiceResponse.data);
			// alert("Müşteri başarıyla kaydedildi.");
		  } catch (error) {
				console.error("API Error:", error.response ? error.response.data : error.message);
				alert("Müşteri kaydı sırasında bir hata oluştu.");
			}
	}


      // console.log("API invoiceResponse:", invoiceResponse.data);
      alert("Müşteri başarıyla kaydedildi.");
    } catch (error) {
      console.error(
        "API Error:",
        error.response ? error.response.data : error.message
      );
      alert("Müşteri kaydı sırasında bir hata oluştu.");
    }
  };

  return (
    <div className="col-9">
      <h1 className="title-payment">Ödeme Bilgileri</h1>

      <Formik
        initialValues={CardInitialValues}
        validationSchema={CardValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form key={1}>
          <div key={0} className="grid-container">
            {CardFormikInformation.map((item, index) =>
              FormikInputFunction({ item, index })
            )}
          </div>

          <button
            type="button"
            className="next-button-previous"
            onClick={onBackClick}
          >
            Müşteri Bilgilerine Geri Dön
          </button>
          <button type="submit" className="next-button-payment">
            Ödeme Yap
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default PaymentDetails;
