# Varonmark Digital Marketing Website

## Overview

Varonmark is a modern full-stack web application for a digital marketing agency specializing in Etsy management, social media marketing, and e-commerce solutions. The application is built with a React frontend and Express.js backend, featuring a contact form system and responsive design with Turkish language support.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Pattern**: RESTful endpoints with JSON responses
- **Development Storage**: In-memory storage fallback for development

### Database Schema
- **contacts**: Stores contact form submissions with fields for name, email, phone, service, message, and timestamp
- **users**: User management schema (prepared for future authentication features)

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero**: Landing section with animated elements and call-to-action
- **Services**: Service showcase with pricing cards for different offerings
- **About**: Company information with feature highlights
- **Testimonials**: Customer reviews with avatar placeholders
- **Contact**: Contact form with validation and submission handling
- **Footer**: Site footer with links and social media

### Backend Components
- **Route Handlers**: RESTful API endpoints for contact form submission and retrieval
- **Storage Layer**: Abstracted storage interface with memory and database implementations
- **Validation**: Zod schema validation for form data
- **Error Handling**: Centralized error handling middleware

### Shared Components
- **Schema Definitions**: Drizzle schemas with Zod validation for type safety
- **Type Definitions**: Shared TypeScript interfaces between frontend and backend

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form in frontend
   - Form data validated with Zod schemas
   - API request sent to `/api/contacts` endpoint
   - Backend validates and stores contact in database
   - Success/error response sent back to frontend
   - Toast notification shown to user

2. **Contact Retrieval**:
   - Admin can access `/api/contacts` to view all submissions
   - Data retrieved from database and returned as JSON

3. **Development Workflow**:
   - Vite dev server serves frontend with hot module replacement
   - Express server handles API requests
   - TypeScript compilation and type checking
   - Automatic database migrations with Drizzle

## External Dependencies

### Frontend Dependencies
- **@radix-ui/***: Comprehensive UI component primitives
- **@tanstack/react-query**: Server state management and caching
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Minimalist routing library
- **zod**: Schema validation library
- **lucide-react**: Icon library

### Backend Dependencies
- **express**: Web application framework
- **drizzle-orm**: TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: Neon database connection driver
- **connect-pg-simple**: PostgreSQL session store (prepared for sessions)

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **drizzle-kit**: Database migrations and schema management
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: ESBuild bundles TypeScript server code
3. **Database Migration**: Drizzle migrations applied to production database

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific identifier for development features

### Production Setup
- Express server serves both API endpoints and static frontend files
- PostgreSQL database for persistent storage
- Error handling and logging configured for production environment

## Changelog

Changelog:
- July 07, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.