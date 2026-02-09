# Unity Busingye Portfolio

## Setup

1. Install dependencies:
   - `npm install`
2. Configure EmailJS in `.env` (see below).
3. Run the dev server:
   - `npm run dev`

## EmailJS configuration

Create an EmailJS account and set up a service + template, then add these to `.env`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Template variables used by the form:
- `from_name`
- `reply_to`
- `message`
