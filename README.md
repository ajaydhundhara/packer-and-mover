# ShiftFleet

A responsive static website built with React, Vite, and Lucide icons. Inspired by the service and enquiry structure of ShiftEro, with an original ShiftFleet visual design.

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

Deploy the generated `dist/` directory to a static host. The Sites manifest in `.openai/hosting.json` retains this project's private Site identity.

## Features

- Responsive navigation, service cards and service detail dialogs
- Home and business moving services, vehicle enquiry, coverage routes
- Sample photo gallery with lightbox
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

Service descriptions are proposed marketing copy; photographs are clearly labelled stock samples. No fictional customers, reviews, ratings, performance statistics, or pricing are included. Replace stock images with business photographs when available. Add a verified street address and business privacy policy if collecting enquiries through a backend in future.

## Sample image sources

Downloaded stock photographs served locally from `public/images/`:

- Packing: [Pexels photo 4246120](https://www.pexels.com/photo/4246120/)
- Home relocation: [Pexels photo 4246266](https://www.pexels.com/photo/4246266/)
- Truck: [Unsplash source image](https://images.unsplash.com/photo-1601584115197-04ecc0da31d7)
- Warehouse: [Unsplash source image](https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d)
- Office: [Unsplash source image](https://images.unsplash.com/photo-1497366811353-6870744d04b2)

Google Fonts loads DM Sans and Manrope. All images are local; the page has no image hotlink dependency.
