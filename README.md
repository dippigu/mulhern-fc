# MulhernFC

Marketing website for Michael Mulhern Football Consultancy Ltd — elite football assessment and development consultancy.

Built with [Astro](https://astro.build). Deployed on [Netlify](https://www.netlify.com).

## Development

Requires Node.js 22+ and pnpm.

```text
pnpm install    # install dependencies
pnpm dev        # start dev server at localhost:4321
pnpm build      # build for production to ./dist/
pnpm preview    # preview production build locally
```

## Deployment

The site is hosted on Netlify at [mulhern-fc.netlify.app](https://mulhern-fc.netlify.app).

- **Auto-deploy** from `main` branch via GitHub integration
- Build command and publish directory are configured in `netlify.toml`

## Domains & DNS

Both domains are managed via **Netlify DNS**.

| Domain | Role |
| --- | --- |
| `mulhernfc.com` | Primary |
| `mulhernfc.co.uk` | Alias (redirects to primary) |

## Email

Email for `@mulhernfc.com` is configured via [Purelymail](https://purelymail.com). 
DNS records (MX, SPF, DKIM) are set in Netlify DNS to point to Purelymail.

## Forms

The contact form uses **Netlify Forms** (`data-netlify="true"`). Submissions are stored in the Netlify dashboard and an email notification is sent to `michael@mulhernfc.com`.

Spam protection is handled via a honeypot field (`netlify-honeypot`).

Configuration: **Netlify admin > Site configuration > Forms > Form notifications**.

## Payments (Stripe)

Payments are not yet live. The plan:

- **Product:** Online Football Call — £49.99 (1 hour)
- **Method:** Stripe Payment Link — the "Book Now" button on the bookings page will redirect to a Stripe-hosted checkout page
- **Setup required:**
  1. Create a Stripe account
  2. Add the product (Online Football Call, £49.99)
  3. Generate a Payment Link for the product
  4. Replace the placeholder `href="#"` in `src/pages/bookings.astro` with the Payment Link URL
