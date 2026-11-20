# Lab 2: MLOps with Jukebox

<span class="chip lab">Lab · 105 min</span>


You take a music-genre classifier ("Jukebox") from a notebook to production the MLOps way: a data
science project with its connections, experiments in a workbench, a training pipeline in **Kubeflow
Pipelines**, a small data pipeline, and the model registered and served.

Your project for this lab: **`<USER_NAME>-jukebox`**.

| Part | Pages | Mode |
|---|---|---|
| 1. When the music starts | [Data science project](1-when-the-music-starts/1-data-science-project.md), [Connections](1-when-the-music-starts/3-connections.md), [Inner loop](1-when-the-music-starts/4-inner-data-science-loop.md) | hands-on |
| 2. In the rhythm of data | [Training pipeline](2-in-the-rhythm-of-data/1-training-pipeline.md), [KFP](2-in-the-rhythm-of-data/1b-kfp.md) | hands-on |
| 3. The data tracks | [Data pipeline](5-the-data-tracks/1-data-pipeline.md) | hands-on |
| Demo: from studio to stage | [GitOps](3-from-studio-to-stage/1-gitops.md), [ApplicationSets](3-from-studio-to-stage/2-applicationsets.md), [Extend toolings](3-from-studio-to-stage/3-extend-toolings.md), [Model deployment](3-from-studio-to-stage/4-model-deployment.md) | instructor demo |

## 🦆 Conventions
When running through the exercise, we tried to call out where things need replacing. The key ones are anything inside an `<>`, and should be replaced. For example, if your team is called `biscuits` then in the instructions if you see `<USER_NAME>` this should be replaced with `biscuits` like so:
    <div class="highlight" style="background: #f7f7f7">
    <pre><code class="language-bash">
    name: &lt;USER_NAME&gt;
    # ^ this becomes
    name: biscuits
    </code></pre></div>

There are lots of code blocks for you to copy and paste. They have a little ✂️ icon on the right if you move your cursor on the code block. 
```bash
echo "like this one :)"
```
You should not copy and paste the blocks that don't have the copy ✂️ icon. That means you should validate your outputs or yamls against the given block.