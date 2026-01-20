# 💰 Mini Expense Tracker

A sleek, responsive, and functional web application built to help users manage their daily finances. This project demonstrates modern frontend development practices, state management, and data visualization.

**🌐 [Live Demo](https://mexpense-tracker.netlify.app/)**

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
