import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useLogger } from "../hooks/useLogger";

const Stats = () => {
  useLogger("Viewed Stats Page");
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("urls")) || [];
    setUrls(stored);
  }, []);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>URL Statistics</Typography>
      {urls.map((item) => (
        <Box key={item.id} sx={{ mb: 2, p: 2, border: "1px solid #ccc" }}>
          <p>Short URL: {item.shortUrl}</p>
          <p>Original URL: {item.longUrl}</p>
          <p>Expiry: {item.expiry}</p>
          <p>Clicks: {item.clicks.length}</p>
        </Box>
      ))}
    </Box>
  );
};

export default Stats;
