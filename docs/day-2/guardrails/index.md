# Guardrails: break the bot (45 min)

<span class="chip activity">Activity · 45 min</span>


A system prompt is only a suggestion to the model. You see that first-hand in the Playground, then put an
enforceable policy layer in front of the model: **NeMo Guardrails** with regex rules, classifiers for
hate speech and prompt injection, a language check, personal-data detection and an LLM as judge. Then
you try to get past it, by hand and with an automated red-teaming tool (**Spikee**).

Values from your instructor: `<USER_NAME>`, your password, `<CLUSTER_DOMAIN>`.
Your project: **`<USER_NAME>-canopy`** (the same as Labs 4 and 5).

| Step | Page | Time |
|---|---|---|
| 0 | [Before you start](0-before-you-start.md) | 2 min |
| 1 | [Prompt-level guardrails: try to break a system prompt](1-prompt-guardrails.md) | 5 min |
| 2 | [NeMo Guardrails: deploy it, watch the rails fire](2-nemo-guardrails.md) | 15 min |
| 3 | [Break the bot: the challenge](3-break-the-bot.md) | 15 min |
| 4 | [Automate the attacks with Spikee](4-automate-checks.md) | stretch goal |

**Checkpoint:** your NeMo instance blocks the notebook's test prompts, and you know at least one way past
one of its rails, and which rail would have to change to catch it.
