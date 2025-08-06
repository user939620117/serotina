# Serotina

A modern, full-stack e-commerce platform built with React, Node.js, TypeScript, and MongoDB.

## 🏗️ Project Structure

```
serotina/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Route components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API service functions
│   │   ├── utils/          # Frontend utilities
│   │   ├── styles/         # Styled components & themes
│   │   └── assets/         # Images, icons, etc.
│   ├── public/             # Static assets
│   └── tests/              # Frontend tests
├── backend/                 # Node.js API server
│   ├── src/
│   │   ├── controllers/    # Route handlers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Custom middleware
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Backend utilities
│   │   └── config/         # Configuration files
│   └── tests/              # Backend tests
├── shared/                  # Shared types and utilities
│   ├── types/              # TypeScript interfaces
│   ├── utils/              # Common utilities
│   └── constants/          # Shared constants
├── docs/                   # Documentation
├── scripts/                # Build and deployment scripts
└── .github/                # GitHub workflows and templates
```

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 16.0.0)
- npm (>= 8.0.0)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/user939620117/serotina.git
   cd serotina
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp backend/.env.example backend/.env
   
   # Edit the environment variables in backend/.env
   # Configure your MongoDB URI, JWT secret, Stripe keys, etc.
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Frontend development server on `http://localhost:3000`
   - Backend API server on `http://localhost:8000`

## 📋 Available Scripts

### Root Level Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both applications for production
- `npm run test` - Run all tests
- `npm run lint` - Lint both applications
- `npm run clean` - Remove all build artifacts and dependencies

### Frontend Scripts

- `npm run dev:frontend` - Start frontend development server
- `npm run build:frontend` - Build frontend for production
- `npm run test:frontend` - Run frontend tests

### Backend Scripts

- `npm run dev:backend` - Start backend development server
- `npm run build:backend` - Build backend for production
- `npm run start:backend` - Start production backend server
- `npm run test:backend` - Run backend tests

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **Styled Components** - CSS-in-JS styling
- **React Query** - Server state management
- **React Hook Form** - Form handling
- **Stripe** - Payment processing

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type safety
- **MongoDB & Mongoose** - Database and ODM
- **JWT** - Authentication
- **Stripe** - Payment processing
- **Cloudinary** - Image upload and management
- **Nodemailer** - Email sending

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest & Vitest** - Testing frameworks
- **Nodemon** - Development auto-restart

## 🔧 Configuration

### Environment Variables

The backend requires several environment variables. Copy `backend/.env.example` to `backend/.env` and configure:

- **Database**: MongoDB connection string
- **Authentication**: JWT secret and expiration
- **Payments**: Stripe API keys and webhook secret
- **Email**: SMTP configuration for transactional emails
- **File Storage**: Cloudinary credentials for image uploads

## 🚀 Deployment

### Frontend (Vite Build)
```bash
npm run build:frontend
# Deploy the frontend/dist folder to your static hosting provider
```

### Backend (Node.js)
```bash
npm run build:backend
npm run start:backend
# Deploy to your Node.js hosting provider
```

## 📖 API Documentation

The API follows RESTful conventions with the following main endpoints:

- `POST /api/auth/login` - User authentication
- `GET /api/products` - List products with filtering
- `POST /api/cart/items` - Add items to cart
- `POST /api/orders` - Create new order
- `POST /api/payments/create-intent` - Create payment intent

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**KELVIN.ODOOM@DCA.EDU.GH**

---

Built with ❤️ for modern e-commerce experiences.
