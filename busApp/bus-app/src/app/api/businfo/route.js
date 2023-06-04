import "dotenv/config";
import * as dotenv from "dotenv";
dotenv.config({ path: "./env" });

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const BusStopNum = searchParams.get("BusStopNum");
  const myHeaders = new Headers();
  myHeaders.append("AccountKey", process.env.SECRET_KEY);
  console.log(process.env.SECRET_KEY);
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  let jsonData;
  await fetch(
    `http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${BusStopNum}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      jsonData = result;
    })
    .catch((error) => console.log("error", error));
  return new Response(jsonData);
}
