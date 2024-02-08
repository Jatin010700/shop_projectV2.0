
import Card from "./components/cardContent/frontPageContent";
import Product from "./components/cardContent/productContent";
import Header from "./components/main_page/main";
import Review from "./components/review";
import ConnectMongoDB from "./libs/mongoDB";
import MongooseProductModel from "./libs/mongoose";

type homeProps = {
  product: any
}

export default function Home({product}:homeProps) {
  console.log(product)
  return (
    <>
      <Header />

      {/* card page */}
      <Card product={[product]}/>
      <Product />

      <Review />
    </>
  );
}

// export async function getServerSideProps() {
//   await ConnectMongoDB();
//   const product = await MongooseProductModel.find();
//   return {
//     props: {product: JSON.stringify(product)}
//   }
// }