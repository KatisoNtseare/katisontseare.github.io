# Campus Safety Companion Prototype Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a self-contained, clickable SIH3010 Campus Safety Companion prototype at `/campus-safety-prototype/` without changing the existing root site.

**Architecture:** A single static HTML document provides all prototype screens, CSS handles responsive/mobile presentation, and vanilla JavaScript manages screen navigation, validation, fictional request/report state, role demo screens, and failure-state simulation. No backend or external integration is used.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, GitHub Pages

**Spec:** `docs/superpowers/specs/2026-09-15-campus-safety-prototype-design.md`

## Global Constraints

- Host under `/campus-safety-prototype/` only.
- Do not modify existing root `index.html`, `style.css`, `script.js`, or assets.
- Show a visible prototype warning in assistance/report flows.
- Never imply that real emergency services are contacted.
- Use only fictional/simulated data and manual/fake location values.
- Keep the main assistance journey to category, location, and review/confirmation.
- Provide keyboard-visible focus states and large touch targets.

---

### Task 1: Build the interactive prototype shell

**Files:**
- Create: `campus-safety-prototype/index.html`

**Interfaces:**
- Produces: DOM screens identified by `data-screen` values used by the client-side navigation controller.

- [ ] Create the static app shell with header, phone frame, home screen, assistance flow, incident-report flow, status screen, safety contacts, officer demo, admin demo, dashboard, settings, and fallback screen.
- [ ] Add semantic buttons/forms and labels for all interactive controls.
- [ ] Add the visible non-official-system warning to assistance/report screens.
- [ ] Verify the HTML can load independently with relative references to `styles.css` and `app.js`.

### Task 2: Add responsive styling and accessibility states

**Files:**
- Create: `campus-safety-prototype/styles.css`

**Interfaces:**
- Consumes: HTML class names and `data-screen` state from Task 1.
- Produces: Responsive mobile-first visual layout, hidden/active screen behavior, focus styles, status badges, and accessible high-contrast controls.

- [ ] Style desktop phone-frame and mobile full-width layouts.
- [ ] Add clear visual hierarchy for urgent, report, info, success, and status actions.
- [ ] Add minimum 44px interactive targets and `:focus-visible` outlines.
- [ ] Add reduced-motion and large-text classes controlled by JavaScript.

### Task 3: Implement navigation, validation, fictional submissions, and role demos

**Files:**
- Create: `campus-safety-prototype/app.js`

**Interfaces:**
- Consumes: button `data-target` attributes and form element IDs/classes from Task 1.
- Produces: `showScreen(name)`, fictional reference generation, assistance/report state, validation messages, status history, and role-demo interactions.

- [ ] Implement `showScreen(name)` and navigation event binding.
- [ ] Validate assistance category and location before submission.
- [ ] Generate a fictional unique reference only after successful validation.
- [ ] Populate confirmation and status screens with timestamp, location, category, and `Submitted` status.
- [ ] Implement cancellation of active simulated assistance requests.
- [ ] Implement incident-report submission with optional evidence note and restricted visibility.
- [ ] Implement failure demo that shows `Not sent / Unavailable` and no reference.
- [ ] Implement officer status update and note/assignment controls using fictional local state.
- [ ] Implement large-text and reduced-motion settings toggles.

### Task 4: Verify deployment safety and public-page behavior

**Files:**
- Verify: `campus-safety-prototype/index.html`
- Verify: `campus-safety-prototype/styles.css`
- Verify: `campus-safety-prototype/app.js`

**Interfaces:**
- Consumes: completed static prototype.
- Produces: verified GitHub Pages path ready to merge to `main`.

- [ ] Fetch the three files from the feature branch and verify they exist.
- [ ] Confirm no root-site files were changed.
- [ ] Check that all referenced assets are relative and contained within the prototype folder.
- [ ] Merge the feature branch to `main` after verification.
- [ ] Open the final public URL and confirm it responds.

