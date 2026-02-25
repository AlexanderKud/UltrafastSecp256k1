window.BENCHMARK_DATA = {
  "lastUpdate": 1771991351275,
  "repoUrl": "https://github.com/AlexanderKud/UltrafastSecp256k1",
  "entries": {
    "UltrafastSecp256k1 Performance": [
      {
        "commit": {
          "author": {
            "email": "payysoon@gmail.com",
            "name": "vano",
            "username": "shrec"
          },
          "committer": {
            "email": "payysoon@gmail.com",
            "name": "vano",
            "username": "shrec"
          },
          "distinct": true,
          "id": "b094b07d267240ad5b3c93e2b770e0173b92280b",
          "message": "Merge branch 'dev'",
          "timestamp": "2026-02-25T00:36:04+04:00",
          "tree_id": "f6fb70de85a1309b8185c0c7f96ec5e9e1cce20f",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/b094b07d267240ad5b3c93e2b770e0173b92280b"
        },
        "date": 1771991350127,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "==============================================\nField Mul",
            "value": 27,
            "unit": "ns"
          },
          {
            "name": "Field Square",
            "value": 22,
            "unit": "ns"
          },
          {
            "name": "Field Add",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "Field Negate",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "Field Inverse",
            "value": 1000,
            "unit": "ns"
          },
          {
            "name": "==============================================\n  POINT OPERATIONS\n==============================================\nPoint Add",
            "value": 278,
            "unit": "ns"
          },
          {
            "name": "Point Double",
            "value": 150,
            "unit": "ns"
          },
          {
            "name": "Point Scalar Mul",
            "value": 38000,
            "unit": "ns"
          },
          {
            "name": "Generator Mul",
            "value": 10000,
            "unit": "ns"
          },
          {
            "name": "ECDSA Sign",
            "value": 13000,
            "unit": "ns"
          },
          {
            "name": "ECDSA Verify",
            "value": 47000,
            "unit": "ns"
          },
          {
            "name": "Schnorr Sign",
            "value": 24000,
            "unit": "ns"
          },
          {
            "name": "Schnorr Verify",
            "value": 53000,
            "unit": "ns"
          },
          {
            "name": "==============================================\n  BATCH OPERATIONS\n==============================================\nBatch Inverse (n=100)",
            "value": 142,
            "unit": "ns"
          },
          {
            "name": "Batch Inverse (n=1000)",
            "value": 132,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}