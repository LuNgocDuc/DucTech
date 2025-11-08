🛒 E-commerce Website (Frontend) Project
This project is a complete Front-end e-commerce website focusing on sophisticated state management, secure user authentication, and advanced data filtering capabilities.
🛠️ Core Technologies Used
    - React JS & Tailwind CSS : Main library for building the user interface; ensures a fully responsive design
    - Context API: Used for centralized state management, particularly for product data and filtering logic
    - Clerk: Third-party authentication solution handling secure Login/Signup (via Google, Email, GitHub), eliminating the need for a custom backend for authentication
    - Axios: HTTP client used to fetch dynamic data from external APIs
    - Local Storage : Used to persist cart items, ensuring data remains available after page refresh
    - Fake Store API : Provides dynamic product data
    - React Slick: Used to implement the dynamic, data-driven Carousel on the homepage
    - React Router DOM : Manages application routing and enables Protected Routes
    - React Toastify: Used to display success notifications (toasts) when products are added to the cart or quantity is updated
    - Lottie React: Used to display dynamic animations, such as the "Not Found" animation when filter results are empty

✨ Main Features
1. Product Management and Advanced Filtering
    - Dynamic Data: Product data is fetched dynamically from the Fake Store API.
    - Comprehensive Filtering: Users can filter products based on multiple criteria simultaneously: Title (Search), Category (using checkboxes), Brand (using a select dropdown), and Price Range (using a slider).
    - Dynamic Pagination: The product list displays only 8 products per page. Pagination functionality is dynamically calculated to handle large datasets.
    - Loading/Not Found States: Displays a Loading animation while fetching data and a "Not Found" animation if no products match the current filter criteria.
    - Reset Filter Button: Allows users to easily reset all active filters to their initial state.
2. Cart Functionality and Security
    - Quantity Control: When adding a product that already exists in the cart, the system automatically increments the quantity instead of adding a duplicate item.
    - If the quantity is decreased to below 1, the item is automatically removed from the cart.
    - Cart Persistence: Cart items are stored using Local Storage to ensure they are maintained even if the user refreshes the page.
    - Protected Route: The Cart page (/cart) is a Protected Route; unauthenticated users attempting to access it will be redirected to the homepage.
    - Checkout Information: If a user is signed in (via Clerk), their full name is automatically populated in the delivery form.
3. Enhanced User Experience (UX/UI)
    - Location Detection: The "Detect My Location" feature, available on the Navbar and Cart page, automatically retrieves the user's coordinates (latitude and longitude) and uses a third-party API (OpenStreetMap) to fetch the detailed address (Country, State, Postal Code).
    - Dynamic UI Elements: The project includes a dynamic Carousel fetching data from an API, and a banner utilizing a Parallax effect, where the background image remains stationary while the text scrolls.
    - Responsive Design: The entire website is built using Tailwind CSS utility classes to ensure full responsiveness across mobile and desktop devices. Layouts, such as the Cart page, switch from a multi-column grid to a single-column layout on mobile.
    - Scroll to Top: A custom button is implemented using react-scroll-to-top to smoothly return the user to the top of the page

⚙️ Launch Instructions

Run the following command to start the development server:
npm run dev
