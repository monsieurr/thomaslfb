---
title: "Girafon"
emoji: "🦒"
publishDate: 2026-03-15
description: "Automatically analyze ESG/sustainability reports against ESRS (CSRD) requirements and surface what's missing with evidence."
tags: ["sustainability", "reporting", "eu", "omnibus", "esg", "esrs", "llm", "greenwashing", "csrd", "efrag", "ghg-protocol"]
repoUrl: "https://github.com/monsieurr/girafon"
demoUrl: "https://girafon.thomaslfb.eu/"
---

![Girafon main page](/images/case-studies/girafon/screenshot_overview_girafon.png)


## Overview
ESG teams face long, uneven reports and must assess ESRS coverage without a consistent structure.

## Problem
Manual ESRS checks are slow and inconsistent, which increases compliance risk and review costs.

## Target Users
- ESG reporting teams
- Sustainability consultants
- Compliance and audit stakeholders

## Goals
- Handle heterogeneous PDFs without manual clean-up
- Surface evidence with each gap to earn trust in LLM output
- Keep reviews consistent across reports

## Non-Goals
- Final legal sign-off
- Full report authoring
- Long-term document storage

## Solution
A report analysis flow that extracts PDF content, maps it to 12 ESRS requirements, and highlights missing or weak coverage with evidence.

## My Role
Personal case study. I defined the evaluation logic, designed the analysis workflow, and built the demo end to end, including a hard choice to require quoted evidence for each finding, which reduced recall but improved trust.

## Key Decisions & Trade-offs
- Treated ESRS as a structured checklist to make gaps explicit and actionable.
- Surfaced evidence alongside findings to build trust in the analysis.
- Focused on the core flow over full report authoring features.

## Key Features
- ESRS coverage mapping
- Gap list with evidence references
- Clear summary of what is missing

## AI Use
- LLM used to extract and map report text to ESRS requirements.
- Findings include quoted evidence and are reviewed as advisory outputs.

## Risks & Constraints
- Inputs vary widely in structure and quality
- Models can misinterpret ambiguous language
- Constraint: Most reports are heterogeneous PDFs, so I prioritized extraction reliability over broad coverage.

## What I'd Do Next
- If I restarted, I would focus on a smaller ESRS subset to harden evidence mapping before scaling.
- Add a coverage score and heatmap by ESRS section.
- Support multilingual reports and mixed-format PDFs.
- Provide an audit trail for review and sign-off workflows.

## Status / Deployment
Showcase demo. Demonstrates what is possible after self-deployment.

## References
- [Official Journal text (OJ L 2023/2772)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202302772)
- [EUR-Lex](https://eur-lex.europa.eu)
- [GHG Protocol Corporate Standard](https://ghgprotocol.org/corporate-standard)
- [EFRAG ESRS mandatory standards](https://www.efrag.org/en/projects/esrs-mandatory-standards)

## Links
- [Live demo](https://girafon.thomaslfb.eu/)
- [GitHub repository](https://github.com/monsieurr/girafon)
