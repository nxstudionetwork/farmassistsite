# Journey page enhancement

## Goal
Refine only the existing Journey page into a clear, interactive story of Farm Assist’s evolution while preserving the current agricultural design and avoiding unverified claims.

## What will change
- Replace the static development-only sequence with a central, accessible vertical timeline driven by the existing content configuration.
- Use verified stage labels rather than invented years: completed foundations, current development, and explicitly planned farmer, customer, field, and ecosystem stages.
- Make each milestone keyboard-accessible, expandable, visibly active, correctly ordered, and safe beneath the shared header when navigated.
- Tighten the opening section with the supplied message and a working “Explore Our Timeline” action.
- Add concise sections for four areas of growth, today’s verified status, and clearly labelled future direction.
- End with working links to the Platform and Demo pages; remove repetitive sections from the current Journey page.

## Technical details
- Keep all Journey milestones in `portal-content.ts`, including label, category, status, summary, detail, and optional image.
- Add one Journey-specific interactive component and scoped styles, reusing current tokens and shared controls.
- Keep unknown dates explicitly pending instead of presenting them as historical facts.
- Verify milestone ordering, expand/collapse behavior, keyboard interaction, links, console state, image loading, and layouts at desktop, tablet, and mobile widths.
