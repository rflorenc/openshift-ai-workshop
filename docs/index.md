---
hide: [navigation, toc]
---

# Red Hat OpenShift AI Hands-on Workshop

Two days of hands-on work on **Red Hat OpenShift AI**: you serve a language model, take a model from a
notebook to production with pipelines, train on a GPU, ground answers in your documents, put guardrails in
front of a model and build an agent that uses tools.

## Day 1: Platform, model serving, MLOps

<div class="ws-grid" markdown>
<div class="ws-card" markdown>
<span class="chip lab">Lab · 70 min</span>
### [Lab 1: Serve an LLM](day-1/lab-1-serve-an-llm/index.md)
A language model on CPU with vLLM and KServe, from the model catalog to your own endpoint.
</div>
<div class="ws-card" markdown>
<span class="chip lab">Lab · 105 min</span>
### [Lab 2: MLOps with Jukebox](day-1/lab-2-mlops/index.md)
Workbench, connections, Kubeflow Pipelines and a model in the registry.
</div>
<div class="ws-card" markdown>
<span class="chip lab">Lab · 60 min</span>
### [Lab 3: Image captioning on a GPU](day-1/lab-3-image-captioning/index.md)
ResNet features and an LSTM captioner, trained on a GPU.
</div>
</div>

## Day 2: GenAI — RAG, guardrails, agents

<div class="ws-grid" markdown>
<div class="ws-card" markdown>
<span class="chip lab">Lab · 60 min</span>
### [Lab 4: RAG](day-2/lab-4-rag/index.md)
Embeddings, Milvus, Docling and Llama Stack: answers grounded in your documents.
</div>
<div class="ws-card" markdown>
<span class="chip activity">Activity · 45 min</span>
### [Guardrails: break the bot](day-2/guardrails/index.md)
NeMo Guardrails in front of the model, then try to get past it.
</div>
<div class="ws-card" markdown>
<span class="chip lab">Lab · 75 min</span>
### [Lab 5: Agents and MCP](day-2/lab-5-agents-and-mcp/index.md)
Tools, MCP servers, a ReAct agent and LangGraph on Llama Stack.
</div>
</div>

## Your values { #your-values }

The guides contain placeholders such as `<USER_NAME>` and `<CLUSTER_DOMAIN>`. Enter the values your
instructor gave you once; they are stored **in this browser only** and filled into every page.

<form id="ws-values-form" class="ws-values" autocomplete="off">
  <label for="ws-user">User name</label>
  <input id="ws-user" name="user" placeholder="e.g. user-01">
  <label for="ws-password">Password</label>
  <input id="ws-password" name="password" type="password" placeholder="from your instructor">
  <label for="ws-domain">Cluster domain (or paste the console URL)</label>
  <input id="ws-domain" name="domain" placeholder="e.g. apps.cluster.example.com">
  <div class="ws-buttons">
    <button type="submit" class="save">Save</button>
    <button type="button" class="clear">Clear</button>
    <span class="ws-status"></span>
  </div>
</form>

## Logging in

- **OpenShift AI:** `https://rh-ai.<CLUSTER_DOMAIN>`, log in with your user name and password.
- **OpenShift console:** `https://console-openshift-console.<CLUSTER_DOMAIN>`.
- **Git server:** `https://<GIT_SERVER>`: your copies of the lab repositories.

Conventions: anything in `<ANGLE_BRACKETS>` is a value to replace (done for you once your values are
saved). Code blocks have a copy button on the right.

[Credits](credits.md)
