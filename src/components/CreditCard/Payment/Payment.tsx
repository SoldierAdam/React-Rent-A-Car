import { useSelector } from "react-redux";

const Payment: React.FC = () => {
  const selectedCar = useSelector((state: any) => state.car);

  console.log("Selected Car:", selectedCar);

  return (
    <>
    {console.log("Selected Car:", selectedCar)}
    <div>
      <p>{selectedCar.id}</p>
      <p>{selectedCar.model.name}</p>
    </div>

      
    </>
  );
};
export default Payment;
