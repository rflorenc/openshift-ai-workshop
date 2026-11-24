# 1. Deploy your EvalHub

EvalHub runs as one small service per project. You create it with a single resource, plus a Secret the
evaluation jobs use to reach the model.

1. Open the **OpenShift console** (`https://console-openshift-console.<CLUSTER_DOMAIN>`), log in with **lab-users**,
   and select the project **`<USER_NAME>-canopy`** at the top.
2. Click **+** (top right) → **Import YAML**, paste the following and click **Create**:

    ```yaml
    apiVersion: trustyai.opendatahub.io/v1alpha1
    kind: EvalHub
    metadata:
      name: evalhub
    spec:
      tenancy: single
      replicas: 1
      database:
        type: sqlite
      providers:
        - lm-evaluation-harness
      env:
        - name: MLFLOW_TRACKING_URI
          value: https://mlflow.redhat-ods-applications.svc:8443/mlflow
    ---
    apiVersion: v1
    kind: Secret
    metadata:
      name: llama32-auth
    type: Opaque
    stringData:
      api-key: none
    ```

    - **EvalHub** `evalhub`: the evaluation service, with its job history in a small SQLite database, the
      lm-evaluation-harness provider, and MLflow for the results.
    - **Secret** `llama32-auth`: the workshop model needs no API key, but EvalHub expects a Secret with one.

3. Wait until it is ready (about 30 seconds): **Workloads → Pods** shows an `evalhub-…` pod **Running**, or in a
   workbench terminal:

    ```bash
    oc get evalhub evalhub
    ```

    `PHASE` must be **Ready**.

Next: [Run an evaluation from a notebook](2-run-the-evaluation.md)
