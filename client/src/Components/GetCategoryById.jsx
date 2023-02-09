import { useGetCategoryByIdQuery } from "../store/service/categoryService.jsx";

const GetCategoryById = () => {
    // const { data, isLoading } = useGetCategoryByIdQuery(2);
    // return isLoading ? <h2>Espera</h2> : <h3>{data?.results.name}</h3>;
    const data = useGetCategoryByIdQuery(1);
    console.log("🚀 ~ file: GetCategoryById.jsx:7 ~ GetCategoryById ~ data", data)
};

export default GetCategoryById;