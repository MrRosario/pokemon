import axios from "axios";

export const translateText = async (text) => {
  return axios
    .post(
      "https://api.edenai.run/v2/translation/automatic_translation",
      {
        providers: "google",
        text,
        source_language: "en",
        target_language: "pt",
      },
      {
        headers: {
          Accept: "application/json",
          authorization: `Bearer ${process.env.REACT_APP_EDNAI_API_KEY}`,
        },
      }
    )
    .then((response) => {
      return response?.data.google.text;
    })
    .catch((error) => {
      return error;
    });
};
