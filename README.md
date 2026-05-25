# 📈 ArthX

> A full-stack stock trading dashboard inspired by Zerodha — track your portfolio, place orders, and manage your investments all in one place.

*Note: This application uses simulated data to demonstrate full-stack architecture and UI/UX capabilities without requiring a live, paid market API.*

---

## 📌 Table of Contents

- [Description](#-description)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Usage](#-usage)
- [Configuration](#-configuration)
- [API Endpoints](#-api-endpoints)
- [License](#-license)
- [Contact](#-contact)
- [Acknowledgments](#-acknowledgments)

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

```
📦 ArthX/
│
├── 📂 frontend/                      # Landing page (Home, About, Pricing etc.)
│   └── src/
│       ├── context/
│       │   └── AuthContext.js        # Global auth state
│       └── landing_page/
│           ├── home/                 # Home page sections
│           ├── about/                # About page
│           ├── pricing/              # Pricing page
│           ├── products/             # Products page
│           ├── signup/               # Signup page
│           ├── support/              # Support page
│           ├── Navbar.js
│           ├── Footer.js
│           └── Login.js
│
├── 📂 dashboard/                     # Trading dashboard (after login)
│   └── src/
│       ├── api/
│       │   └── auth.js               # API calls
│       ├── components/
│       │   ├── Dashboard.js          # Main layout + routes
│       │   ├── Menu.js               # Sidebar navigation
│       │   ├── TopBar.js             # NIFTY/SENSEX bar
│       │   ├── Holdings.js           # Holdings table + chart
│       │   ├── Orders.js             # Orders list
│       │   ├── Positions.js          # Open positions
│       │   ├── Funds.js              # Funds & margin
│       │   ├── WatchList.js          # Watchlist + Buy/Sell
│       │   ├── DoughnutChart.js      # Pie chart
│       │   └── VerticalGraph.js      # Bar chart
│       └── data/
│           └── data.js               # Static seed data
│
└── 📂 backend/                       # REST API server
    ├── config/
    │   └── passport.js               # Passport config
    ├── Controllers/
    │   ├── Auth.js                   # Auth logic
    │   ├── Dashboard.js              # Holdings/Orders logic
    │   └── ErrorHandler.js           # Global error handler
    ├── middleware/
    │   └── AuthMiddleware.js         # Route protection
    ├── model/
    │   ├── Holding.js
    │   ├── Order.js
    │   ├── Position.js
    │   ├── User.js
    │   └── WatchList.js
    ├── routes/
    │   ├── Auth.js
    │   └── Dashboard.js
    ├── schemas/
    │   ├── Holding.js
    │   ├── Order.js
    │   ├── Positions.js
    │   ├── User.js
    │   └── WatchList.js
    ├── util/
    │   ├── CustomError.js
    │   └── SecretToken.js
    └── index.js
```

---

## ⚙️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [Git](https://git-scm.com/)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account

### 1. Clone the Repository

```bash
git clone https://github.com/anshika-234/ArthX.git
cd ArthX
```

### 2. Backend Setup

```bash
# Terminal 1 - Backend
cd backend
npm install
npm start
# API running at http://localhost:4000
```

### 3. Dashboard Setup

```bash
# Terminal 2 - Dashboard
cd dashboard
npm install
npm start
# Dashboard running at http://localhost:3001
```

### 4. Frontend Setup

```bash
# Terminal 3 - Frontend
cd frontend
npm install
npm start
# Landing page running at http://localhost:3000
```

### 5. Verify Everything Works

| Service | URL |
|---------|-----|
| Landing Page | http://localhost:3000 |
| Dashboard | http://localhost:3001 |
| Backend API | http://localhost:4000 |

---

## 🚀 Usage

### 1. Create an Account
- Open [http://localhost:3000](http://localhost:3000)
- Register a new account and login
- You will be redirected to the Dashboard with **pre-loaded sample data**

### 2. Explore the Dashboard
- 📊 **Holdings** — View your pre-loaded stock portfolio with P&L
- 📉 **Positions** — Check your open positions
- 💰 **Funds** — View margin and cash balance
- 👀 **Watchlist** — Monitor stocks with price changes

### 3. Place an Order
- Go to **Watchlist** from the sidebar
- Hover over any stock and click **BUY** or **SELL**
- Enter the quantity and click **Confirm Order**
- Order will appear in the **Orders** tab instantly!

> **Note:** Database is pre-seeded with sample holdings data on MongoDB Atlas.
> No manual data entry required after setup!

---

## 🔧 Configuration

Create a `.env` file in the `backend/` directory:

```env
PORT=4000
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/fin-tech?appName=fin-tech
SECRET=your_secret_key_here
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:4000/auth/google/callback
```

> ⚠️ **Never push your `.env` file to GitHub!**

---

## 📡 API Endpoints

### Auth Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/signup` | Register new user |
| POST | `/auth/login` | Login user |
| GET | `/auth/logout` | Logout user |

### Dashboard Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/dashboard/holdings` | Get all holdings |
| POST | `/dashboard/holdings` | Add a holding |
| GET | `/dashboard/orders` | Get all orders |
| POST | `/dashboard/orders` | Place new order |

---

## 🔮 Future Improvements

- [ ] Real-time stock price updates via WebSockets
- [ ] Live NIFTY/SENSEX data from NSE API
- [ ] Protected Routes (Auth guard)
- [ ] Deploy on Vercel + Render

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 📬 Contact

**Anshika Gupta**

- 🐙 GitHub: [@anshika-234](https://github.com/anshika-234)
- 💼 LinkedIn: [Anshika Gupta](https://www.linkedin.com/in/anshika-gupta-1495192a5)
- 📧 Email: rimigupta123456@gmail.com

---

## 🙏 Acknowledgments

- Inspired by the UI/UX of [Zerodha](https://zerodha.com)
- Charts powered by [Chart.js](https://www.chartjs.org/)
- Icons by [Material UI](https://mui.com/)
- Database hosted on [MongoDB Atlas](https://www.mongodb.com/atlas)
- Authentication by [Passport.js](http://www.passportjs.org/)
