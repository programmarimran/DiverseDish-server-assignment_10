# 🌐 Diverse Dish – Server Side (Express + MongoDB)

## 🔗 Relevant Links

- 🌐 **Live Client Site:** [https://diverse-dish-by-imran.web.app/](https://diverse-dish-by-imran.web.app/)
- 📦 **Server Repository:** [https://github.com/programmarimran/DiverseDish-server-assignment_10](https://github.com/programmarimran/DiverseDish-server-assignment_10)
- 📦 **Client Repository:** [https://github.com/programmarimran/DiverseDish-client-assignment_10](https://github.com/programmarimran/DiverseDish-client-assignment_10)

---

## 📌 Project Overview

**Diverse Dish** is the backend for a recipe-sharing platform where users can explore and manage global dishes. This Express.js-based server handles recipe CRUD operations, like increments, and wishlist management. It connects to a MongoDB database and ensures structured API communication with the frontend client.

---

## 📦 Features

- Full CRUD operations for recipes  
- Like system (`PATCH` to increment likes)  
- Wishlist management for logged-in users  
- Filter wishlist by user email  
- Sort recipes by likes for homepage  
- Support for multiple recipe insertions  

---

## 🛠 Tech Stack

| Category   | Tools           |
|------------|------------------|
| Backend    | Node.js, Express |
| Database   | MongoDB (Atlas)  |
| Security   | Dotenv, CORS     |

---

## 🔗 API Endpoints

### Recipes

| Method | Endpoint         | Description                      |
|--------|------------------|----------------------------------|
| GET    | `/recipes`       | Get all recipes                  |
| GET    | `/recipes/home`  | Get top 6 liked recipes          |
| GET    | `/recipes/:id`   | Get recipe by ID                 |
| POST   | `/recipes`       | Add single/multiple recipes      |
| PUT    | `/recipes/:id`   | Update recipe by ID              |
| PATCH  | `/recipes/:id`   | Increment like count             |
| DELETE | `/recipes/:id`   | Delete recipe by ID              |

### Wishlist

| Method | Endpoint                     | Description                        |
|--------|------------------------------|------------------------------------|
| POST   | `/wishlist/recipes`          | Add a recipe to user's wishlist    |
| GET    | `/wishlist/recipes?email=`   | Get wishlist by user email         |

---

## ⚙️ Environment Variables

Create a `.env` file in the root and add:

```env
DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password
PORT=3000
```

---

## 🛠️ Getting Started (Run Locally)

```bash
# 1. Clone the repository
git clone https://github.com/programmarimran/DiverseDish-server-assignment_10.git
cd DiverseDish-server-assignment_10

# 2. Install dependencies
npm install

# 3. Run the server
node index.js
```

*(For development, use:)*  
```bash
npm run dev
```

---

## 📁 Folder Structure

```
.
├── index.js
├── .env
├── package.json
```

---

## 👨‍💻 Developer Information

| Detail         | Info                                          |
|----------------|-----------------------------------------------|
| 👨‍💻 Developer   | Md Imran Hasan                                |
| 💼 Role         | MERN Stack Web Developer                       |
| 📬 Email        | programmarimran@gmail.com                     |
| 🌐 Portfolio    | Coming Soon                                   |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.
