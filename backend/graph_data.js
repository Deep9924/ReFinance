/* import React from 'react'

const graph_data = () => {
  return (
    <div>
      graph-data
    </div>
  )
}

export default graph_data; */


const symb = [
  {
    "meta": {
      "symbol": "AAPL",
      "interval": "1min",
      "currency": "USD",
      "exchange_timezone": "America/New_York",
      "exchange": "NASDAQ",
      "mic_code": "XNGS",
      "type": "Common Stock"
    },
    "values": [
      {
        "datetime": "2022-08-17 15:59:00",
        "open": 174.48,
        "high": 174.63,
        "low": 174.48,
        "close": 174.55,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:58:00",
        "open": 174.46001,
        "high": 174.50999,
        "low": 174.41,
        "close": 174.49001,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:57:00",
        "open": 174.39999,
        "high": 174.47,
        "low": 174.39999,
        "close": 174.44,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:56:00",
        "open": 174.58,
        "high": 174.58,
        "low": 174.41,
        "close": 174.41,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:55:00",
        "open": 174.60001,
        "high": 174.64999,
        "low": 174.58,
        "close": 174.59,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:54:00",
        "open": 174.59,
        "high": 174.67,
        "low": 174.59,
        "close": 174.60001,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:53:00",
        "open": 174.53999,
        "high": 174.61,
        "low": 174.53999,
        "close": 174.56,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:52:00",
        "open": 174.25,
        "high": 174.52,
        "low": 174.25,
        "close": 174.5,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:51:00",
        "open": 174.36,
        "high": 174.36,
        "low": 174.25,
        "close": 174.25,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:50:00",
        "open": 174.47,
        "high": 174.50999,
        "low": 174.41,
        "close": 174.41,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:49:00",
        "open": 174.45,
        "high": 174.50999,
        "low": 174.45,
        "close": 174.50999,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:48:00",
        "open": 174.41,
        "high": 174.50999,
        "low": 174.41,
        "close": 174.46001,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:47:00",
        "open": 174.62,
        "high": 174.63,
        "low": 174.44,
        "close": 174.44,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:46:00",
        "open": 174.64999,
        "high": 174.67999,
        "low": 174.64,
        "close": 174.67999,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:45:00",
        "open": 174.78,
        "high": 174.78,
        "low": 174.63,
        "close": 174.63,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:44:00",
        "open": 174.84,
        "high": 174.89,
        "low": 174.81,
        "close": 174.81,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:43:00",
        "open": 174.67999,
        "high": 174.78,
        "low": 174.64,
        "close": 174.78,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:42:00",
        "open": 174.71001,
        "high": 174.77,
        "low": 174.69,
        "close": 174.69,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:41:00",
        "open": 174.78999,
        "high": 174.81,
        "low": 174.72,
        "close": 174.72,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:40:00",
        "open": 174.7,
        "high": 174.81,
        "low": 174.7,
        "close": 174.75,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:39:00",
        "open": 174.75,
        "high": 174.75,
        "low": 174.66,
        "close": 174.67999,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:38:00",
        "open": 174.72,
        "high": 174.78999,
        "low": 174.7,
        "close": 174.75,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:37:00",
        "open": 174.69,
        "high": 174.81,
        "low": 174.69,
        "close": 174.72,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:36:00",
        "open": 174.78999,
        "high": 174.8,
        "low": 174.67999,
        "close": 174.71001,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:35:00",
        "open": 174.60001,
        "high": 174.8,
        "low": 174.59,
        "close": 174.8,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:34:00",
        "open": 174.71001,
        "high": 174.72,
        "low": 174.62,
        "close": 174.62,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:33:00",
        "open": 174.66,
        "high": 174.78,
        "low": 174.66,
        "close": 174.72,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:32:00",
        "open": 174.75999,
        "high": 174.78,
        "low": 174.64,
        "close": 174.67,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:31:00",
        "open": 174.85001,
        "high": 174.92999,
        "low": 174.71001,
        "close": 174.73,
        "volume": 0
      },
      {
        "datetime": "2022-08-17 15:30:00",
        "open": 174.92,
        "high": 174.92999,
        "low": 174.78999,
        "close": 174.86,
        "volume": 0
      }
    ],
    "status": "ok"
  }]

  module.exports = symb;


 const dat =  [{
    "data": [
        {
            "meta": {
                "symbol": "AAPL",
                "interval": "5min",
                "currency": "USD",
                "exchange_timezone": "America/New_York",
                "exchange": "NASDAQ",
                "mic_code": "XNGS",
                "type": "Common Stock"
            },
            "values": [
                {
                    "datetime": "2022-08-31 13:15:00",
                    "open": "159.20500",
                    "high": "159.21600",
                    "low": "159.07001",
                    "close": "159.09500",
                    "volume": "84434"
                },
                {
                    "datetime": "2022-08-31 13:10:00",
                    "open": "159.17500",
                    "high": "159.34990",
                    "low": "159.14000",
                    "close": "159.20500",
                    "volume": "66144"
                },
                {
                    "datetime": "2022-08-31 13:05:00",
                    "open": "158.96001",
                    "high": "159.21001",
                    "low": "158.92000",
                    "close": "159.18820",
                    "volume": "31403"
                },
                {
                    "datetime": "2022-08-31 13:00:00",
                    "open": "159.04500",
                    "high": "159.06979",
                    "low": "158.92000",
                    "close": "158.97369",
                    "volume": "63263"
                },
                {
                    "datetime": "2022-08-31 12:55:00",
                    "open": "158.93500",
                    "high": "159.06000",
                    "low": "158.84500",
                    "close": "159.04100",
                    "volume": "59704"
                },
                {
                    "datetime": "2022-08-31 12:50:00",
                    "open": "159.01500",
                    "high": "159.07001",
                    "low": "158.84000",
                    "close": "158.92000",
                    "volume": "67239"
                },
                {
                    "datetime": "2022-08-31 12:45:00",
                    "open": "158.83501",
                    "high": "159.02000",
                    "low": "158.78999",
                    "close": "159.01500",
                    "volume": "119344"
                },
                {
                    "datetime": "2022-08-31 12:40:00",
                    "open": "159.02499",
                    "high": "159.03999",
                    "low": "158.73000",
                    "close": "158.83009",
                    "volume": "94586"
                },
                {
                    "datetime": "2022-08-31 12:35:00",
                    "open": "159.11501",
                    "high": "159.21001",
                    "low": "158.95000",
                    "close": "159.03101",
                    "volume": "57760"
                },
                {
                    "datetime": "2022-08-31 12:30:00",
                    "open": "159.10500",
                    "high": "159.23000",
                    "low": "159.05791",
                    "close": "159.10989",
                    "volume": "64017"
                },
                {
                    "datetime": "2022-08-31 12:25:00",
                    "open": "159.06500",
                    "high": "159.14000",
                    "low": "158.95000",
                    "close": "159.10600",
                    "volume": "101834"
                },
                {
                    "datetime": "2022-08-31 12:20:00",
                    "open": "159.29820",
                    "high": "159.31160",
                    "low": "158.99001",
                    "close": "159.06000",
                    "volume": "131260"
                },
                {
                    "datetime": "2022-08-31 12:15:00",
                    "open": "159.34000",
                    "high": "159.60500",
                    "low": "159.23000",
                    "close": "159.30000",
                    "volume": "80374"
                },
                {
                    "datetime": "2022-08-31 12:10:00",
                    "open": "159.37041",
                    "high": "159.42990",
                    "low": "159.17010",
                    "close": "159.34959",
                    "volume": "120344"
                },
                {
                    "datetime": "2022-08-31 12:05:00",
                    "open": "159.49500",
                    "high": "159.53000",
                    "low": "159.25999",
                    "close": "159.37000",
                    "volume": "101924"
                },
                {
                    "datetime": "2022-08-31 12:00:00",
                    "open": "159.60500",
                    "high": "159.70500",
                    "low": "159.36000",
                    "close": "159.49010",
                    "volume": "94446"
                },
                {
                    "datetime": "2022-08-31 11:55:00",
                    "open": "159.54500",
                    "high": "159.77000",
                    "low": "159.54500",
                    "close": "159.59500",
                    "volume": "131008"
                },
                {
                    "datetime": "2022-08-31 11:50:00",
                    "open": "159.42010",
                    "high": "159.63000",
                    "low": "159.39500",
                    "close": "159.53999",
                    "volume": "90658"
                },
                {
                    "datetime": "2022-08-31 11:45:00",
                    "open": "159.57260",
                    "high": "159.63499",
                    "low": "159.34500",
                    "close": "159.42999",
                    "volume": "71022"
                },
                {
                    "datetime": "2022-08-31 11:40:00",
                    "open": "159.38000",
                    "high": "159.63989",
                    "low": "159.28500",
                    "close": "159.57001",
                    "volume": "124609"
                },
                {
                    "datetime": "2022-08-31 11:35:00",
                    "open": "159.10001",
                    "high": "159.53999",
                    "low": "159.08360",
                    "close": "159.39000",
                    "volume": "70229"
                },
                {
                    "datetime": "2022-08-31 11:30:00",
                    "open": "158.97270",
                    "high": "159.25000",
                    "low": "158.72009",
                    "close": "159.11000",
                    "volume": "152530"
                },
                {
                    "datetime": "2022-08-31 11:25:00",
                    "open": "159.05000",
                    "high": "159.17999",
                    "low": "158.96001",
                    "close": "158.98489",
                    "volume": "71356"
                },
                {
                    "datetime": "2022-08-31 11:20:00",
                    "open": "158.96500",
                    "high": "159.12691",
                    "low": "158.87000",
                    "close": "159.03999",
                    "volume": "33479"
                },
                {
                    "datetime": "2022-08-31 11:15:00",
                    "open": "158.64999",
                    "high": "158.97000",
                    "low": "158.58000",
                    "close": "158.96001",
                    "volume": "130608"
                }
            ],
            "status": "ok"
        },
        {
            "meta": {
                "symbol": "AAPL",
                "interval": "1day",
                "currency": "USD",
                "exchange_timezone": "America/New_York",
                "exchange": "NASDAQ",
                "mic_code": "XNGS",
                "type": "Common Stock"
            },
            "values": [
                {
                    "datetime": "2022-08-31",
                    "open": "160.28500",
                    "high": "160.58000",
                    "low": "158.40500",
                    "close": "159.09500",
                    "volume": "84434"
                },
                {
                    "datetime": "2022-08-30",
                    "open": "162.13000",
                    "high": "162.56000",
                    "low": "157.72000",
                    "close": "158.91000",
                    "volume": "77398800"
                },
                {
                    "datetime": "2022-08-29",
                    "open": "161.14999",
                    "high": "162.89999",
                    "low": "159.82001",
                    "close": "161.38000",
                    "volume": "73314000"
                },
                {
                    "datetime": "2022-08-26",
                    "open": "170.57001",
                    "high": "171.05000",
                    "low": "163.56000",
                    "close": "163.62000",
                    "volume": "78823500"
                },
                {
                    "datetime": "2022-08-25",
                    "open": "168.78000",
                    "high": "170.14000",
                    "low": "168.35001",
                    "close": "170.03000",
                    "volume": "51218200"
                },
                {
                    "datetime": "2022-08-24",
                    "open": "167.32001",
                    "high": "168.11000",
                    "low": "166.25000",
                    "close": "167.53000",
                    "volume": "53841500"
                },
                {
                    "datetime": "2022-08-23",
                    "open": "167.08000",
                    "high": "168.71001",
                    "low": "166.64999",
                    "close": "167.23000",
                    "volume": "54147100"
                },
                {
                    "datetime": "2022-08-22",
                    "open": "169.69000",
                    "high": "169.86000",
                    "low": "167.14000",
                    "close": "167.57001",
                    "volume": "69026800"
                },
                {
                    "datetime": "2022-08-19",
                    "open": "173.03000",
                    "high": "173.74001",
                    "low": "171.31000",
                    "close": "171.52000",
                    "volume": "70211500"
                },
                {
                    "datetime": "2022-08-18",
                    "open": "173.75000",
                    "high": "174.89999",
                    "low": "173.12000",
                    "close": "174.14999",
                    "volume": "62290100"
                },
                {
                    "datetime": "2022-08-17",
                    "open": "172.77000",
                    "high": "176.14999",
                    "low": "172.57001",
                    "close": "174.55000",
                    "volume": "79542000"
                },
                {
                    "datetime": "2022-08-16",
                    "open": "172.78000",
                    "high": "173.71001",
                    "low": "171.66000",
                    "close": "173.03000",
                    "volume": "56377100"
                },
                {
                    "datetime": "2022-08-15",
                    "open": "171.52000",
                    "high": "173.39000",
                    "low": "171.35001",
                    "close": "173.19000",
                    "volume": "54091700"
                },
                {
                    "datetime": "2022-08-12",
                    "open": "169.82001",
                    "high": "172.17000",
                    "low": "169.39999",
                    "close": "172.10001",
                    "volume": "67946400"
                },
                {
                    "datetime": "2022-08-11",
                    "open": "170.06000",
                    "high": "170.99001",
                    "low": "168.19000",
                    "close": "168.49001",
                    "volume": "57149200"
                },
                {
                    "datetime": "2022-08-10",
                    "open": "167.67999",
                    "high": "169.34000",
                    "low": "166.89999",
                    "close": "169.24001",
                    "volume": "70170500"
                },
                {
                    "datetime": "2022-08-09",
                    "open": "164.02000",
                    "high": "165.82001",
                    "low": "163.25000",
                    "close": "164.92000",
                    "volume": "63135500"
                },
                {
                    "datetime": "2022-08-08",
                    "open": "166.37000",
                    "high": "167.81000",
                    "low": "164.20000",
                    "close": "164.87000",
                    "volume": "60276900"
                },
                {
                    "datetime": "2022-08-05",
                    "open": "163.21001",
                    "high": "165.85001",
                    "low": "163.00000",
                    "close": "165.35001",
                    "volume": "56646600"
                },
                {
                    "datetime": "2022-08-04",
                    "open": "166.00999",
                    "high": "167.19000",
                    "low": "164.42999",
                    "close": "165.81000",
                    "volume": "55474100"
                },
                {
                    "datetime": "2022-08-03",
                    "open": "160.84000",
                    "high": "166.59000",
                    "low": "160.75000",
                    "close": "166.13000",
                    "volume": "82507500"
                },
                {
                    "datetime": "2022-08-02",
                    "open": "160.10001",
                    "high": "162.41000",
                    "low": "159.63000",
                    "close": "160.00999",
                    "volume": "59907000"
                },
                {
                    "datetime": "2022-08-01",
                    "open": "161.00999",
                    "high": "163.59000",
                    "low": "160.89000",
                    "close": "161.50999",
                    "volume": "67829400"
                },
                {
                    "datetime": "2022-07-29",
                    "open": "161.24001",
                    "high": "163.63000",
                    "low": "159.50000",
                    "close": "162.50999",
                    "volume": "101689200"
                },
                {
                    "datetime": "2022-07-28",
                    "open": "156.98000",
                    "high": "157.64000",
                    "low": "154.41000",
                    "close": "157.35001",
                    "volume": "81378700"
                }
            ],
            "status": "ok"
        },
        {
            "meta": {
                "symbol": "AAPL",
                "interval": "5min",
                "currency": "USD",
                "exchange_timezone": "America/New_York",
                "exchange": "NASDAQ",
                "mic_code": "XNGS",
                "type": "Common Stock",
                "indicator": {
                    "name": "EMA - Exponential Moving Average",
                    "series_type": "close",
                    "time_period": 12
                }
            },
            "values": [
                {
                    "datetime": "2022-08-31 13:15:00",
                    "ema": "159.10576"
                },
                {
                    "datetime": "2022-08-31 13:10:00",
                    "ema": "159.10772"
                },
                {
                    "datetime": "2022-08-31 13:05:00",
                    "ema": "159.09003"
                },
                {
                    "datetime": "2022-08-31 13:00:00",
                    "ema": "159.07218"
                },
                {
                    "datetime": "2022-08-31 12:55:00",
                    "ema": "159.09009"
                },
                {
                    "datetime": "2022-08-31 12:50:00",
                    "ema": "159.09901"
                },
                {
                    "datetime": "2022-08-31 12:45:00",
                    "ema": "159.13156"
                },
                {
                    "datetime": "2022-08-31 12:40:00",
                    "ema": "159.15275"
                },
                {
                    "datetime": "2022-08-31 12:35:00",
                    "ema": "159.21142"
                },
                {
                    "datetime": "2022-08-31 12:30:00",
                    "ema": "159.24422"
                },
                {
                    "datetime": "2022-08-31 12:25:00",
                    "ema": "159.26865"
                },
                {
                    "datetime": "2022-08-31 12:20:00",
                    "ema": "159.29822"
                },
                {
                    "datetime": "2022-08-31 12:15:00",
                    "ema": "159.34153"
                },
                {
                    "datetime": "2022-08-31 12:10:00",
                    "ema": "159.34908"
                },
                {
                    "datetime": "2022-08-31 12:05:00",
                    "ema": "159.34899"
                },
                {
                    "datetime": "2022-08-31 12:00:00",
                    "ema": "159.34517"
                },
                {
                    "datetime": "2022-08-31 11:55:00",
                    "ema": "159.31882"
                },
                {
                    "datetime": "2022-08-31 11:50:00",
                    "ema": "159.26860"
                },
                {
                    "datetime": "2022-08-31 11:45:00",
                    "ema": "159.21926"
                },
                {
                    "datetime": "2022-08-31 11:40:00",
                    "ema": "159.18094"
                },
                {
                    "datetime": "2022-08-31 11:35:00",
                    "ema": "159.11021"
                },
                {
                    "datetime": "2022-08-31 11:30:00",
                    "ema": "159.05933"
                },
                {
                    "datetime": "2022-08-31 11:25:00",
                    "ema": "159.05012"
                },
                {
                    "datetime": "2022-08-31 11:20:00",
                    "ema": "159.06198"
                },
                {
                    "datetime": "2022-08-31 11:15:00",
                    "ema": "159.06598"
                }
            ],
            "status": "ok"
        },
        {
            "meta": {
                "symbol": "AAPL",
                "interval": "1day",
                "currency": "USD",
                "exchange_timezone": "America/New_York",
                "exchange": "NASDAQ",
                "mic_code": "XNGS",
                "type": "Common Stock",
                "indicator": {
                    "name": "EMA - Exponential Moving Average",
                    "series_type": "close",
                    "time_period": 12
                }
            },
            "values": [
                {
                    "datetime": "2022-08-31",
                    "ema": "164.76776"
                },
                {
                    "datetime": "2022-08-30",
                    "ema": "165.79918"
                },
                {
                    "datetime": "2022-08-29",
                    "ema": "167.05175"
                },
                {
                    "datetime": "2022-08-26",
                    "ema": "168.08298"
                },
                {
                    "datetime": "2022-08-25",
                    "ema": "168.89443"
                },
                {
                    "datetime": "2022-08-24",
                    "ema": "168.68796"
                },
                {
                    "datetime": "2022-08-23",
                    "ema": "168.89850"
                },
                {
                    "datetime": "2022-08-22",
                    "ema": "169.20187"
                },
                {
                    "datetime": "2022-08-19",
                    "ema": "169.49857"
                },
                {
                    "datetime": "2022-08-18",
                    "ema": "169.13104"
                },
                {
                    "datetime": "2022-08-17",
                    "ema": "168.21850"
                },
                {
                    "datetime": "2022-08-16",
                    "ema": "167.06732"
                },
                {
                    "datetime": "2022-08-15",
                    "ema": "165.98319"
                },
                {
                    "datetime": "2022-08-12",
                    "ema": "164.67287"
                },
                {
                    "datetime": "2022-08-11",
                    "ema": "163.32248"
                },
                {
                    "datetime": "2022-08-10",
                    "ema": "162.38293"
                },
                {
                    "datetime": "2022-08-09",
                    "ema": "161.13618"
                },
                {
                    "datetime": "2022-08-08",
                    "ema": "160.44822"
                },
                {
                    "datetime": "2022-08-05",
                    "ema": "159.64426"
                },
                {
                    "datetime": "2022-08-04",
                    "ema": "158.60685"
                },
                {
                    "datetime": "2022-08-03",
                    "ema": "157.29719"
                },
                {
                    "datetime": "2022-08-02",
                    "ema": "155.69122"
                },
                {
                    "datetime": "2022-08-01",
                    "ema": "154.90599"
                },
                {
                    "datetime": "2022-07-29",
                    "ema": "153.70526"
                },
                {
                    "datetime": "2022-07-28",
                    "ema": "152.10440"
                }
            ],
            "status": "ok"
        },
        {
            "symbol": "AAPL",
            "name": "Apple Inc",
            "exchange": "NASDAQ",
            "mic_code": "XNGS",
            "currency": "USD",
            "datetime": "2022-08-31 13:15:00",
            "timestamp": 1661966210,
            "open": "159.20500",
            "high": "159.21600",
            "low": "159.07001",
            "close": "159.09500",
            "volume": "84434",
            "previous_close": "159.20500",
            "change": "-0.11000",
            "percent_change": "-0.06909",
            "average_volume": "70789",
            "is_market_open": true,
            "fifty_two_week": {
                "low": "157.73000",
                "high": "170.99001",
                "low_change": "1.36501",
                "high_change": "-11.89500",
                "low_change_percent": "0.86541",
                "high_change_percent": "-6.95655",
                "range": "157.729996 - 170.990005"
            }
        },
        {
            "symbol": "AAPL",
            "name": "Apple Inc",
            "exchange": "NASDAQ",
            "mic_code": "XNGS",
            "currency": "USD",
            "datetime": "2022-08-31",
            "timestamp": 1661966210,
            "open": "160.28500",
            "high": "160.58000",
            "low": "158.40500",
            "close": "159.09500",
            "volume": "84434",
            "previous_close": "158.91000",
            "change": "0.18500",
            "percent_change": "0.11642",
            "average_volume": "59035593",
            "is_market_open": true,
            "fifty_two_week": {
                "low": "129.03999",
                "high": "182.94000",
                "low_change": "30.05501",
                "high_change": "-23.84500",
                "low_change_percent": "23.29123",
                "high_change_percent": "-13.03433",
                "range": "129.039993 - 182.940002"
            }
        },
        {
            "meta": {
                "symbol": "AAPL",
                "interval": "5min",
                "currency": "USD",
                "exchange_timezone": "America/New_York",
                "exchange": "NASDAQ",
                "mic_code": "XNGS",
                "type": "Common Stock",
                "indicator": {
                    "name": "ADX - Average Directional Index",
                    "time_period": 14
                }
            },
            "values": [
                {
                    "datetime": "2022-08-31 11:15:00",
                    "adx": "14.90374"
                },
                {
                    "datetime": "2022-08-31 11:20:00",
                    "adx": "14.34486"
                },
                {
                    "datetime": "2022-08-31 11:25:00",
                    "adx": "13.96380"
                },
                {
                    "datetime": "2022-08-31 11:30:00",
                    "adx": "13.03789"
                },
                {
                    "datetime": "2022-08-31 11:35:00",
                    "adx": "12.80546"
                },
                {
                    "datetime": "2022-08-31 11:40:00",
                    "adx": "12.83517"
                },
                {
                    "datetime": "2022-08-31 11:45:00",
                    "adx": "12.86276"
                },
                {
                    "datetime": "2022-08-31 11:50:00",
                    "adx": "12.88838"
                },
                {
                    "datetime": "2022-08-31 11:55:00",
                    "adx": "13.29974"
                },
                {
                    "datetime": "2022-08-31 12:00:00",
                    "adx": "12.98925"
                },
                {
                    "datetime": "2022-08-31 12:05:00",
                    "adx": "12.34757"
                },
                {
                    "datetime": "2022-08-31 12:10:00",
                    "adx": "11.49226"
                },
                {
                    "datetime": "2022-08-31 12:15:00",
                    "adx": "11.22655"
                },
                {
                    "datetime": "2022-08-31 12:20:00",
                    "adx": "10.69296"
                },
                {
                    "datetime": "2022-08-31 12:25:00",
                    "adx": "10.32703"
                },
                {
                    "datetime": "2022-08-31 12:30:00",
                    "adx": "9.65805"
                },
                {
                    "datetime": "2022-08-31 12:35:00",
                    "adx": "9.41435"
                },
                {
                    "datetime": "2022-08-31 12:40:00",
                    "adx": "9.89036"
                },
                {
                    "datetime": "2022-08-31 12:45:00",
                    "adx": "10.33237"
                },
                {
                    "datetime": "2022-08-31 12:50:00",
                    "adx": "10.51976"
                },
                {
                    "datetime": "2022-08-31 12:55:00",
                    "adx": "10.69377"
                },
                {
                    "datetime": "2022-08-31 13:00:00",
                    "adx": "10.80634"
                },
                {
                    "datetime": "2022-08-31 13:05:00",
                    "adx": "10.22423"
                },
                {
                    "datetime": "2022-08-31 13:10:00",
                    "adx": "9.92191"
                },
                {
                    "datetime": "2022-08-31 13:15:00",
                    "adx": "9.31243"
                }
            ],
            "status": "ok"
        },
        {
            "meta": {
                "symbol": "AAPL",
                "interval": "1day",
                "currency": "USD",
                "exchange_timezone": "America/New_York",
                "exchange": "NASDAQ",
                "mic_code": "XNGS",
                "type": "Common Stock",
                "indicator": {
                    "name": "ADX - Average Directional Index",
                    "time_period": 14
                }
            },
            "values": [
                {
                    "datetime": "2022-07-28",
                    "adx": "17.09174"
                },
                {
                    "datetime": "2022-07-29",
                    "adx": "18.81603"
                },
                {
                    "datetime": "2022-08-01",
                    "adx": "20.41715"
                },
                {
                    "datetime": "2022-08-02",
                    "adx": "21.44156"
                },
                {
                    "datetime": "2022-08-03",
                    "adx": "23.04848"
                },
                {
                    "datetime": "2022-08-04",
                    "adx": "24.62586"
                },
                {
                    "datetime": "2022-08-05",
                    "adx": "25.55352"
                },
                {
                    "datetime": "2022-08-08",
                    "adx": "26.73148"
                },
                {
                    "datetime": "2022-08-09",
                    "adx": "27.46253"
                },
                {
                    "datetime": "2022-08-10",
                    "adx": "28.70351"
                },
                {
                    "datetime": "2022-08-11",
                    "adx": "30.08948"
                },
                {
                    "datetime": "2022-08-12",
                    "adx": "31.53832"
                },
                {
                    "datetime": "2022-08-15",
                    "adx": "33.04804"
                },
                {
                    "datetime": "2022-08-16",
                    "adx": "34.49362"
                },
                {
                    "datetime": "2022-08-17",
                    "adx": "36.15619"
                },
                {
                    "datetime": "2022-08-18",
                    "adx": "37.69999"
                },
                {
                    "datetime": "2022-08-19",
                    "adx": "38.27402"
                },
                {
                    "datetime": "2022-08-22",
                    "adx": "37.15062"
                },
                {
                    "datetime": "2022-08-23",
                    "adx": "35.93469"
                },
                {
                    "datetime": "2022-08-24",
                    "adx": "34.65925"
                },
                {
                    "datetime": "2022-08-25",
                    "adx": "33.97389"
                },
                {
                    "datetime": "2022-08-26",
                    "adx": "31.74652"
                },
                {
                    "datetime": "2022-08-29",
                    "adx": "30.23587"
                },
                {
                    "datetime": "2022-08-30",
                    "adx": "29.29936"
                },
                {
                    "datetime": "2022-08-31",
                    "adx": "28.42974"
                }
            ],
            "status": "ok"
        }
    ],
    "status": "ok"
}]

module.exports = dat;