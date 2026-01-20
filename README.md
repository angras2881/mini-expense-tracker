# 💰 Mini Expense Tracker

A professional, responsive dashboard for tracking personal finances. Built with **React**, **Vite**, and **Tailwind CSS**, featuring real-time data visualization and persistent storage.

**Live Demo:** [🚀 mexpense-tracker.netlify.app](https://mexpense-tracker.netlify.app/)



---

## 🚀 Features

- **Real-time Tracking:** Add and delete expenses with instant UI updates.
- **Data Visualization:** Dynamic horizontal bar chart that categorizes spending using Recharts.
- **Data Persistence:** Uses Browser `localStorage` to ensure your data stays saved even after a page refresh.
- **Responsive Design:** Mobile-first approach styled with Tailwind CSS for a seamless experience on any device.
- **Smart Form Validation:** Prevents empty entries and includes category-specific selection.

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Charts:** Recharts / Custom SVG Components
- **Deployment:** Netlify
- **State Management:** React Hooks (`useState`, `useEffect`)

## 📂 Project Structure

```text
src/
├── components/
│   ├── ExpenseForm.jsx       # Data entry with validation
│   ├── ExpenseBarChart.jsx   # Visual representation of data
│   ├── ExpenseSummary.jsx    # Calculations and list management
│   ├── Hero.jsx              # Branding and header section
│   └── Footer.jsx            # Project credits
├── App.jsx                   # Main logic and persistence layer
└── main.jsx                  # Entry point

⚙️ Local Setup
Follow these steps to get the project running on your local machine:

Clone the repository

Bash

git clone https://github.com/angras2881/mini-expense-tracker.git
Navigate to the project folder Note: The React application is located within the expense-tracker subdirectory.
cd mini-expense-tracker/expense-tracker

Bash

cd expense-tracker
Install dependencies Make sure you have Node.js installed.

Bash

npm install
Start the development server

Bash

npm run dev
View the app Open your browser and navigate to http://localhost:5173 (or the port shown in your terminal).
