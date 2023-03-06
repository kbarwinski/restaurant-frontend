import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { PaginationArgs, ProductApi } from "../../api/product";
import MenuFilterForm from "../../components/menufilterform/menufilterform";
import MenuGrid from "../../components/menugrid/menugrid";
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
      })
      .catch(console.error);

      console.log(pagination);
  }, [pagination]);
  return (
    <PageContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <MenuFilterForm
            pagination={pagination}
            setPagination={setPagination}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <MenuGrid items={data} />
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default MenuPage;
