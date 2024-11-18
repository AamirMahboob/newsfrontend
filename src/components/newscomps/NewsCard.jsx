import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const NewsCard = ({ title, description, date, image }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
      {/* News Image */}
      <CardMedia
        component="img"
        height="180"
        image={image || "https://via.placeholder.com/300x180?text=News+Image"}
        alt={title}
      />
      
      {/* News Content */}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title || "Default News Title"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {date || "Unknown Date"}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {description || "Default news description goes here. Add some content."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
