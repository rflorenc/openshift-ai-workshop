# Lab 4: RAG with Milvus, Docling and Llama Stack (60 min)

<span class="chip lab">Lab · 60 min</span>


You ground a language model's answers in documents (**RAG**, retrieval-augmented generation): first in the
OpenShift AI Playground, then step by step in code. You turn text into **embeddings**, store and search them
in the vector database **Milvus**, convert a complex PDF with **Docling**, and finally let **Llama Stack** do
chunking, embedding, storing and retrieving behind one API.

Values from your instructor: `<USER_NAME>`, `<PASSWORD>`, `<CLUSTER_DOMAIN>`.
Your project for this lab (and for Lab 5): **`<USER_NAME>-canopy`**.

| Step | Page | Time |
|---|---|---|
| 0 | [Before you start: workbench and notebooks](0-before-you-start.md) | 10 min |
| 1 | [Try RAG in the Playground](1-intro-to-rag.md) | 10 min |
| 2 | [Understanding embeddings](2-rag-basics.md) | 10 min |
| 3 | [Vector databases: Milvus](3-vector-databases.md) | 10 min |
| 4 | [Document intelligence with Docling](4-docling.md) | 10 min |
| 5 | [RAG with Llama Stack](5-rag-with-llama-stack.md) | 10 min |

**Checkpoint:** a vector store in your Llama Stack that answers questions about the botany document.
Lab 5's agent uses it as its document-search tool.
