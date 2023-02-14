import { config } from "dotenv";
config();

import { makeHighIQTweet } from "./highIQTweet";

makeHighIQTweet("Valentines day 2023").then((res) => {
    console.log(res);
});
