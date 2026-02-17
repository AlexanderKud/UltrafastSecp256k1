window.BENCHMARK_DATA = {
  "lastUpdate": 1771342277938,
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
      }
    ]
  }
}