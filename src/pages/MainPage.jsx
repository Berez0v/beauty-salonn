import { React } from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { List } from '../components/list/List';
export const MainPage = ({ isAuthenticated }) => {
  const services = [
    { title: "HAIR WOMAN", url: "/img/hairmaster.png", id: 1 },
    { title: "NAILS", url: "/img/nailMaster.png", id: 2 },
    { title: "BARBER", url: "/img/barbiShop.png", id: 3 },
    { title: "NAILS", url: "/img/nailMaster.png", id: 4 },
    { title: "BARBER", url: "/img/barbiShop.png", id: 5 },
    { title: "NAILS", url: "/img/nailMaster.png", id: 6 },
    { title: "NAILS", url: "/img/nailMaster.png", id: 7 },
    { title: "BARBER", url: "/img/barbiShop.png", id: 8 },
    { title: "BARBER", url: "/img/barbiShop.png", id: 9 },
    { title: "NAILS", url: "/img/nailMaster.png", id: 10 },
    { title: "BARBER", url: "/img/barbiShop.png", id: 11 }
  ];
  const masters = [
    { title: "ANA MARIA", url: "/img/hairmaster.png", id: 1 },
    { title: "ION CREANGA", url: "/img/nailMaster.png", id: 2 },
    { title: "VASILE ALECSANDRI", url: "/img/barbiShop.png", id: 3 },
    { title: "MIHAI EMINESCU", url: "/img/nailMaster.png", id: 4 },
    { title: "MASTER", url: "/img/barbiShop.png", id: 5 },
    { title: "MASTER", url: "/img/nailMaster.png", id: 6 },
    { title: "MASTER", url: "/img/nailMaster.png", id: 7 },
    { title: "MASTER", url: "/img/barbiShop.png", id: 8 },
    { title: "MASTER", url: "/img/barbiShop.png", id: 9 },
    { title: "MASTER", url: "/img/nailMaster.png", id: 10 },
    { title: "MASTER", url: "/img/barbiShop.png", id: 11 }
  ]

  const products = [
    { title: "HAIR DYE", url: "/img/hairmaster.png", id: 1 },
    { title: "HAND CREAM", url: "/img/nailMaster.png", id: 2 },
    { title: "FACE CREAM", url: "/img/barbiShop.png", id: 3 },
    { title: "PRODUCT", url: "/img/nailMaster.png", id: 4 },
    { title: "PRODUCT", url: "/img/nailMaster.png", id: 5 },
    { title: "PRODUCT", url: "/img/nailMaster.png", id: 6 },
    { title: "PRODUCT", url: "/img/nailMaster.png", id: 7 },
    { title: "PRODUCT", url: "/img/barbiShop.png", id: 8 },
    { title: "PRODUCT", url: "/img/barbiShop.png", id: 9 },
    { title: "PRODUCT", url: "/img/nailMaster.png", id: 10 },
    { title: "PRODUCT", url: "/img/barbiShop.png", id: 11 }
  ]
  // const [products,setProducts] = useState([]);

  // useEffect(() => {
  //   async function getProducts() {
  //     try {
  //       const data = await axios.get('../data/products.json');
  //       setProducts(data.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getProducts();
  // }, []);
  console.log(products);
  return (
    <>

      <Navbar />
      {isAuthenticated ? <div>
        <List title={"Services"} items={services} ></List>
        <List title={"Products"} items={products}></List>
        <List title={"Masters"} items={masters}></List>
      </div> : <div className='notLoginned'>Please Log In app!</div>}
    </>
  )
}
