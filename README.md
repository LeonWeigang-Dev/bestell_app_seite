# BestellApp – BurgerHouse Ordering Website

## 📖 About the Project

This repository contains **BestellApp**, a responsive restaurant ordering website for the fictional **BurgerHouse** restaurant.

The project combines a dynamically generated menu with an interactive shopping basket. Users can browse burgers, pizzas and salads, add dishes to the basket, change quantities and see the calculated order total.

---

## ✨ Key Features

### 🍔 Restaurant & Menu

- BurgerHouse landing area with restaurant branding and hero image
- Category navigation for **Burger**, **Pizza** and **Salads**
- Menu entries are rendered dynamically from a JavaScript data structure
- 12 dishes across three categories
- Dish images, descriptions and prices are displayed for each item

### 🛒 Shopping Basket

- Add dishes directly from the menu
- Add the same dish multiple times
- Increase or decrease item quantities
- Remove individual items from the basket
- Automatic calculation of subtotal, delivery costs and total price
- Basket badge shows the total number of selected items

### 💾 Local Cart Persistence

- Basket contents are stored in `localStorage`
- Existing cart contents are restored when the page is loaded again
- UI is re-rendered after every cart change to keep the menu state and basket state synchronized

### ✅ Order Confirmation

- The order can be confirmed when the basket contains at least one item
- The current cart is cleared after confirmation
- A confirmation dialog is shown with a delivery graphic and progress animation
- The confirmation dialog closes automatically after four seconds

### 📱 Responsive Design

- Desktop layout with menu content and a sticky basket area
- Mobile layout switches to a full-width content area
- On smaller screens the basket becomes a fixed overlay
- Bottom navigation provides access to the home view and basket on mobile layouts
- Responsive image, spacing and layout adjustments for narrow screens

### 🎨 Visual Design

- Orange and dark teal color palette
- Figtree font supplied locally with the project
- Restaurant-specific illustrations, icons and food images
- Hover feedback for buttons and interactive basket controls
- Smooth scrolling for category navigation

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Native `localStorage` for client-side basket persistence
- Native HTML `<dialog>` element for the order confirmation

### Project Structure & Data

- Menu data stored in `scripts/db.js`
- HTML templates generated in `scripts/template.js`
- Application logic handled in `script.js`
- Styling split between reusable files in `styles/` and the main `style.css`

### Development

- No external JavaScript frameworks or package manager required
- Live Server / local static web server for development

---

## 📁 Project Structure

```text
bestell_seite/
├── assets/
│   ├── fonts/                 # Local Figtree font files
│   ├── icons/                 # Navigation, basket and order-status icons
│   └── img/                   # Restaurant branding, background and food images
├── styles/
│   ├── assets.css             # Image, icon, button and related styles
│   ├── fonts.css              # Local Figtree font definitions
│   └── standard.css           # Base/reset and standard element rules
├── scripts/
│   ├── db.js                  # Menu data and cart state
│   └── template.js             # HTML templates for menu, basket and dialog
├── index.html                  # Main ordering page
├── alternativeVariant.html    # Alternative development variant, git-ignored
├── script.js                   # Application logic and basket functions
├── style.css                   # Main layout and responsive rules
├── .gitignore                  # Excludes alternativeVariant.html from Git
└── README.md                   # Project documentation
```

---

## 🚀 Installation & Setup

### 1. Download or clone the project

```bash
git clone <YOUR-REPOSITORY-URL>
cd <YOUR-REPOSITORY-FOLDER>
```

### 2. Run the frontend

Open the project with a local web server such as VS Code Live Server.

The application does not require a backend, npm installation or build process.

### 3. Open the application

Use `index.html` as the main entry point. After loading, `init()` restores the saved basket and renders the menu and basket contents.

---

## ✏️ Customization

The menu can be changed in `scripts/db.js`.

Each category contains dish objects with:

- `name` – dish name
- `description` – ingredients / description text
- `price` – numeric price value
- `image` – image filename from `assets/img/`

To add a new category or dish, update the corresponding data structure and provide the matching image asset.

Layout and responsive behavior can be adjusted in `style.css` and `styles/assets.css`.

---

## 🛒 Basket & Order Logic

The main application logic is organized around a small set of focused functions in `script.js`:

- `renderDishes()` builds the category sections and dishes from `dishesDb`
- `renderBasket()` switches between the empty and filled basket views
- `addToBasket()` adds a dish or increases its existing quantity
- `changeAmount()` changes the quantity and removes an item when it reaches zero
- `deleteFromBasket()` removes an item completely
- `renderTotals()` calculates subtotal, delivery costs and total price
- `saveCart()` and `loadCart()` persist the cart with `localStorage`
- `updateBadge()` keeps the mobile basket counter synchronized
- `buyButton()` clears the basket and displays the confirmation dialog

The current delivery charge is **3.49€** whenever the subtotal is greater than zero. An empty basket has no delivery charge.

---

## 📬 Data & State Management

The project does not use a backend database or API.

The menu is stored locally in `scripts/db.js`, while the current shopping basket is held in the `cartShopping` array and persisted in the browser's `localStorage` under the key `cart`.

This keeps the project fully client-side and makes it suitable as a frontend ordering-app exercise.

---

## ⚠️ Before Publishing

The current implementation is a frontend prototype. The **Buy Now** action clears the local basket and displays a confirmation dialog, but it does not send a real order to a restaurant, process a payment or communicate with a backend.

The bottom navigation also contains additional visual buttons for takeout and profile functionality; the current code only provides application logic for the home navigation and shopping basket button.

---

## 📌 Project Notes

`alternativeVariant.html` is included in the supplied archive as an alternative development version and is excluded through `.gitignore`. The primary application entry point is `index.html`.

The alternative file references `styles/basket.css`, which is not included in the supplied archive. It should therefore be treated as a development variant rather than the main application flow.
