# 🔗 URL Shortener

A simple and efficient URL Shortener built with Node.js, Express, and MongoDB.  
This application converts long URLs into short, shareable links and tracks them.

👉 Live Demo: _Add your deployed link here_  
👉 Author: Raju Das

---

## 🚀 Features

- 🔐 User Authentication (JWT + Cookies)
- ✂️ Shorten long URLs instantly
- 📊 Track created links
- 🧠 MongoDB database storage
- ⚡ Fast redirection
- 🎨 Clean UI with EJS + Tailwind CSS
- 🔒 Protected routes (login required)
- 🌐 Custom short links (optional)

---

## 🛠️ Tech Stack

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Cookie Parser

**Frontend**
- EJS Templates
- Tailwind CSS
- HTML / JavaScript

**Tools**
- Git & GitHub
- Postman
- npm

---

## 📁 Project Structure

```

URLShortner/
│
├── modules/         # Database schemas
├── routes/          # Express routes
├── views/           # EJS templates
├── public/          # Static files
├── middleware/      # Auth middleware
├── .env             # Environment variables (not committed)
├── server.js        # Entry point
└── package.json

````

---

## ⚙️ Installation & Setup

### Clone the repository

```bash
git clone https://github.com/git-rajudas/URLShortner.git
cd URLShortner
````

---

### Install dependencies

```bash
npm install
```

---

### Create `.env` file

```env
PORT=3000
DB_URL=your_mongodb_connection_string
jwt_secret=your_secret_key
```

---

### Run the server

```bash
npm start
```

Server will run at:

```
http://localhost:3000
```

---

## 🔐 Environment Variables

| Variable   | Description               |
| ---------- | ------------------------- |
| PORT       | Server port               |
| DB_URL     | MongoDB connection string |
| jwt_secret | Secret key for JWT tokens |

---

## 📸 Screenshots

<img width="1920" height="1218" alt="image" src="https://github.com/user-attachments/assets/8f0be16d-c4be-4c1a-8439-0cca61f1e598" />


---

## 🧪 API Endpoints (Example)

### Create Short URL

```
POST /createlink
```

### Redirect to Original URL

```
GET /: id
```

---

## 🎯 Future Improvements

* 📊 Click analytics dashboard
* 🌐 Custom domain support
* 📱 Responsive UI improvements
* 🔑 OAuth login (Google/GitHub)
* 🚀 Deployment (Render / Railway / Vercel)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Push and open a PR

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Raju Das**

GitHub: [https://github.com/git-rajudas](https://github.com/git-rajudas)

