window.BENCHMARK_DATA = {
  "lastUpdate": 1771530133904,
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
          "id": "d2f4ffa716286af41ea4a9062abb780319faf1d8",
          "message": "Merge dev into main: batch affine ops (CPU/CUDA/Metal/OpenCL), hash_accel, CI fixes",
          "timestamp": "2026-02-16T21:00:27+04:00",
          "tree_id": "c601ae06f81920a58af0208e68a934502df81cd7",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/d2f4ffa716286af41ea4a9062abb780319faf1d8"
        },
        "date": 1771342277267,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Field Mul",
            "value": 59,
            "unit": "ns"
          },
          {
            "name": "Field Square",
            "value": 56,
            "unit": "ns"
          },
          {
            "name": "Field Add",
            "value": 21,
            "unit": "ns"
          },
          {
            "name": "Field Sub",
            "value": 16,
            "unit": "ns"
          },
          {
            "name": "Point Double",
            "value": 569,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "committer": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "distinct": true,
          "id": "a85ae3a4dd50104e55c4bf18fb6c4294da5bc81a",
          "message": "Merge branch 'dev'",
          "timestamp": "2026-02-19T19:04:30Z",
          "tree_id": "ec5bc8f5661666a13888855cd7c0ac59f0c5ea3b",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/a85ae3a4dd50104e55c4bf18fb6c4294da5bc81a"
        },
        "date": 1771530133392,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Field Mul",
            "value": 25,
            "unit": "ns"
          },
          {
            "name": "Field Square",
            "value": 23,
            "unit": "ns"
          },
          {
            "name": "Field Add",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "Field Negate",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "Point Add",
            "value": 256,
            "unit": "ns"
          },
          {
            "name": "Point Double",
            "value": 146,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}