import { useEffect, useState, useRef } from "react";
import MyTable from "./MyTable";
function MyWeather() {
  const [LocationName, setLocationName] = useState("");
  const hasFetched = useRef(false);
  const [WeatherElement1, setWeatherElement1] = useState([]);
  const [ElementName1, setElementName1] = useState("");
  const [ElementName2, setElementName2] = useState("");
  const [ElementName11, setElementName11] = useState("");
  const [ElementName12, setElementName12] = useState("");
  const [mytablecontent, setMytablecontent] = useState([]);
  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    fetch(
      "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-007?Authorization=CWA-DC4A336D-CA75-40BA-BE53-4E92E770341E"
    )
      .then((response) => response.json())
      .then((data) => {
        const WeatherElement =
          data["records"]["Locations"][0]["Location"][1]["WeatherElement"];
        setLocationName(
          data["records"]["Locations"][0]["Location"][1]["LocationName"]
        );
        setElementName1(WeatherElement[1]["ElementName"]);
        setElementName2(WeatherElement[2]["ElementName"]);
        setElementName11(WeatherElement[11]["ElementName"]);
        setElementName12(WeatherElement[12]["ElementName"]);

        for (let i = 0; i < WeatherElement[1]["Time"].length; i++) {
          // console.log(
          //   WeatherElement[1]["Time"][i]["StartTime"].split("T")[0],
          //   WeatherElement[1]["Time"][i]["ElementValue"][0]["MaxTemperature"],
          //   WeatherElement[2]["Time"][i]["ElementValue"][0]["MinTemperature"],
          //   WeatherElement[11]["Time"][i]["ElementValue"][0][
          //     "ProbabilityOfPrecipitation"
          //   ],
          //   WeatherElement[12]["Time"][i]["ElementValue"][0]["Weather"]
          // );
          if (i % 2 == 0) {
            mytablecontent.push({
              column1:
                String(
                  WeatherElement[1]["Time"][i]["StartTime"].split("T")[0]
                ) + " 日",
              column2:
                WeatherElement[2]["Time"][i]["ElementValue"][0][
                  "MinTemperature"
                ],
              column3:
                WeatherElement[1]["Time"][i]["ElementValue"][0][
                  "MaxTemperature"
                ],
              column4:
                String(
                  WeatherElement[11]["Time"][i]["ElementValue"][0][
                    "ProbabilityOfPrecipitation"
                  ]
                ) + " %",
              column5:
                WeatherElement[12]["Time"][i]["ElementValue"][0]["Weather"],
            });
          } else {
            mytablecontent.push({
              column1:
                String(
                  WeatherElement[1]["Time"][i]["StartTime"].split("T")[0]
                ) + " 晚",
              column2:
                WeatherElement[2]["Time"][i]["ElementValue"][0][
                  "MinTemperature"
                ],
              column3:
                WeatherElement[1]["Time"][i]["ElementValue"][0][
                  "MaxTemperature"
                ],
              column4:
                String(
                  WeatherElement[11]["Time"][i]["ElementValue"][0][
                    "ProbabilityOfPrecipitation"
                  ]
                ) + " %",
              column5:
                WeatherElement[12]["Time"][i]["ElementValue"][0]["Weather"],
            });
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []); // 空依賴陣列，確保只執行一次

  return (
    <>
      <div>{LocationName}</div>
      <MyTable
        mytableth1="日期時間"
        mytableth2={ElementName2}
        mytableth3={ElementName1}
        mytableth4={ElementName11}
        mytableth5={ElementName12}
        mytablecontent={mytablecontent}
        showMytable5={true}
      />
      <div>
        <a
          href="https://www.cwa.gov.tw/V8/C/W/Town/Town.html?TID=6800200"
          target="_blank"
        >
          對照
        </a>
      </div>
    </>
  );
}

export default MyWeather;
