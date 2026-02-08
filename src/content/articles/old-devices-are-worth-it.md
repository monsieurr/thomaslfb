---
title: "Old devices are worth keeping / repairing / re-using"
publishDate: 2026-02-08
description: "A data-driven case study on repairing a 2013 MacBook Air: carbon math, costs, and the 6 Rs of sustainability"
tags: ["Green IT", "Sustainability"]
isDraft: false
---

## Introduction

When we talk about sustainable choices, a simple framework helps: the **Rs**. The classic five are well-known, but many now use six: **Rethink / Refuse / Reduce / Reuse / Repair / Recycle**. It’s a decision tree, not a checklist: think before buying, extend what you already own, repair when possible, and recycle only as a last resort.

This article is a practical case study of one machine: my **MacBook Air (13", mid-2013)**. Bought years ago and lightly used, it is still open today for notes, email, web research, and light photo edits. Over the last decade, I replaced three components: the **charger** (45W, ~2017), the **battery** (~2022–2023), and the **SSD** (~2022–2023).

Below, I walk through why I did it, what I changed, how I estimated the environmental impact, and practical options if you’re not up for repairs.

I work and tinker in many things. While this laptop doesn’t handle heavy ML training or 4K video exports, it is perfect for lightweight projects, experiments, and travel. Repairing aligns with both my personal and professional values: maximizing usability while minimizing environmental impact.

---

## Practical side — what I changed

### Replacements and timeline
*   **Charger (MagSafe 2, 45W):** Replaced ~2017 when the original cabling frayed and became unreliable.
*   **Battery (54Wh):** Replaced between 2017 and 2023 when capacity dropped below practical mobility limits. *(Note: The laptop model is A1466, requiring an A1496 type battery)*.
*   **SSD (256 GB):** Replaced ~2022–2023 to improve speed and storage capacity.

### Motivation
Why these parts? They directly affect **usability**. A dead battery kills mobility; a failing charger is a fire/reliability risk; a slow SSD makes the machine feel obsolete. Replacing them is low-cost, technically straightforward, and restores 90% of the experience.

### Costs and origin (order of magnitude)
*   **Battery kit:** €80–€110
*   **SSD 256 GB:** €35–€70
*   **Charger:** €30–€60
*   **Total Repair Cost:** **€155–€220**

The parts were sourced online, coming from chineses manufacturers. 
*Note on logistics:* If possible choosing local resellers or consolidated shipping is better. Individual air freight from Asia can greatly increase the carbon footprint of small parts.

---

## Quick carbon estimate — repair vs. new

Beware, this is a pragmatic, conservative estimate, not a full academic study.

### Reference points
*   **Average Laptop Carbon Footprint:** ≈246 kg CO₂e (manufacture + supply chain).
*   **Battery Production:** ≈140 kg CO₂e per kWh (Li-ion production standard).
*   **SSD Production:** ≈160 kg CO₂e per TB (Embodied carbon in NAND flash).
*   **Charger:** ≈5 kg CO₂e (Conservative estimate for adapter + copper).
*   **Transport:** ≈0.2 kg CO₂e (Assumed consolidated maritime/road; air freight would be significantly higher).

### Step-by-step arithmetic

1.  **Battery:** 0.054 kWh × 140 = 7.56 → **7.6 kg CO₂e**
2.  **SSD:** 0.256 TB × 160 = 40.96 → **41.0 kg CO₂e**
3.  **Charger:** **5.0 kg CO₂e**
4.  **Shipping:** **0.2 kg CO₂e**

**Total Repair Footprint: ≈53.8 kg CO₂e**

This is roughly **one-fifth** of a new laptop’s footprint. By repairing, I avoided the manufacturing impact of a new device, saving roughly **190 kg CO₂e** compared to the industry average.

### Comparison table — repair vs. new

| Item / Action | Estimated CO₂ (kg CO₂e) | Typical Cost (EUR) | Notes |
| :--- | :--- | :--- | :--- |
| **Battery (54 Wh)** | 7.6 | €80–€110 | Li-ion production footprint |
| **SSD (256 GB)** | 41.0 | €35–€70 | Flash storage embodied carbon |
| **Charger** | 5.0 | €30–€60 | Conservative estimate |
| **Shipping** | 0.2 | Included | Consolidated/Maritime assumed |
| **Total — Repair** | **≈53.8** | **€155–€220** | **Life extended by 3+ years** |
| **New Laptop** | **≈246** | **€800+** | Manufacture + Supply chain |

> **Takeaway:** For a modest financial cost, replacing key parts extends life and avoids the large emissions spike of manufacturing a new device.

---

## Things I asked myself (and you might too)

### “Ok, but I need more power!”
Heavy ML, video editing, or large photo exports might justify a new device. However, for lightweight tasks—notes, email, web, small photo edits, data exploration—a refreshed older machine works perfectly. **Reuse (donation/sale)** can extend its life for someone else if it no longer fits your primary workflow.

### “I don’t want to repair my old computer”
If you prefer not to repair: donate, sell, or pass it on. **Recycle only as a last resort.** Manufacturing dominates lifecycle emissions (75-85%), so keeping the device in circulation is the highest-impact choice.

### “Why not just recycle and buy new?”
Recycling is energy-intensive and rarely recovers 100% of materials. Extending the lifespan of the device dilutes the initial manufacturing "carbon cost" over more years.

---

## Practical checklist if you want to replicate

1.  **Diagnose first:** Check battery cycle count and disk health using built-in system reports.
2.  **Document timeline:** Keep track of when parts fail to anticipate future maintenance.
3.  **Buy reliable parts:** Prefer reputable resellers to ensure warranty and reduce transport distance.
4.  **Shipping matters:** Avoid "Next Day Air" or individual shipments from overseas vendors if possible.
5.  **Follow a guide:** Label screws and take photos. Online repair tutorials are invaluable.
6.  **Recycle responsibly:** If a part is truly dead, use approved **WEEE / DEEE** collection points (like [Ecosystem](https://www.ecosystem.eco/) in France).

---

## Why this matters to me

My work mixes sustainability, data, AI experiments, and photography. This biases me toward measured, data-informed decisions: seeking the smallest carbon footprint for maximum usefulness.

This laptop remains a low-distraction device for lightweight projects, testing Python scripts, quick photo edits, and travel. Small upgrades—charger, battery, SSD—restored usability enough to keep it in daily rotation for over a decade.

---

## Final notes and sources

*Note: The numbers used here are conservative estimates suitable for a quick, informed comparison rather than a formal academic lifecycle analysis.*

**References & Data Sources:**

*   **The 6 Rs Framework:** [Greenly.earth: The 5 (or 6) Rs of Waste Management](https://greenly.earth/en-gb/blog/company-guide/the-six-rs-of-sustainability-what-are-they)
*   **Laptop Carbon Footprint:** [ADEME Base Empreinte](https://base-empreinte.ademe.fr/donnees/jeu-donnees) (French Agency for Ecological Transition) & [Boavizta Data](https://www.boavizta.org/en) (Open Data for Green IT).
*   **Recycling (France/EU):** [Ecosystem.eco](https://www.ecosystem.eco/) (DEEE/WEEE guidance).