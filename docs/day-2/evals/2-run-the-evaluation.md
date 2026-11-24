# 2. Run an evaluation from a notebook

1. Create your workbench (you keep using it in Labs 4 and 5): open OpenShift AI (`https://rh-ai.<CLUSTER_DOMAIN>`),
   click the project **`<USER_NAME>-canopy`** → **Create a workbench**, and fill in:
    - Name: `<USER_NAME>-canopy`
    - Image: **GenAI Labs Code Server**
    - Hardware profile: the default CPU profile
    - Storage and connections: leave as they are

    **Create workbench**. When the status is **Running**, open it by clicking its name.
2. In the workbench, open a **Terminal** (hamburger menu, top left → **Terminal** → **New Terminal**) and download the notebook:

    ```bash
    curl -LO https://rflorenc.github.io/openshift-ai-workshop/day-2/evals/evalhub-evals.ipynb
    ```

3. Get **your login token**: in the OpenShift console, click your user name (top right) → **Copy login command**
   → log in → **Display token**, and copy the `sha256~...` value.
4. Open `evalhub-evals.ipynb`, paste the token into the first code cell (`evalhub_token = "..."`), and run the
   cells **from top to bottom**. What happens:
    - the SDK is installed, and the notebook connects to **your** EvalHub (your project is found automatically)
    - it lists the providers and the benchmarks of `lm_evaluation_harness`
    - it submits a job: **arc_easy**, 10 examples, model **Llama 3.2**, results to the MLflow experiment
      **evalhub-evals**
    - it waits for the job (about a minute) and prints the scores, e.g. `acc` and `acc_norm`, and the MLflow run id

    The model's GPU is shared by every group: keep `num_examples` small.

**If something goes wrong**

| Symptom | What to do |
|---|---|
| `401` / `403` when connecting | the token is wrong or expired: copy a fresh one (step 3) |
| connection refused / timeout | your EvalHub is not ready yet: check step 1, part 3 |
| job state `failed` | look at the evaluation job's pod: **Workloads → Pods** in your project → its **Logs** |
| `ModuleNotFoundError: evalhub` | restart the kernel, then run the cells from the top again (the install cell puts the SDK in `~/.evalhub-sdk`) |
| `400 Bad Request` on submit, the EvalHub pod log says the experiment "is not active" | the MLflow experiment `evalhub-evals` was deleted (MLflow keeps the name reserved): set another `mlflow_experiment_name`, or restore it in MLflow (**Deleted experiments** → **Restore**) |

Next: [Read the results in MLflow](3-results-in-mlflow.md)
