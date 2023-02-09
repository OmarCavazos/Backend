import { useGetAllCategoriesQuery } from "../store/service/categoryService.jsx";
import Categories from "./Categories.jsx";

const GetAllCategories = () => {
    const { data, isError, isLoading } = useGetAllCategoriesQuery();
    console.log("🚀 ~ file: GetAllCategories.jsx:6 ~ GetAllCategories ~ data", data)
    return isLoading?(
        <h2>Espera</h2>
    ) : (
        <h1>test</h1>
        // data?.results?.map((d, key) => <Categories data={d} key={key} />)
    );
};

export default GetAllCategories;