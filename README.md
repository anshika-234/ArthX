# 📈 ArthX

> A full-stack stock trading dashboard inspired by Zerodha — track your portfolio, place orders, and manage your investments all in one place.

*Note: This application uses simulated data to demonstrate full-stack architecture and UI/UX capabilities without requiring a live, paid market API.*

---

## 📌 Table of Contents

- [Description](#description)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 📖 Description

**ArthX** is a Zerodha-inspired stock trading dashboard built for investors who want a clean, simple interface to manage their portfolio. 

### What problem does it solve?
Managing stocks across multiple platforms is messy. ArthX gives you one clean dashboard to track your holdings, monitor positions, place orders, and manage funds — all in one place. 

### Who is this for?
This project was built as a comprehensive **full-stack portfolio showcase**, demonstrating the ability to build complex, state-heavy dashboards, secure authentication, and RESTful APIs.

### Key Features
- 🔐 Secure authentication with Passport.js
- 📊 Dynamic portfolio tracking with P&L calculation
- 📈 Interactive charts for visual portfolio analysis
- 🗄️ Full CRUD operations for orders and holdings

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 Authentication | Secure Login/Signup with Passport.js |
| 📊 Holdings | View all stock holdings with current value & P&L |
| 📋 Orders | Place simulated BUY/SELL orders with quantity & price |
| 📉 Positions | Track open positions with day change |
| 💰 Funds | View available margin, used margin & cash balance |
| 👀 Watchlist | Monitor mock stocks with price & percentage change |
| 📈 Charts | Doughnut chart (Watchlist) + Bar chart (Holdings) |
| 📱 Responsive | Mobile-friendly navigation and layout |

---

## 📁 Project Structure

```text
📦 ArthX/
├── 📂 frontend/
│   └── src/
│       ├── components/
│       │   ├── Dashboard.jsx      # Main layout + routes
│       │   ├── Menu.jsx           # Sidebar navigation
│       │   ├── TopBar.jsx         # NIFTY/SENSEX top bar
│       │   ├── Summary.jsx        # Dashboard home
│       │   ├── Holdings.jsx       # Holdings table + chart
│       │   ├── Orders.jsx         # Orders list
│       │   ├── Positions.jsx      # Open positions
│       │   ├── Funds.jsx          # Funds & margin
│       │   ├── WatchList.jsx      # Watchlist + Buy/Sell
│       │   ├── DoughnutChart.jsx  # Pie chart
│       │   └── VerticalGraph.jsx  # Bar chart
│       └── data/
│           └── data.js            # Mock frontend data
│
└── 📂 backend/
    ├── routes/
    │   ├── Auth.js                # Login/Signup routes
    │   └── Dashboard.js           # Holdings/Orders routes
    ├── controllers/
    │   └── Dashboard.js           # Business logic
    ├── model/
    │   ├── Holding.js             # Holdings model
    │   └── Order.js               # Orders model
    ├── config/
    │   └── passport.js            # Passport config
    └── server.js                  # Entry point

git clone https://github.com/anshika-234/ArthX.git
cd ArthX
cd frontend
npm install
cd backend
npm start
# Server runs on http://localhost:4000

1. Create an Account
Open http://localhost:3000
Register a new account and login.
You will be redirected to the empty Dashboard.
2. Place an Order (Add Data)
Go to the Watchlist from the sidebar.
Hover over any stock and click BUY.
Enter the quantity and click "Confirm Order".
The backend will process this, and you will now see data populated in your Holdings and Orders tabs!

MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/fin-tech?appName=fin-tech
SECRET=your_secret_key_here
PORT=4000

📡 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/auth/register	Register new user
POST	/auth/login	Login user
GET	/auth/logout	Logout user
Dashboard Routes
Method	Endpoint	Description
GET	/dashboard/holdings	Get all holdings
POST	/dashboard/holdings	Add a holding
GET	/dashboard/orders	Get all orders
POST	/dashboard/orders	Place new order

📄 License
This project is licensed under the MIT License.

📬 Contact
Anshika Gupta

🐙 GitHub: @anshika-234
💼 LinkedIn: Your LinkedIn Profile
📧 Email: your.email@example.com
🙏 Acknowledgments
Inspired by the UI/UX of Zerodha
Charts powered by Chart.js
Icons by Material UI
Database hosted on MongoDB Atlas
Authentication by Passport.js
