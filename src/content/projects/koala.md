---
title: "Koala"
emoji: "🐨"
publishDate: 2026-03-15
description: "Pre-check EU AI Act compliance, catalog AI systems, and get regulatory answers."
tags: ["ai", "tool", "eu", "regulation", "compliancy", "ai-systems", "local-llm", "ai-act"]
repoUrl: "https://github.com/monsieurr/koala"
demoUrl: "https://koala.thomaslfb.eu/"
---

## Overview
Koala provides a pre-check for EU AI Act compliance, helps catalog AI systems, and answers regulatory questions.

## Problem
The AI Act is complex and fast-moving, making early compliance checks difficult for product teams.

## Target Users
- Product managers and founders
- Compliance and legal stakeholders
- ML and engineering teams

## Goals
- Provide a quick compliance pre-check
- Reduce uncertainty around regulatory requirements
- Make policy questions easier to answer

## Non-Goals
- Automated policy drafting
- Continuous monitoring of model changes
- Organization-wide inventory admin

## Solution
A guided assessment and Q&A flow tailored to AI Act requirements.

## My Role
Personal case study. I translated the AI Act into a product flow by mapping obligations to a step-by-step intake, defined the assessment logic, and built the demo.

## Key Decisions & Trade-offs
- Led with a guided questionnaire to make inputs consistent; this meant giving up free-form document uploads and deeper nuance.
- Prioritized actionable output over exhaustive legal detail.
- Kept the flow lightweight so it can be adapted to different AI systems.

## Key Features
- Compliance questionnaire
- Risk classification guidance
- Regulatory Q&A for AI Act topics

## AI Use
- LLM used for regulatory Q&A and to interpret questionnaire inputs.
- Outputs are advisory and do not replace legal review.

## Risks & Constraints
- Legal interpretation still requires expert review
- Regulatory updates may require prompt refreshes
- Constraint: The AI Act is evolving, so I framed this as a pre-check rather than a compliance guarantee.

## What I'd Do Next
- If I restarted, I would design the AI system inventory schema first and build guidance around it.
- Add an exportable compliance memo per system.
- Provide tailored checklists by AI system type.
- Maintain a regulation update log with change highlights.

## Status / Deployment
Showcase demo. Demonstrates what is possible after self-deployment.

## References
- [EU AI Act (Regulation (EU) 2024/1689), Official Journal text](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)
- [OJ L 2024/1689, EUR-Lex ELI](https://eur-lex.europa.eu)
- [Digital Omnibus on AI, proposal announcement](https://digital-strategy.ec.europa.eu)
- [COM(2025) 836, CELEX:52025PC0836 proposal text](https://eur-lex.europa.eu)
- [Digital Omnibus Regulation Proposal](https://digital-strategy.ec.europa.eu)

## Links
- [Live demo](https://koala.thomaslfb.eu/)
- [GitHub repository](https://github.com/monsieurr/koala)
