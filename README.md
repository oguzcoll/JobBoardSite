# JobBoardSite - Job Board Platform

A comprehensive job board platform built with Node.js backend and React frontend, designed to connect job seekers with employers.

## 🚀 Project Overview

JobBoardSite is a full-stack web application that provides a platform for job seekers to find opportunities and employers to post job openings. The application features separate interfaces for employees and employers, with secure authentication and job management capabilities.

## ✨ Features

### For Job Seekers (Employees)
- User registration and authentication
- Browse available job listings
- Search and filter jobs by various criteria
- View detailed job information
- Profile management
- Salary information and insights

### For Employers
- Company registration and authentication
- Post new job openings
- Manage existing job postings
- View applicant information
- Company profile management

### General Features
- Responsive design for all devices
- Modern and intuitive user interface
- Secure authentication system
- Real-time job search and filtering
- Professional styling and animations

## 🏗️ Project Structure

```
JobBoardSite/
├── api/                    # Backend API server
│   ├── controllers/        # Business logic controllers
│   ├── routes/            # API route definitions
│   ├── connect.js         # Database connection
│   └── index.js           # Server entry point
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── context/       # React context providers
│   │   └── assets/        # Images and static files
│   └── public/            # Public assets
└── package.json           # Root package configuration
```

## 🛠️ Technology Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **JWT** - JSON Web Token authentication

### Frontend
- **React.js** - JavaScript library for building user interfaces
- **CSS3** - Styling and animations
- **Context API** - State management

## 📋 Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB database
- Git

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd JobBoardSite
```

### 2. Install Backend Dependencies
```bash
cd api
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../client
npm install
```

### 4. Environment Configuration
Create a `.env` file in the `api` directory with the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 5. Start the Application

#### Start Backend Server
```bash
cd api
npm start
```

#### Start Frontend Development Server
```bash
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📱 Available Pages

### Public Pages
- **Home** - Landing page with job search functionality
- **About** - Information about the platform
- **Options** - Choose between employee and employer registration

### Authentication Pages
- **Employee Login/Register** - Job seeker authentication
- **Employer Login/Register** - Company authentication

### Protected Pages
- **Profile** - User profile management
- **Job Lists** - Browse and search job opportunities
- **Salary** - Salary information and insights

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/employee/register` - Employee registration
- `POST /api/auth/employee/login` - Employee login
- `POST /api/auth/employer/register` - Employer registration
- `POST /api/auth/employer/login` - Employer login

### Jobs
- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create new job (employers only)
- `PUT /api/jobs/:id` - Update job (employers only)
- `DELETE /api/jobs/:id` - Delete job (employers only)

### Users
- `GET /api/employees` - Get employee profiles
- `GET /api/employers` - Get employer profiles
- `PUT /api/employees/:id` - Update employee profile
- `PUT /api/employers/:id` - Update employer profile

## 🎨 Component Architecture

### Core Components
- **Navbar** - Navigation header with authentication status
- **Footer** - Site footer with links and information
- **Modal** - Reusable modal component for forms and dialogs
- **Search** - Job search and filtering functionality

### Job-Related Components
- **Job** - Individual job listing display
- **JobLists** - Container for multiple job listings

### Page Components
- **Home** - Landing page with hero section and job search
- **Profile** - User profile management interface
- **Salary** - Salary information and calculator

## 🔐 Security Features

- JWT-based authentication
- Password hashing and validation
- Protected API routes
- Input validation and sanitization
- Secure session management

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices
- Various screen sizes and orientations

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Configure MongoDB connection
3. Deploy to platforms like Heroku, Railway, or AWS

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy the `build` folder to platforms like Netlify, Vercel, or AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🔮 Future Enhancements

- Real-time notifications
- Advanced job matching algorithms
- Resume upload and management
- Company reviews and ratings
- Mobile application
- Advanced analytics dashboard
- Multi-language support

## 📊 Project Status

- ✅ Backend API development
- ✅ Frontend React application
- ✅ User authentication system
- ✅ Job posting and management
- ✅ Responsive design
- 🔄 Testing and optimization
- 📋 Documentation updates

---

**Note**: This is a comprehensive job board platform designed for production use. Make sure to follow security best practices and perform thorough testing before deploying to production environments.
