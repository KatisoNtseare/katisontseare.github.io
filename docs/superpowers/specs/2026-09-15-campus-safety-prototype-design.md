# Campus Safety Companion Interactive Prototype Design

## Purpose
Build a public, clickable prototype for SIH3010 Team 1 that demonstrates the corrected Campus Safety Companion App requirements without acting as a real emergency system.

## Hosting
Publish as a self-contained static site under `/campus-safety-prototype/` in `KatisoNtseare/katisontseare.github.io` so the intended public URL is:

`https://katisontseare.github.io/campus-safety-prototype/`

The prototype must not modify or replace the existing root portfolio site.

## Primary user journey
The main student/campus-user journey is:

1. Open prototype home screen.
2. Choose Request Assistance, Report Incident, View Status, or Safety Contacts.
3. For Request Assistance: choose a category, provide a campus area/building or manual location, optionally add a short description, review the safety/privacy notice, then submit.
4. Successful submission shows a simulated reference number, timestamp, and initial status `Submitted`.
5. Status view shows the fictional request history and allows cancellation of an active simulated assistance request.

## Additional prototype journeys
- Incident / hazard report with category, description, location, optional evidence note, and restricted-visibility option.
- Public safety contacts and guidance available without login.
- Officer demo view showing an incoming queue, search/filter controls, case details, status updates, notes, assignment, and an internal escalation decision field.
- Admin demo view showing safety content/category management and a fictional summary dashboard.
- Settings/accessibility view with large-text and reduced-motion toggles.

## Safety and scope constraints
- Every assistance/report screen must state that this is a prototype and not an official NMU emergency system.
- No alert is sent to campus security, police, ambulance, fire, or any real responder.
- No real identity, incident, medical, or live-location data is collected.
- Location is selected from fictional campus-style options or entered manually; there is no continuous tracking.
- Success must never be shown before a simulated record/reference is created.
- A failure-state control must demonstrate `Not sent / Unavailable` and show fallback guidance.
- External emergency services are boundary stakeholders, not direct integrated actors.

## Requirement alignment
The prototype should visibly cover the corrected screen catalogue:

- P-01 Access / role demo
- P-02 Home
- P-03 Urgent assistance request
- P-04 Incident / hazard report
- P-05 Confirmation
- P-06 Status / details
- P-07 Unavailable / fallback
- P-08 Officer incoming queue
- P-09 Officer case update
- P-10 Safety information & contacts
- P-11 Admin content & categories
- P-12 Summary dashboard

## Interaction model
Use one static `index.html` with client-side JavaScript state and CSS. Screens behave like a small mobile app inside a responsive phone frame on desktop, while becoming full-width on small devices. No backend, external API, analytics, authentication service, or persistent database is required.

Prototype data may be stored only in browser memory/localStorage for the current browser as fictional demonstration data.

## Accessibility and usability
- Plain-language action labels.
- Large touch targets.
- Keyboard-focus styles.
- ARIA labels/landmarks where useful.
- Status meaning must not rely on color alone.
- Primary assistance journey should remain short: category, location, confirmation/review.
- Responsive layout for mobile and desktop.

## Visual direction
Use a calm university-safety visual language with a navy/blue base, white surfaces, red only for urgent actions, amber for incident reporting, and green for confirmed/safe states. Keep typography clean and high-contrast.

## Acceptance criteria
- Public URL resolves and loads without authentication.
- Home, assistance, report, contacts, status, officer, admin, dashboard, settings, and fallback screens are clickable.
- Assistance submission creates a unique fictional reference and shows `Submitted` only after validation.
- Missing category/location blocks assistance submission with visible validation.
- Incident report supports evidence note and restricted visibility.
- Failure demo shows `Not sent / Unavailable` and does not generate a reference.
- Prototype warning is visible in the relevant safety flows.
- Existing root site remains untouched.
