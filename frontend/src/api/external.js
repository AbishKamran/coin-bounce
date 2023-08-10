import axios from "axios";

const NEWS_API_ENDPOINT =
  "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json";

const STARTUP_API_ENDPOINT =
  "https://script.googleusercontent.com/macros/echo?user_content_key=dUcpjNKuxRF7WcDJ29v-f84NJybKpM6kjlY3JUJP08jRVb_PGpRlgQtsvQZxvE3J9Mv_0C_ATUPDeFPqq1ZC72EaFIi-7HEgm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBl42KvabNcYtNVySft0BruFx67ga-Scz_FPCMK4LVGklaAwQicoKhhgXKOBrOhl-uJFRhvNaIMEorBxexkRaXa-bqTmfjcFsQ&lib=Mk5h2ZgoQCiOYhxauvkWNGQX1lSUDhI0G"

export const getNews = async () => {
  let response;

  try {
    response = await axios.get(NEWS_API_ENDPOINT);
    response = response.data.articles.slice(0, 15);
  } catch (error) {}

  return response;
};

export const getCrypto = async () => {
  let response;

  try {
    response = await axios.get(STARTUP_API_ENDPOINT);

    response = response.data;
  } catch (error) {}

  return response;
};
