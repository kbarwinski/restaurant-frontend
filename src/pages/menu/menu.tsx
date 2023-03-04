import { useEffect, useState } from "react";
import { PaginationArgs, ProductApi } from "../../api/product";
import MenuGrid from "../../components/menugrid/menugrid";
import { PageContainer } from "../../components/shared/page-container-styled";

function MenuPage(){
    const [data, setData] = useState([]);

    const args : PaginationArgs = {
        maxPrice:0,
        minPrice:1000,
        name:'',
        page:0,
        size:10,
        sort:'name desc',
    };

    useEffect(()=>{
        const getProducts = async () =>{
            return await ProductApi.getProducts(args);
        }

        getProducts()
        .then(x=>{
            setData(x.data);
        })
        .catch(console.error);
    },[])
    return(
        <PageContainer>
            <MenuGrid
            items={data}
            />
        </PageContainer>
    )
}

export default MenuPage;