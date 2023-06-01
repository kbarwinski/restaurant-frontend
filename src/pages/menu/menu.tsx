import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { PaginationArgs, ProductApi } from "../../api/product";
import MenuFilterForm from "../../components/menu/menufilterform/menufilterform";
import MenuGrid from "../../components/menu/menugrid/menugrid";
import { PageContainer } from "../../components/shared/page-container-styled";

function MenuPage() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState<PaginationArgs>({
    maxPrice: 1000,
    minPrice: 0,
    name: "",
    page: 0,
    size: 10,
    sort: "name, desc",
  });

  useEffect(() => {
    const getProducts = async () => {
      return await ProductApi.getProducts(pagination);
    };
    getProducts()
      .then((x) => {  
        setData(x.data);
        console.log(x.data);
      })
      .catch(console.error);

      console.log(pagination);
  }, [pagination]);

  //Style Mui Grid Components for responsive filter form
  return (
    <PageContainer> 
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        >
          <MenuFilterForm
            pagination={pagination}
            setPagination={setPagination}
          />
        </Grid>
        <Grid item xs={12} md={8} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <MenuGrid items={data}/>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default MenuPage;
