# Lab 3: Image captioning on a GPU (45–60 min)

<span class="chip lab">Lab · 60 min</span>


A classic deep-learning workflow on OpenShift AI: a pretrained **ResNet152** turns 5,000 COCO
images into feature vectors on a GPU, an **LSTM** learns to write captions from them, and **BLEU**
and cosine similarity score the captions. You run it in a GPU workbench, with the data coming
from a shared, read-only dataset store inside the cluster: no downloads from the internet, no
copies per person.

Values from your instructor: `<USER_NAME>`, `<PASSWORD>`, `<CLUSTER_DOMAIN>`, the GPU hardware profile.
Your project for this lab: **`<USER_NAME>-coco`**.

## 1. Create the workbench (10 min)

1. OpenShift AI dashboard `https://rh-ai.<CLUSTER_DOMAIN>` → project **`<USER_NAME>-coco`** →
   **Workbenches → Create workbench**:
   - Name: **`coco`**
   - Image: **Jupyter | PyTorch | CUDA | Python 3.12**, newest version
   - Hardware profile: **the GPU profile your instructor names**; memory limit at least **24 GiB**
     (the captions file is loaded into memory)
   - Connections: attach **`datasets (shared, read-only)`**
2. **Create workbench** and wait for **Running** (the PyTorch image is large: the first start takes a few minutes).

The connection sets `AWS_S3_ENDPOINT` and `AWS_S3_BUCKET` in the workbench: the notebook uses
them to fetch the data from the shared store.

## 2. Get the notebook (5 min)

Open the workbench, click the Git icon → **Clone a Repository**:

```
https://github.com/rflorenc/coco-captioning-repo.git
```

(about 7 MB; the data is not in the repository).

## 3. Run it (30–40 min)

Open `coco-captioning-repo/nb_ImageCaptionGeneration_COCO.ipynb` and run the cells from the top.

| Section | What happens | Time on one GPU (T4) |
|---|---|---|
| Get the data | installs `nltk`; fetches 5,029 images, the caption annotations and the ResNet152 weights from the shared store | ~15 s |
| Explore | sample images with their human captions | – |
| Feature extraction | ResNet152 turns each image into a 2048-value vector (GPU at ~97%) | ~1.5 min |
| Training | the LSTM learns to caption, 10 epochs | a few minutes |
| Evaluation | generated vs human captions: BLEU and cosine similarity | a few minutes |

While it runs, open a **Terminal** and watch the GPU: `nvidia-smi` (memory used, utilisation).

## Checkpoint

- captions generated for test images, next to the human ones
- the average BLEU and cosine scores printed (for reference: BLEU ~0.2, cosine ~0.67)
- you can say which step needed the GPU and how much GPU memory it used

## If something goes wrong

- Workbench stuck in **Pending**: no free GPU right now, tell your instructor (GPUs are shared out in turns).
- "Get the data" fails: check the connection is attached (workbench → Edit → Connections), then restart the workbench.
- Out of memory in the kernel: the memory limit is below 24 GiB; edit the workbench.
