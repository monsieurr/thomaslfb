---
title: "Girafon"
emoji: "🦒"
publishDate: 2026-03-15
description: "Automatically analyze ESG/sustainability reports against ESRS (CSRD) requirements and surface what's missing with evidence."
tags: ["sustainability", "reporting", "eu", "omnibus", "esg", "esrs", "llm", "greenwashing", "csrd", "efrag", "ghg-protocol"]
repoUrl: "https://github.com/monsieurr/girafon"
demoUrl: "https://girafon.thomaslfb.eu/"
---

## Overview
Girafon analyzes ESG and sustainability reports against ESRS requirements and flags gaps with supporting evidence.

## Problem
Manual ESRS checks are slow and inconsistent, which increases compliance risk and review costs.

## Target Users
- ESG reporting teams
- Sustainability consultants
- Compliance and audit stakeholders

## Goals
- Speed up ESRS alignment checks
- Make gaps explicit and evidence-based
- Provide a repeatable review workflow

## Non-Goals
- Final legal sign-off
- Full report authoring
- Long-term document storage

## Solution
A report analysis flow that maps report content to ESRS requirements and highlights missing or weak coverage.

## My Role
Personal case study. I defined the evaluation logic, designed the analysis workflow, and built the demo end to end.

## Key Decisions & Trade-offs
- Treated ESRS as a structured checklist to make gaps explicit and actionable.
- Surfaced evidence alongside findings to build trust in the analysis.
- Focused on the core flow over full report authoring features.

## Key Features
- ESRS coverage mapping
- Gap list with evidence references
- Clear summary of what is missing

## Success Metrics
- Time saved per report review
- Reduction in missed requirements
- Adoption by reporting teams

## Risks & Constraints
- Inputs vary widely in structure and quality
- Models can misinterpret ambiguous language

## What I'd Do Next
- Add a coverage score and heatmap by ESRS section.
- Support multilingual reports and mixed-format PDFs.
- Provide an audit trail for review and sign-off workflows.

## Status / Deployment
Showcase demo. Demonstrates what is possible after self-deployment.

## Links
- [Live demo](https://girafon.thomaslfb.eu/)
- [GitHub repository](https://github.com/monsieurr/girafon)
