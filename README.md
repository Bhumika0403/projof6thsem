# 🚀 Study Stream - AI-Powered Virtual Study Room

Study Stream is a full-stack, real-time virtual study platform built to enhance collaborative learning. It seamlessly integrates a real-time group chat system with a highly responsive, integrated AI Study Assistant. Students can join study rooms, share resources, and get instant answers to their academic queries without ever leaving the platform.

## ✨ Key Features

* **🤖 Integrated AI Study Assistant:** A smart, conversational bot powered by the latest **Google Gemini API** (`gemini-flash-latest`) to answer study-related questions instantly in markdown format.
* **💬 Real-Time Group Chat:** Instant messaging inside study rooms using **Socket.io**, ensuring zero-latency communication among peers.
* **🔐 Secure Authentication:** Robust user signup and login system using **JWT (JSON Web Tokens)** and **bcryptjs** for password hashing.
* **📸 Media Sharing:** Users can upload and share images seamlessly, powered by **Cloudinary** and **Multer**.
* **🎨 Modern UI/UX:** Responsive and modular frontend architecture crafted with **React** and **Tailwind CSS**.

## 🛠️ Tech Stack

**Frontend:**
* React.js
* Tailwind CSS
* Socket.io-client

**Backend:**
* Node.js & Express.js
* MongoDB & Mongoose
* Socket.io (WebSockets)
* Google Generative AI SDK (`@google/generative-ai`)
* Cloudinary & Multer

## ⚙️ Environment Variables (.env)

To run this project locally, create a `.env` file in your `backend` directory and add the following keys:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
GEMINI_API_KEY=your_google_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
