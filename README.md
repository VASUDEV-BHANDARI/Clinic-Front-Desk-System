# Clinic Management Backend

A NestJS backend for the clinic management system.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up MySQL database:
- Create a database named `clinic_db`
- Update database credentials in `src/app.module.ts` if needed

3. Run the application:
```bash
npm run start:dev
```

The backend will run on `http://localhost:3001`

## Default Login Credentials
- Username: `admin`
- Password: `admin123`

## API Endpoints

### Authentication
- `POST /auth/login` - Login with username and password

### Queue Management
- `GET /queue` - Get all patients in queue
- `POST /queue` - Add new patient to queue
- `PATCH /queue/:id` - Update queue status/priority

### Doctors
- `GET /doctors` - Get all doctors

### Appointments
- `GET /appointments` - Get all appointments
- `POST /appointments` - Create new appointment
- `PATCH /appointments/:id` - Update appointment status

All endpoints (except login) require JWT authentication via Authorization header: `Bearer <token>` 