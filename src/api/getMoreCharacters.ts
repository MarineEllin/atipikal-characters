import {MD5} from 'crypto-js';

const privateKey = import.meta.env.VITE_PRIVATE_KEY;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const timestamp = new Date().getTime();
const hash = MD5(`${timestamp}${privateKey}${publicKey}`);
const url = "http://gateway.marvel.com/v1/public/characters?";

export const fetchMoreCharacters = async (offset:number, limit:number) => {

    const params = new URLSearchParams({
    apikey: publicKey,
    ts: String(timestamp),
    hash: hash.toString(),
    offset: offset.toString(),
    limit: limit.toString(),
    });

    const requestUrl = `${url}${params.toString()}`;

    try {
      const response = await fetch(requestUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (e) {
      console.error("Error fetching characters:", e);
      throw e;
    }
  };