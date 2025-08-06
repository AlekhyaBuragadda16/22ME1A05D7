import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { logAction } from "../utils/logger";
import { useLogger } from "../hooks/useLogger";

const UrlShortener = () => {
  useLogger("Visited URL Shortener Page");

  const [longUrl, setLongUrl] = useState("");
  const [validity, setValidity] = useState(30);
  const [shortcode, setShortcode] = useState("");
  const [shortUrls, setShortUrls] = useState(
    JSON.parse(localStorage.getItem("urls")) || []
  );

  const generateShortCode = () => Math.random().toString(36).substring(2, 7);

  const handleSubmit = () => {
    // You should also validate that the longUrl is a valid URL,
    // not just that it starts with "http".
    // A simple regex check or URL object can be used here.
    if (!longUrl.startsWith("http")) {
      alert("Please enter a valid URL");
      return;
    }

    const finalShortCode = shortcode ? shortcode : generateShortCode();
    const expiry = new Date(Date.now() + validity * 60000);

    const newEntry = {
      id: Date.now(),
      longUrl,
      shortUrl: `/${finalShortCode}`, // Corrected string literal using backticks
      expiry,
      clicks: [],
    };

    const updatedList = [...shortUrls, newEntry];
    setShortUrls(updatedList);
    localStorage.setItem("urls", JSON.stringify(updatedList));

    // Corrected string literal using backticks
    logAction(`Created short URL: ${finalShortCode} for ${longUrl}`);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Shorten Your URL
      </Typography>
      <TextField
        label="Long URL"
        fullWidth
        sx={{ mb: 2 }}
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <TextField
        label="Validity (minutes)"
        fullWidth
        sx={{ mb: 2 }}
        type="number"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
      />
      <TextField
        label="Custom Shortcode (optional)"
        fullWidth
        sx={{ mb: 2 }}
        value={shortcode}
        onChange={(e) => setShortcode(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Generate
      </Button>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">Generated Links:</Typography>
        {shortUrls.map((item) => (
          <Box key={item.id}>
            <p>
              Short: <a href={item.shortUrl}>{item.shortUrl}</a> | Long:{" "}
              {item.longUrl}
            </p>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UrlShortener;