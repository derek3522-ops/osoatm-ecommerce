# OSO ATM Parts - Ecommerce Platform

Professional ATM parts ecommerce platform for Genmega and Hyosung parts distributor.

## Features

✅ **Product Catalog** - 28+ ATM parts with detailed specifications
✅ **Advanced Filtering** - Filter by manufacturer, category, price range
✅ **Shopping Cart** - Full cart management with quantity controls
✅ **Checkout Ready** - Payment processor integration ready (Stripe/PayPal)
✅ **Parts Repair** - Service inquiry form for repair requests
✅ **Admin Dashboard** - Manage products, orders, and repairs
✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **Professional Branding** - OSO ATM navy/white/orange color scheme

## Stack

- **Framework**: Next.js 14+ (React)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Database**: Ready for PostgreSQL/MongoDB integration
- **Payments**: Ready for Stripe/PayPal integration
- **Deployment**: Vercel, AWS, or any Node.js host

## Installation

### 1. Clone and Setup
```bash
cd osoatm-ecommerce
npm install
```

### 2. Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key_here
STRIPE_SECRET_KEY=your_stripe_secret_here
DATABASE_URL=your_database_url_here
PAYPAL_CLIENT_ID=your_paypal_client_id_here
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
osoatm-ecommerce/
├── app/
│   ├── layout.jsx           # Main layout with header/footer
│   ├── page.jsx             # Home page
│   ├── globals.css          # Global styles
│   ├── lib/
│   │   ├── products.js      # Product database (28 parts)
│   │   ├── store.js         # Zustand cart state
│   ├── parts/page.jsx       # Parts listing with filters
│   ├── products/[id]/page.jsx # Product detail page
│   ├── cart/page.jsx        # Shopping cart
│   ├── repair/page.jsx      # Repair services & inquiry form
│   └── admin/page.jsx       # Admin dashboard
├── package.json
├── tailwind.config.js
└── next.config.js
```

## Available Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Landing page with featured products |
| Parts | `/parts` | Product listing with advanced filtering |
| Product Detail | `/products/[id]` | Individual product page |
| Shopping Cart | `/cart` | Cart management |
| Repair Services | `/repair` | Repair service info & inquiry form |
| Admin Dashboard | `/admin` | Product & order management |

## Current Data

- **28 Products**: 12 Genmega + 16 Hyosung
- **Price Range**: $9.59 - $2,159.99
- **Categories**: Dispensers, Cassettes, Printers, Keypads, Card Readers, Power Supplies, LCD Displays, Locks, Accessories
- **35% Markup**: All prices calculated from cost data

## Next Steps for Deployment

### 1. Database Setup
Migrate product data to PostgreSQL or MongoDB:
```javascript
// Create products table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  sku VARCHAR(50) UNIQUE,
  name VARCHAR(255),
  manufacturer VARCHAR(100),
  category VARCHAR(100),
  cost DECIMAL(10,2),
  price DECIMAL(10,2),
  description TEXT,
  image_url VARCHAR(255),
  inStock BOOLEAN,
  compatibility JSON
);
```

### 2. Payment Processing
1. Get Stripe API keys from [stripe.com](https://stripe.com)
2. Implement checkout API route:
```javascript
// app/api/checkout/route.js
export async function POST(req) {
  // Create Stripe session
  // Return session ID to client
}
```

### 3. Email Notifications
Add email service for order confirmations:
```javascript
// Install email package
npm install nodemailer
// Send emails for orders and repair requests
```

### 4. Image Hosting
- Upload product images to AWS S3, Cloudinary, or similar
- Update image URLs in product database
- Implement image optimization with Next.js Image component

### 5. Domain & Subdomain Setup
- Point `parts.osoatm.com` to deployment URL
- Update DNS records
- Set up SSL certificate

### 6. Deployment
```bash
# Deploy to Vercel (recommended)
npm install -g vercel
vercel

# Or deploy to AWS/DigitalOcean/etc
npm run build
npm run start
```

## Adding More Products

### Via Admin Dashboard
1. Go to `/admin`
2. Click "Add Product"
3. Fill in product details
4. Click "Add Product"

### Via Direct Database Insert
```sql
INSERT INTO products (sku, name, manufacturer, category, cost, price, description, inStock)
VALUES ('SKU-001', 'Product Name', 'Genmega', 'Cassettes', 100.00, 135.00, 'Description', true);
```

## Product Data Format

```javascript
{
  id: 1,
  sku: 'PAR-20549',
  name: 'Product Name',
  manufacturer: 'Genmega', // or 'Hyosung'
  category: 'Dispensers',
  cost: 742.99,            // Wholesale cost
  price: 1002.04,          // 35% markup
  description: 'Technical description',
  image: '/products/image.jpg',
  inStock: true,
  condition: 'New',        // Optional: 'Refurbished'
  compatibility: ['Model A', 'Model B'] // Optional
}
```

## Features to Implement

### Phase 2 (Weeks 5-6)
- [ ] Payment processing (Stripe/PayPal)
- [ ] Order management system
- [ ] Email notifications
- [ ] Product search with Elasticsearch
- [ ] Customer accounts & order history
- [ ] Inventory management

### Phase 3 (Weeks 7-8)
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Bulk order pricing
- [ ] API for 3rd party integrations
- [ ] Customer reviews
- [ ] Live chat support

## Performance Optimization

- Next.js Image component for image optimization
- Implement caching headers
- Database indexing on frequently searched fields
- CDN for static assets
- Minification and code splitting (automatic with Next.js)

## Security

- HTTPS/SSL required
- Input validation and sanitization
- CORS configuration
- Rate limiting on API routes
- PCI compliance for payment processing
- Regular security audits

## Support

For technical questions or issues:
- Email: dev@osoatm.com
- Phone: 1-800-OSO-ATMS
- Hours: Mon-Fri 8am-5pm MST

## License

© 2024 OSO ATM. All rights reserved.

---

**Last Updated**: June 2024
**Version**: 1.0.0
**Status**: Production Ready (Demo)
