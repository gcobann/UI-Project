# DropDeal - Digital Item and Game Asset Marketplace

DropDeal is a modern, user-friendly marketplace user interface (UI) prototype where players can securely examine in-game items (skins, knives, VP, GB, etc.) and perform management simulations. This project is a "Front-end" study that combines e-commerce dynamics with gamer aesthetics.

## Features

* **Modern Dark Mode:** A modern black and yellow color palette based on Bootstrap 5 that appeals to the gamer audience and is easy on the eyes.
* **Dynamic Cart System:** A JavaScript-based cart module that works without page reloads, integrates with "Offcanvas" (side menu), and performs instant price calculations.
* **Advanced Marketplace Filtering:** A filtering system that provides instant results based on CS2, Valorant, and Knight Online categories or price ranges.
* **Bento Grid Design:** A grid (bento box) layout on the homepage that displays popular categories in a stylish and trendy way.
* **User Panel Simulation:** A tabbed profile page design that lists wallet balance top-ups, active listing management, and past purchases.
* **Responsive (Mobile Compatible) Design:** A flexible structure that works flawlessly on mobile devices, tablets, and desktop computers.

## Technologies Used

* **HTML5 & CSS3:** Page skeleton and custom stylings (bento grid, hover animations, backdrop-filter blur effects).
* **JavaScript (Vanilla):** DOM manipulation, cart array operations, dynamic product filtering, and interactive balance updates.
* **Bootstrap 5.3:** Grid system, modals (login/register), offcanvas components, and carousel (campaign slider).
* **FontAwesome 6.4:** A modern and clear vector icon set.

## Project Structure

* `index.html`: The landing page containing the campaign slider and bentobox categories.
* `marketplace.html`: The marketplace where products are listed and detailed filtering can be done.
* `detail.html` / `detailawp.html`: Custom product pages containing product descriptions, seller ratings, and delivery information.
* `profile.html`: The user center containing wallet management, active listings, and transaction history.
* `style.css`: Project-specific dark theme settings, custom animations, and responsive adjustments.
* `script.js`: The core file managing the cart logic, filtering algorithm, and UI interactions.

## Installation and Execution

Since this project runs entirely on the client-side, it does not require any server installation.

1. Download the project to your computer.
2. Open the `index.html` file with any web browser (Chrome, Edge, Firefox, etc.).
3. If you are in the development phase, you can run it using the VS Code "Live Server" extension to track instant changes.

---
*Note: This project is a UI (User Interface) prototype. Actions such as logging in, registering, or topping up balance are currently for simulation purposes and are not connected to a database.*
