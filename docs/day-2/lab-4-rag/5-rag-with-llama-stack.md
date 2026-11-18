# RAG with Llama Stack

So far your notebooks talked to the model and to Milvus directly, each with its own client and endpoint.
That works, but every application would have to know which vector database it uses, and how to
chunk, embed and search.

**Llama Stack** (in OpenShift AI also called OGX, the Open GenAI Stack) sits between your application and
the RAG infrastructure. It gives one API for models, files and vector stores, so swapping the vector
database becomes a configuration change in Llama Stack, not a code change in your application. It
supports many vector store providers (Milvus, pgvector, Qdrant, Chroma, Weaviate, …) and adds RAG features
that are hard to build yourself:

- **Hybrid search**: vector similarity and keyword search in one query
- **Contextual chunking**: chunks enriched with their surrounding context before they are stored
- **Multiple embedding models**: switch models without changing application code

(A hint: the Playground you used in step 1 runs on Llama Stack as well.)

## Your Llama Stack

It is already running in your project and connected to the workshop's Llama 3.2 model and to your
Milvus. Check it in the OpenShift console: **Helm → Releases** shows `llama-stack-operator-instance`,
and **Workloads → Pods** a `llama-stack-…` pod. Inside the project it answers at
`http://llama-stack-service:8321`.

## Send documents to Milvus through Llama Stack

Go to your workbench and run through `experiments/5-rag/4-using-ogx.ipynb`. It

1. creates a **vector store** (`my_citations_db`) in Llama Stack, backed by your Milvus,
2. uploads a document about the university's botany research, which Llama Stack chunks and embeds,
3. asks questions without and with the retrieved chunks, so you can compare the answers.

Open Attu again afterwards: the vector store's collection and its vectors are now in your Milvus.

**Keep this vector store.** In Lab 5 your agent gets a document-search tool, and that tool searches the
first vector store in your Llama Stack: this one.

**Checkpoint:** the notebook's grounded answers quote the botany document, and Attu shows its vectors.

Back to the [overview](index.md). Next lab: Lab 5, Agents and MCP.
