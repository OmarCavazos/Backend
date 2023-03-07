<<<<<<< HEAD
import CreateCategory from "./Components/CreateCategory";
import DeleteCategory from "./Components/DeleteCategory";
import GetAllCategories from "./Components/GetAllCategories";
import GetAllProducts from "./Components/GetAllProducts";
import GetCategoryById from "./Components/GetCategoryById";
import UpdateCategory from "./Components/UpdateCategory";


function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">getAllCategories</h1>
      <GetAllCategories />

      <hr />
      <h2 className="text-3xl font-bold underline">getCategoryByid</h2>
      <GetCategoryById />
      <hr />
      <h1 className="text-3xl font-bold underline">createCategory</h1>
      <CreateCategory />
      <hr />
      <h1 className="text-3xl font-bold underline">updateCategory</h1>
      <UpdateCategory />
      <hr />
      <h1 className="text-3xl font-bold underline">deleteCategory</h1>
      <DeleteCategory />
      <br />
      <hr />
      <br />
      {/* <GetAllProducts /> */}
=======
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useMeQuery } from "./store/service/userService";


function App() {
  // const {data}=useMeQuery()
  // console.log("🚀 ~ file: Isadmin.jsx:7 ~ Isadmin ~ me", data)
  return (
    <>
      <Header />
      <Main />
      <Footer />
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
    </>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
