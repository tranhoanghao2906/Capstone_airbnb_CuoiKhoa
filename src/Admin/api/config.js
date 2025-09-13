import axios from "axios";

export const CYBER_TOKERN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4NyIsIkhldEhhblN0cmluZyI6IjIzLzAzLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc3NDIyNDAwMDAwMCIsIm5iZiI6MTc0NzI2NzIwMCwiZXhwIjoxNzc0Mzk2ODAwfQ.8AWlFkAkN_xwXppJe_FTgiJXS4WlItjxLy5olIf33HY";

export const https = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn",
  headers: {
    tokenCybersoft: CYBER_TOKERN,
  },
});

export const API_URL = "https://airbnbnew.cybersoft.edu.vn/api/users";