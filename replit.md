# MyGeekOnline.com - Remote Technical Support Platform

## Overview

MyGeekOnline.com is a modern remote technical support platform operated by CVI Holdings Inc. The application provides on-demand tech support services for common consumer technology issues including printer setup, Wi-Fi connectivity, software troubleshooting, virus removal, and data backup assistance. The platform is designed to build trust through professional aesthetics while maintaining accessibility for diverse user demographics, featuring lead generation capabilities through calls, bookings, and live chat integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **UI Components**: Comprehensive component system using Radix UI primitives for accessibility
- **Routing**: Wouter for client-side routing with dedicated pages for services, legal documents, and contact
- **State Management**: TanStack Query for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for contact and booking forms
- **Design System**: Professional color palette with primary blue (#0052CC) for trust and success green (#00B37E) for actions

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **API Design**: RESTful endpoints for contact form submissions and booking requests
- **Data Validation**: Zod schemas for request validation and type safety
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Development**: Hot reload with Vite integration for seamless development experience

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Fallback Storage**: In-memory storage implementation for development and testing
- **Data Models**: Contact submissions, booking requests, and user management tables

### Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Security**: Basic user authentication system with password hashing
- **Access Control**: Role-based access for administrative functions

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Drizzle ORM**: Type-safe database access with automatic migration generation

### Email Services
- **SendGrid**: Email delivery service for contact form notifications and business communications
- **Email Templates**: HTML and text email templates for customer inquiries and booking confirmations

### UI and Styling
- **shadcn/ui**: Modern component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Google Fonts**: Inter and Poppins fonts for professional typography
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool and development server with hot module replacement
- **TypeScript**: Type safety across frontend and backend codebases
- **React Hook Form**: Form state management with performance optimization
- **TanStack Query**: Server state synchronization and caching

### Third-Party Integrations
- **Replit Development**: Integrated development environment with runtime error overlay
- **Asset Management**: Static asset handling for images and media files
- **Performance Monitoring**: Built-in development tools for performance tracking