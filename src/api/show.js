import axios from "axios";

export default axios.create({
  baseURL: "http://0813177971aa.ngrok.io",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhbHRhbCIsInBhc3N3b3JkIjoiYWJjIiwiaWF0IjoxNTk2NDA5MzQyLCJleHAiOjE1OTY0MjczNDJ9.Aji8D_785nsPCGDwC1NvYd2ujdowlkc_mK89S8XnfEc",
  },
});
