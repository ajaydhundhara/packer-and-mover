# Shiftiigo

A responsive static website built with React, Vite, and Lucide icons. Inspired by the service and enquiry structure of ShiftEro, with an original Shiftiigo visual design.

The Shiftiigo header, footer, and favicon use `public/images/brand/shiftiigo-mascot.png`, adapted from the owner's supplied logo with the built-in imagegen tool. The wordmark remains live text for legibility. The website's existing blue, navy, and cream theme is preserved.

Logo edit prompt: preserve the supplied mover mascot, face, pose, cap, box, S insignia, and swept circular emblem; remove the surrounding wordmark and slogans; replace orange and green brand accents with royal blue (#164af3), navy (#101e36), and ivory (#f6f5f0); retain natural skin and cardboard colours; export a compact square emblem on a genuinely transparent background.

## Run locally

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The project is local-only. Hosting and deployment are managed by you; no ChatGPT Sites configuration or source synchronization is needed.

When you are ready to host it, upload the contents of the generated `dist/` directory to your preferred static host. The production website needs no Node.js server. `npm run preview` is only for checking the build locally.

## Features

- Responsive navigation, service cards and service detail dialogs
- Homepage collage of four original project photos, each opening in the lightbox
- Home and business moving services, vehicle enquiry, coverage routes
- Original project photo gallery with lightbox, expandable photo collection, and a video player
- Accessible native dialogs and expandable FAQs
- Moving enquiry form with required-field validation and review
- WhatsApp handoff, downloadable text brief, clipboard copy, phone and email links
- No backend, tracking, enquiry database, or automatic form submissions

## Business configuration

Edit `src/config.js` to change phone, email, base city, and destination examples. Current user-provided details:

- Phone / WhatsApp: +91 82392 03672
- Email: ajay.11704009@gmail.com
- Pickup: Ahmedabad and nearby areas
- Delivery: across India

The form keeps data in React memory until reload. Clicking WhatsApp opens a prefilled message for the visitor to send. Files and clipboard actions happen only when explicitly selected. No enquiries are silently collected. Copy falls back to downloading the brief when clipboard access is unavailable.

Service descriptions are proposed marketing copy. The hero, home relocation, business logistics, packing section, and eleven-photo gallery now use your supplied moving photographs. The office service image is still labelled as an illustrative stock photo. No fictional customers, reviews, ratings, performance statistics, or pricing are included. Replace the remaining office stock image when an office relocation photo is available. Add a verified street address and business privacy policy if collecting enquiries through a backend in future.

## Moving photographs

Eleven original photos were selected from the supplied WhatsApp files and copied unchanged into `public/images/projects/`. Display crops use CSS `object-fit` and per-photo `object-position`; opening a gallery photo shows the full original. The original files in Downloads were not altered. Source filenames and archive names are recorded in `photo-sources.json`.

The photo with a readable residents’ directory was excluded. Other close duplicates, poorly framed images, and photos with handwritten shipment details were not selected. The video inside the original archive is not used. The separately supplied 40-second vehicle-loading video is included in `public/videos/moving-project.mp4`, with native playback controls, no autoplay, and `preload="none"`. Vehicle branding remains as photographed; captions do not claim fleet ownership. The first six gallery photos are featured, with a button to view all eleven.

### Photos to capture next

| Priority | Subject | Website use | Suggested shots |
| --- | --- | --- | --- |
| Highest | Team actively packing or carrying boxes beside your vehicle | Main hero | 2 landscape and 1 portrait |
| Medium | A clean, well-lit exterior of your vehicle with Shiftiigo branding, if available | Logistics card and gallery; loaded-interior photos are now included | 2 landscape exterior views |
| High | Packers wrapping furniture and protecting a fragile item | Packing section | 3 close-ups and 1 wider scene |
| High | Office desks, workstations, or computers being packed or loaded | Replace office stock photo | 2 landscape |
| Medium | Before and after packing of the same room or furniture | Project gallery | 2 matched pairs |
| If offered | Your actual storage facility with racks and organised goods | Storage proof | 2 landscape |

Take sharp daylight photos, preferably at least 2000 pixels on the long edge. Keep subjects centred with space around them for desktop and mobile crops. Send original files rather than compressed WhatsApp images. Avoid readable customer names, addresses, and building directories in the frame.

## Remaining stock image sources

The office stock placeholder is served locally from `public/images/office.jpg`. Earlier stock downloads remain in the project for reference but are not displayed:

- Packing: [Pexels photo 4246120](https://www.pexels.com/photo/4246120/)
- Home relocation: [Pexels photo 4246266](https://www.pexels.com/photo/4246266/)
- Truck: [Unsplash source image](https://images.unsplash.com/photo-1601584115197-04ecc0da31d7)
- Warehouse: [Unsplash source image](https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d)
- Office: [Unsplash source image](https://images.unsplash.com/photo-1497366811353-6870744d04b2)

Google Fonts loads DM Sans and Manrope. All images are local; the page has no image hotlink dependency.

## Basic verification — 7 October 2026

- Production build, JavaScript/JSX and CSS parsing, local asset references, and `git diff --check` passed.
- `npm audit` reported zero known vulnerabilities in the installed dependencies.
- Production preview checks passed for service dialogs, route prefill, contact links, privacy dialog, Escape dismissal, FAQs, gallery expansion and lightbox, and video playback.
- Required fields, whitespace-only city rejection, city trimming, invalid phone rejection, review/edit, copy and edited-copy reset, and the configured WhatsApp link passed. No WhatsApp message was sent.
- Mobile navigation and page widths passed at 320, 390, and 768 pixels without horizontal overflow.
- Download text, filename, link activation, and object URL cleanup passed a source-level check. Browser automation did not confirm a saved download file; manually verify **Download brief** in your regular browser before final sign-off.

Small fixes made during this check: corrected coverage-card text contrast, reset the copy status after enquiry edits, validated and trimmed city fields, attached the download link inside the active dialog, and removed unused imports.
