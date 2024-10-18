interface ShortenURLResponse {
  result_url: string;
  error?: string;
}

export const urlShortenerService = async (longUrl: string): Promise<string> => {
  const apiUrl =
    "https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten";
  //Request temporary access to the demo server here: https://cors-anywhere.herokuapp.com/corsdemo
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-zA-Z0-9$_.+!*'(),;?&=-]|%[0-9a-fA-F]{2})+:)?" +
      "(([a-zA-Z0-9][-a-zA-Z0-9]{0,253}[a-zA-Z0-9]\\.)+[a-zA-Z]{2,63})|" +
      "localhost|" +
      "(([0-9]{1,3}\\.){3}[0-9]{1,3}))" +
      "(:\\d+)?(\\/[-a-zA-Z0-9@:%._+~#=]*)?" +
      "(\\?[;&a-zA-Z0-9@:%._+~#=]*)?" +
      "(#[-a-zA-Z0-9@:%._+~#=]*)?$"
  );

  if (!longUrl.match(/^https?:\/\//)) {
    longUrl = `https://${longUrl}`;
  }

  if (!urlPattern.test(longUrl)) {
    throw new Error("Invalid URL format");
  }

  const encodedUrl = encodeURIComponent(longUrl);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `url=${encodedUrl}`,
    });

    const data: ShortenURLResponse = await response.json();

    if (response.ok && data.result_url) {
      return data.result_url;
    } else {
      throw new Error(data.error || "Failed to shorten the URL");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error: ${error.message}`);
    } else {
      throw new Error(`An unknown error occurred`);
    }
  }
};
