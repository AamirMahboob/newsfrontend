import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import NewsCard from "../newscomps/NewsCard";
import axios from "axios";

const All = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/articles");
        setData(response?.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <NewsCard
              title={item.title}
              description={item.description}
              date={item.datePublished}
              image={item.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default All;
