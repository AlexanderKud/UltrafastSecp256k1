window.BENCHMARK_DATA = {
  "lastUpdate": 1771692133245,
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
      },
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
          "id": "cc20253ac3809fab0fa2fd1c475cc6252a81f4ab",
          "message": "docs: auto-inject version from VERSION.txt into Doxyfile\n\nPROJECT_NUMBER was hardcoded 3.0.0. Now uses 0.0.0-dev placeholder,\ndocs.yml injects actual version from VERSION.txt before doxygen runs.",
          "timestamp": "2026-02-20T04:53:24+04:00",
          "tree_id": "a31c851ccd5b4790105178063bb2e71b541eadfb",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/cc20253ac3809fab0fa2fd1c475cc6252a81f4ab"
        },
        "date": 1771566625663,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Field Mul",
            "value": 25,
            "unit": "ns"
          },
          {
            "name": "Field Square",
            "value": 22,
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
            "value": 255,
            "unit": "ns"
          },
          {
            "name": "Point Double",
            "value": 147,
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
          "id": "c649f6dfd80b1611b17f606206b156e3c2e6a058",
          "message": "ci: make publish steps continue-on-error + release job always runs\n\n- npmjs.com publish (ufsecp, react-native-ufsecp): continue-on-error: true\n- nuget.org publish: continue-on-error: true\n- Prevents already-published version 403 from blocking release asset upload",
          "timestamp": "2026-02-21T01:56:08Z",
          "tree_id": "feef8c7b5d6dfe3c680475f40d7468ad481d9578",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/c649f6dfd80b1611b17f606206b156e3c2e6a058"
        },
        "date": 1771692132044,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Field Mul",
            "value": 23,
            "unit": "ns"
          },
          {
            "name": "Field Square",
            "value": 20,
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
            "value": 255,
            "unit": "ns"
          },
          {
            "name": "Point Double",
            "value": 129,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}