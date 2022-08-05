import { useParams } from "react-router-dom";
import Header from './../components/Header/Header';
import BProducts from './../components/BrandProducts/BProducts';


export default function BrandProducts() {
  let params = useParams();
//   return <h2>Invoice: {params.brandProducts}</h2>;
return(
    <>
        <Header />
        <BProducts props={params.brandProducts}/>
    </>
)
}