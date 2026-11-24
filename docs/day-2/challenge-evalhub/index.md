# Challenge: evaluate your model with EvalHub (30 min)

<span class="chip activity">Activity · 30 min</span>


!!! danger "Extra challenge: at your own risk"
    EvalHub is a **Technology Preview** in OpenShift AI 3.5. You set it up yourself, from scratch. It may not
    work for everyone, the instructor has limited time to help, and nothing in the other labs depends on it.

How good is the workshop model, measured instead of guessed? **EvalHub** is OpenShift AI's evaluation service:
you send it a model and a benchmark, it runs the evaluation as a job in your project and logs the scores to
**MLflow**. You deploy your own EvalHub, run the **arc_easy** benchmark (grade-school science questions) against
**Llama 3.2** with **lm-evaluation-harness**, and read the result in MLflow.

Values from your instructor: `<USER_NAME>`, your password, `<CLUSTER_DOMAIN>`.
Your project: **`<USER_NAME>-canopy`** (the same as Labs 4 and 5).

| Step | Page | Time |
|---|---|---|
| 1 | [Deploy your EvalHub](1-deploy-evalhub.md) | 5 min |
| 2 | [Run an evaluation from a notebook](2-run-the-evaluation.md) | 15 min |
| 3 | [Read the results in MLflow](3-results-in-mlflow.md) | 10 min |

**Checkpoint:** an `arc_easy` accuracy for Llama 3.2 in the notebook, and the same run in MLflow under your project.
