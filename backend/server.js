import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

app.get("/api/youtube", async (req,res)=>{
  try{
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}`
    );
    const stats = response.data.items[0].statistics;
    res.json({
      subs: stats.subscriberCount,
      views: stats.viewCount
    });
  }catch{
    res.status(500).json({error:"API error"});
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log("🔥 Backend Running"));
