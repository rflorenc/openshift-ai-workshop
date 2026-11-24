# 3. Read the results in MLflow

1. In the OpenShift AI dashboard, go to **Develop & train → Experiments**.
2. Select the workspace **`<USER_NAME>-canopy`** and open the experiment **evalhub-challenge**.
3. At the top of the experiment, switch from **GenAI** to **Model training**: the **Runs** list appears.
4. Each evaluation shows two runs: `arc-easy-<number>` (your job name) and one named after the job id
   (`<job id>_0`). Open the **`_0`** run: its **Metrics** are the scores (`acc`, `acc_norm`, `overall_score`)
   and its **Parameters** show the model, benchmark and number of examples.

**Go further**

- Run the job again with `num_examples` 20, or another benchmark from the list the notebook printed, and compare
  the runs side by side in MLflow (select both → **Compare**).
- Think about your own work: which questions would a benchmark for *your* use case contain, and who would sign off on the score?

**Clean up (optional):** the last notebook cells delete the job record (the MLflow run stays). To remove your
EvalHub: console → **Search** → resource **EvalHub** → `evalhub` → **Delete**; then delete the Secret `llama32-auth`.
