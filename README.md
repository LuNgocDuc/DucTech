<div align="center">
    <h1>🛒 E-COMMERCE: Modern Frontend E-commerce Platform</h1>
    <h2>ReactJS • Tailwind CSS • Clerk Auth • Advanced State Management</h2>
</div>

---

### 📝 **Project Overview**

This project is a complete **Front-end E-commerce Website** built with modern best practices, focusing on:
* **Sophisticated State Management** (Context API).
* **Secure User Authentication** (Clerk).
* **Advanced Data Filtering** and dynamic pagination capabilities.

It consumes dynamic product data from the [**Fake Store API**](https://fakestoreapiserver.reactbd.org/api/products/).

<br>

<div align="center">
    <h3>🛠️ **Core Technologies Used**</h3>
</div>

| Category | Technology | Primary Use |
| :--- | :--- | :--- |
| **Frontend/UI** | **React JS** & **Tailwind CSS** | Main library for UI and fully **Responsive Design**. |
| **State Management** | **Context API** | Centralized state for products, cart, and filtering logic. |
| **Authentication** | **Clerk** | Secure third-party Login/Signup (Google, Email, GitHub). |
| **Data Handling** | **Axios** & **Local Storage** | Dynamic API fetching and cart item **persistence**. |
| **Routing** | **React Router DOM** | Manages application routing and **Protected Routes**. |
| **UX/Animation** | React Slick, Lottie React, React Toastify | Dynamic Carousel, "Not Found" animations, and success notifications. |

---

<div align="center">
    <h3>✨ Key Features</h3>
</div>

### 1. 🔍 **Product Management & Advanced Filtering**

* **Comprehensive Filtering:** Users can filter products based on **multiple criteria simultaneously**: Title (Search), Category (Checkboxes), Brand (Dropdown), and Price Range (Slider).
* **Dynamic Pagination:** Displays **8 products per page**. Pagination logic is dynamically calculated for large datasets.
* **State Handling:** Shows a **Loading** animation while fetching and a **"Not Found"** animation (Lottie React) if filters yield no results.
* **Reset Filter Button:** Allows users to easily reset all active filters.

### 2. 🛒 **Cart Functionality & Security**

* **Smart Quantity Control:** Automatically **increments quantity** for existing items; **removes item** if quantity decreases below 1.
* **Cart Persistence:** Cart items are stored using **Local Storage** to ensure data integrity across page refreshes.
* **Protected Route:** The Cart page (`/cart`) is a **Protected Route**; unauthenticated users are redirected.
* **Checkout Info:** Signed-in user's **full name** is automatically populated in the delivery form (via Clerk data).

### 3. 🗺️ **Enhanced User Experience (UX/UI)**

* **Location Detection:** The "Detect My Location" feature retrieves user **coordinates** and uses OpenStreetMap to fetch a detailed **Address** (Country, State, Postal Code).
* **Dynamic UI Elements:** Includes an API-driven **Carousel** and a **Parallax effect** banner where the background remains stationary as text scrolls.
* **Responsive Design:** Built with **Tailwind CSS** for full responsiveness; complex layouts (like the Cart page) switch from a multi-column grid to a single-column layout on mobile.
* **Scroll to Top:** A custom button implementation to smoothly return the user to the top of the page.

---

<div align="left">
    <h3>⚙️ **Launch Instructions**</h3>
    <p>Follow these commands to run the project locally:</p>
</div>

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Start the development server:**
    ```bash
    npm run dev
    ```
