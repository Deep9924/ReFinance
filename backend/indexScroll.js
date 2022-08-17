
const val = [
    {
      "name": "S&P 500",
      "percent_change": "-0.08%",
      "previous_close": "4151.94",
      "change": "-3.23",
      "symbol": "SPX"
    },
    {
      "name": "Nasdaq",
      "percent_change": "0.49%",
      "previous_close": "12720.58",
      "change": "52.42",
      "symbol": "IXIC"
    },
    {
      "name": "Dow Jones 30",
      "percent_change": "-0.26%",
      "previous_close": "32726.82",
      "change": "-85.68",
      "symbol": "DJIA"
    },
    {
      "name": "Russel 2000",
      "percent_change": "-0.13%",
      "previous_close": "1906.46",
      "change": "-2.47",
      "symbol": "RUT"
    },
    {
      "name": "TSX",
      "percent_change": "0.16%",
      "previous_close": "19577.04",
      "change": "31.10",
      "symbol": "TSX"
    },
    {
      "name": "Crude/Oil",
      "percent_change": "1.2%",
      "previous_close": "10.00",
      "change": "0.01",
      "symbol": "CL.1"
    },
    {
      "name": "Bitcoin USD",
      "percent_change": "-0.2%",
      "previous_close": "4500.02",
      "change": "-2.3",
      "symbol": "BTC/USD"
    },
    {
      "name": "Ethereum USD",
      "percent_change": "0.6%",
      "previous_close": "450.00",
      "change": "5.3",
      "symbol": "ETH/USD"
    }
]
  
module.exports = val;

const value = [{
  "SPX":{
    "symbol":"SPX",
    "name":"S&P 500",
    "exchange":"NYSE",
    "mic_code":"XNYS",
    "currency":"USD",
    "datetime":"2022-08-17",
    "timestamp":1660764112,
    "open":"4280.39990",
    "high":"4302.18018",
    "low":"4253.08008",
    "close":"4272.64014",
    "volume":"1617101675",
    "previous_close":"4305.35010",
    "change":"-32.70996",
    "percent_change":"-0.75975",
    "average_volume":"1805341937",
    "is_market_open":true,
    "fifty_two_week":{
        "low":"3636.87012",
        "high":"4818.62012",
        "low_change":"635.77002",
        "high_change":"-545.97998",
        "low_change_percent":"17.48124",
        "high_change_percent":"-11.33063",
        "range":"3636.870117 - 4818.620117"
    }
  },
  "IXIC":{
    "symbol":"IXIC",
    "name":"NASDAQ Composite",
    "exchange":"NASDAQ",
    "mic_code":"XNGS",
    "currency":"USD",
    "datetime":"2022-08-17",
    "timestamp":1660765011,
    "open":"12968.62695",
    "high":"13053.39648",
    "low":"12863.00586",
    "close":"12950.16309",
    "volume":"3652234749",
    "previous_close":"13102.54980",
    "change":"-152.38672",
    "percent_change":"-1.16303",
    "average_volume":"4952555475",
    "is_market_open":true,
    "fifty_two_week":{
        "low":"10565.13965",
        "high":"16212.23047",
        "low_change":"2385.02344",
        "high_change":"-3262.06738",
        "low_change_percent":"22.57446",
        "high_change_percent":"-20.12103",
        "range":"10565.139648 - 16212.230469"
    }
  },
  "DJIA":{
    "symbol":"DJIA",
    "name":"Global X Dow 30 Covered Call ETF",
    "exchange":"NYSE",
    "mic_code":"ARCX",
    "currency":"USD",
    "datetime":"2022-08-17",
    "timestamp":1660764148,
    "open":"23.40000",
    "high":"23.45950",
    "low":"23.40000",
    "close":"23.41920",
    "volume":"26256",
    "previous_close":"23.46000",
    "change":"-0.04080",
    "percent_change":"-0.17391",
    "average_volume":"37576",
    "is_market_open":true,
    "fifty_two_week":{
        "low":"22.20000",
        "high":"25.92000",
        "low_change":"1.21920",
        "high_change":"-2.50080",
        "low_change_percent":"5.49189",
        "high_change_percent":"-9.64814",
        "range":"22.200001 - 25.920000"
    }
  },
  "RUT":{
    "symbol":"RUT",
    "name":"Russell 2000",
    "exchange":"CBOE",
    "mic_code":"BATS",
    "currency":"USD",
    "datetime":"2022-08-17",
    "timestamp":1660764900,
    "open":"1993.65002",
    "high":"2001.09998",
    "low":"1971.30005",
    "close":"1987.55005",
    "volume":"0",
    "previous_close":"2020.53003",
    "change":"-32.97998",
    "percent_change":"-1.63224",
    "average_volume":"3210356000",
    "is_market_open":true,
    "fifty_two_week":{
        "low":"1641.46997",
        "high":"2461.69995",
        "low_change":"346.08008",
        "high_change":"-474.14990",
        "low_change_percent":"21.08355",
        "high_change_percent":"-19.26108",
        "range":"1641.469971 - 2461.699951"
    }
  },
  "COMP":{
    "symbol":"COMP",
    "name":"Compass, Inc.",
    "exchange":"NYSE",
    "mic_code":"XNYS",
    "currency":"USD",
    "datetime":"2022-08-17",
    "timestamp":1660765008,
    "open":"4.30500",
    "high":"4.31000",
    "low":"3.88000",
    "close":"3.88500",
    "volume":"3994414",
    "previous_close":"4.45000",
    "change":"-0.56500",
    "percent_change":"-12.69663",
    "average_volume":"4531771",
    "is_market_open":true,
    "fifty_two_week":{
        "low":"3.31500",
        "high":"17.21000",
        "low_change":"0.57000",
        "high_change":"-13.32500",
        "low_change_percent":"17.19457",
        "high_change_percent":"-77.42591",
        "range":"3.315000 - 17.209999"
    }
  },
  "BTC/USD":{
    "symbol":"BTC/USD",
    "name":"Bitcoin US Dollar",
    "exchange":"Coinbase Pro",
    "datetime":"2022-08-17",
    "timestamp":1660765008,
    "open":"23857.33008",
    "high":"24430.07031",
    "low":"23242.60938",
    "close":"23302.08984",
    "previous_close":"23867.72070",
    "change":"-565.63086",
    "percent_change":"-2.36986",
    "average_volume":"0",
    "rolling_1d_change":"-2.60469",
    "rolling_7d_change":"-1.51052",
    "rolling_change":"-2.60469",
    "is_market_open":true,
    "fifty_two_week":{
        "low":"17598.05078",
        "high":"68997.75781",
        "low_change":"5704.03906",
        "high_change":"-45695.66797",
        "low_change_percent":"32.41290",
        "high_change_percent":"-66.22776",
        "range":"17598.050781 - 68997.757812"
    }
  },
  "ETH/USD":{
    "symbol":"ETH/USD",
    "name":"Ethereum US Dollar",
    "exchange":"Huobi",
    "datetime":"2022-08-17",
    "timestamp":1660765013,
    "open":"1876.81995",
    "high":"1955.44995",
    "low":"1820.68994",
    "close":"1843.53003",
    "previous_close":"1876.71997",
    "change":"-33.18994",
    "percent_change":"-1.76851",
    "average_volume":"0",
    "rolling_1d_change":"-1.64588",
    "rolling_7d_change":"1.09733",
    "rolling_change":"-1.64588",
    "is_market_open":true,
    "fifty_two_week":{
        "low":"881.96002",
        "high":"4864.77979",
        "low_change":"961.57001",
        "high_change":"-3021.24976",
        "low_change_percent":"109.02648",
        "high_change_percent":"-62.10455",
        "range":"881.960022 - 4864.779785"
    }
  }
}]