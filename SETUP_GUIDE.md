# Social Media App - Setup Guide

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or Atlas connection)
- npm or yarn

## Backend Setup

### 1. Navigate to backend directory
\`\`\`bash
cd backend
\`\`\`

### 2. Install dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Create .env file
Copy \`.env.example\` to \`.env\` and update values:
\`\`\`bash
cp .env.example .env
\`\`\`

Update \`.env\`:
\`\`\`
PORT=5000
MONGODB_URI=mongodb://localhost:27017/social-media
JWT_SECRET=your_secure_jwt_secret_key_here
NODE_ENV=development
CLIENT_URL=http://localhost:3000
\`\`\`

### 4. Make sure MongoDB is running
\`\`\`bash
# If using local MongoDB
mongod
\`\`\`

### 5. Start the backend server
\`\`\`bash
# Development with auto-reload
npm run dev

# Or production
npm start
\`\`\`

Server should run at \`http://localhost:5000\`

## Frontend Setup

### 1. Open new terminal and navigate to frontend
\`\`\`bash
cd frontend
\`\`\`

### 2. Install dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Create .env file (optional)
\`\`\`bash
cp .env.example .env
\`\`\`

Default value is already set:
\`\`\`
REACT_APP_API_URL=http://localhost:5000/api
\`\`\`

### 4. Start the frontend
\`\`\`bash
npm start
\`\`\`

App should open at \`http://localhost:3000\`

## Testing the App

### 1. Register a new account
- Click \"Register here\" on the login page
- Enter name, email, and password
- You'll be logged in automatically

### 2. Create posts
- On the home page, fill the \"Create a Post\" form
- Add text and optional image URL
- Click \"Post\"

### 3. Like and comment
- Click the heart icon to like posts
- Click comments to expand and add comments

### 4. Visit user profiles
- Click on a user's name to visit their profile
- View their posts and follower/following counts
- Follow/Unfollow users

## Troubleshooting

### MongoDB connection error
- Make sure MongoDB service is running
- Check connection string in .env matches your MongoDB setup
- For MongoDB Atlas, use: \`mongodb+srv://username:password@cluster.mongodb.net/social-media\`

### CORS errors
- Ensure frontend URL is set in backend \`.env\`
- Check that both frontend and backend are running

### Port already in use
- Backend: Change PORT in \`.env\`
- Frontend: Use \`PORT=3001 npm start\`

### Authentication errors
- Make sure JWT_SECRET is set in backend \`.env\`
- Clear browser localStorage: Open DevTools > Application > localStorage > clear

## Production Deployment

### Build frontend
\`\`\`bash
cd frontend
npm run build
\`\`\`

### Deploy to services like:
- Vercel (Frontend)
- Heroku (Backend)
- MongoDB Atlas (Database)
- AWS (Both)

## API Documentation

### Authentication Endpoints
- \`POST /api/auth/register\` - Register new user
- \`POST /api/auth/login\` - Login user
- \`GET /api/auth/profile\` - Get current user profile

### Posts Endpoints
- \`GET /api/posts\` - Get all posts
- \`POST /api/posts\` - Create new post
- \`PUT /api/posts/:id\` - Update post
- \`DELETE /api/posts/:id\` - Delete post
- \`POST /api/posts/:id/like\` - Like post
- \`DELETE /api/posts/:id/unlike\` - Unlike post

### Users Endpoints
- \`GET /api/users/:id\` - Get user profile
- \`PUT /api/users/:id\` - Update user profile
- \`POST /api/users/:id/follow\` - Follow user
- \`DELETE /api/users/:id/unfollow\` - Unfollow user

### Comments Endpoints
- \`POST /api/posts/:postId/comments\` - Add comment
- \`DELETE /api/comments/:id\` - Delete comment

## Support

For issues or questions, create an issue on GitHub or check the documentation.
