# F3Style.pk — Premium Branded Fashion & Jewelry Store

Welcome to **F3Style.pk**, a modern, fast, and responsive e-commerce web application for premium clothing and statement jewelry. This project is built using a clean vanilla frontend stack (HTML, CSS, JS) designed to deliver a smooth and aesthetic shopping experience.

---

## 🚀 Features

- **Dynamic Product System:** Products are dynamically generated and populated from image files.
- **Customizable Product Details:** Override default settings to specify exact names, descriptions, prices, discounts, badges, ratings, and reviews for any specific item.
- **Interactive Shopping Bag (Cart Drawer & Page):** Add items, change quantities, and remove products dynamically. Cart data is automatically persisted across sessions using the browser's `localStorage`.
- **Product Catalog (Filtering & Sorting):** Filter products by category, and sort them dynamically by *Price (Low to High)*, *Price (High to Low)*, *Top Rated*, and *Newest First*.
- **Product Detail Page:** Deep dive into each product with active size selectors, custom quantity controls, description tabs, discount badges, and a **Related Products** suggestion list.
- **Local Payment & WhatsApp Checkout:** Direct integration for localized payments including **JazzCash**, **Easypaisa**, and **Raast ID**. Complete checkout instructions ask users to pay in advance for free shipping and submit order confirmations directly to WhatsApp (+92 304 7844965).
- **Responsive Layout & Micro-animations:** Fully responsive design (mobile, tablet, desktop) styled with beautiful dark accents, glassmorphic navbar components, and smooth fade-up scroll animations using the `IntersectionObserver` API.

---

## 🛠️ Technology Stack

- **Markup:** HTML5 (Semantic structures, SEO-optimized title & meta tags)
- **Styling:** CSS3 (Custom properties, grid & flex layouts, custom animations, custom media queries)
- **Scripting:** Vanilla JavaScript (ES6+, DOM Manipulation, LocalStorage)
- **Icons:** FontAwesome v6.5.1 CSS library (via CDN)

---

## 📂 Directory Structure

```text
f3style.pk/
├── images/
│   ├── boys/               # Images for boys shirts (named: 1.png, 2.png, etc.)
│   ├── girls/              # Images for girls tops (named: 1.png, 2.png, etc.)
│   └── jewelry/            # Images for jewelry items (named: 1.png, 2.png, etc.)
│   ├── jazzcash-logo.png   # Payment icon
│   ├── easypaisa-logo.png  # Payment icon
│   └── raast-logo.png      # Payment icon
├── index.html              # Landing / Homepage with testimonials & featured products
├── products.html           # Shop listing page with active filters & sorting options
├── product-detail.html     # Dynamic details page for single products
├── cart.html               # Dedicated shopping cart page with payment info & checkout instructions
├── contact.html            # Contact us page with mailto email form & interactive Google Map
├── app.js                  # Core database, dynamic product generator, and cart logic
├── index.css               # Main stylesheet containing color system, typography, and styles
└── README.md               # Project documentation (this file)
```

---

## ⚙️ How to Add or Customize Products

The project utilizes a dynamic generation system in `app.js`. You do not need to edit HTML pages to add new products.

### Step 1: Add the Product Image
Place the image of the product in the appropriate subfolder inside the `images/` directory:
- For Boys Shirts: `images/boys/`
- For Girls Shirts: `images/girls/`
- For Jewelry: `images/jewelry/`

Make sure the file is named sequentially as a `.png` (e.g., `4.png` if there are already 3 images).

### Step 2: Update the Image Count in `app.js`
Open `app.js` and locate the image counter constants at the top of the file:
```javascript
const BOYS_COUNT = 3;    // Increase this if you added an image to images/boys/
const GIRLS_COUNT = 3;   // Increase this if you added an image to images/girls/
const JEWELRY_COUNT = 3; // Increase this if you added an image to images/jewelry/
```
Update the number to match the new total number of images in that category.

### Step 3: (Optional) Override Custom Details
By default, the script will assign generic names (e.g. *Boys Shirt #4*) and prices. To set a custom name, price, original price (for sales), description, or ratings, add an entry to the `CUSTOM` object in `app.js`:

```javascript
const CUSTOM = {
    // Key format is "[category_short_name]-[image_number]"
    "boys-4": {
        name: "Your Custom Product Name", 
        price: 2499,                     // Sale Price
        originalPrice: 3200,             // Original Price (set to null if no discount)
        badge: "sale",                   // Badge text: "sale", "new", or null
        rating: 4.8,                     // Rating stars (1 to 5)
        reviews: 140,                    // Total review count
        description: "Write a high-quality product description here."
    }
};
```

---

## 🖼️ How to Update Existing Images

If you want to replace or update the existing images on the website (banners, product photos, or payment logos), follow these simple instructions:

### 1. Changing the Hero Banner
- Go to the `images/` directory.
- Replace the file `hero-banner.png` with your new banner image.
- Ensure the filename is exactly **`hero-banner.png`** (all lowercase) and in **PNG** format.

### 2. Changing Category Cover Images
These are the cover photos displayed for the Boys, Girls, and Jewelry collection cards on the homepage:
- **Boys Category Card:** Replace `images/boys-shirt-1.png`
- **Girls Category Card:** Replace `images/girls-shirt-1.png`
- **Jewelry Category Card:** Replace `images/jewelry-1.png`

### 3. Replacing a Product Image
To update the picture of an existing product, replace the numbered image in the respective folder:
- **Boys Shirts:** Replace files inside `images/boys/` (e.g., `1.png`, `2.png`, `3.png`).
- **Girls Shirts:** Replace files inside `images/girls/` (e.g., `1.png`, `2.png`, `3.png`).
- **Jewelry Items:** Replace files inside `images/jewelry/` (e.g., `1.png`, `2.png`, `3.png`).
*Note: Keep the name (e.g., `2.png`) and format identical so it automatically links to the existing database.*

### 4. Updating Payment Wallet Logos
To change or update the payment method badges displayed on the Cart page:
- **JazzCash Logo:** Replace `images/jazzcash-logo.png`
- **Easypaisa Logo:** Replace `images/easypaisa-logo.png`
- **Raast Logo:** Replace `images/raast-logo.png`

---

## 💻 Running the Project Locally

Since this is a client-side frontend project, you do not need to install any heavy software or databases.

1. **Direct Run:**
   Simply double-click on `index.html` (or open it with any web browser) to launch the app.
   
2. **Using Live Server (Recommended):**
   If you are editing the code using VS Code, install the **Live Server** extension, right-click on `index.html`, and select **Open with Live Server**. This enables automatic page reloading whenever you make code adjustments.

---

## 💳 Payment & Ordering Details

- **Admin Account Title:** Muhammad Faheem (Faheem F3)
- **Account Number:** +923047844965 (JazzCash, Easypaisa, Raast ID)
- **Shipping Policy:** 
  - **COD (Cash on Delivery):** Shipping fees are paid by the customer and are non-refundable.
  - **Advance Payment:** 100% Free Shipping as a reward for trusted advance payments.
- **Workflow:** Customer places items in the cart -> Views payment methods -> Sends screenshot & order info to WhatsApp link -> Order gets verified and dispatched.