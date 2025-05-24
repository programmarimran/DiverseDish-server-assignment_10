# 🌐 Diverse Dish - Server Side (Express + MongoDB)

This is the **backend/server-side** of the **Diverse Dish** project — a global recipe-sharing application. It is built using **Node.js**, **Express.js**, and **MongoDB**, and serves APIs to manage recipes, likes, and user wishlists.

🔗 **Client Site (Live):** [diverse-dish-by-imran.web.app](https://diverse-dish-by-imran.web.app/)

---

## 🚀 Features

- 📦 Full CRUD operations for recipes
- 💖 Like system (increment likes via `PATCH`)
- 📝 Wishlist system for logged-in users
- 📤 Insert single or multiple recipes
- 🔐 Email-based filtering for wishlist
- 🔁 Sort recipes by like count for homepage

---

## 📁 API Endpoints

### 📘 Recipes

| Method | Endpoint               | Description                          |
|--------|------------------------|--------------------------------------|
| GET    | `/recipes`             | Get all recipes                      |
| GET    | `/recipes/home`        | Get top 6 liked recipes              |
| GET    | `/recipes/:id`         | Get a single recipe by ID            |
| POST   | `/recipes`             | Add one or multiple new recipes      |
| PUT    | `/recipes/:id`         | Update full recipe by ID             |
| PATCH  | `/recipes/:id`         | Increment like count of a recipe     |
| DELETE | `/recipes/:id`         | Delete a recipe by ID                |

### 💖 Wishlist

| Method | Endpoint                   | Description                          |
|--------|----------------------------|--------------------------------------|
| POST   | `/wishlist/recipes`        | Add a recipe to user’s wishlist      |
| GET    | `/wishlist/recipes?email=` | Get all wishlist items by user email |

---

## ⚙️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with MongoDB Atlas)
- **CORS**: Enabled for frontend interaction
- **Dotenv**: For secure environment variable handling

---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add your MongoDB credentials:

```
DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password
PORT=3000
```

---

## 📦 Installation & Run

```bash
# Clone the repo
git clone https://github.com/your-username/diverse-dish-server.git

# Navigate into the project
cd diverse-dish-server

# Install dependencies
npm install

# Start the server
node index.js
```

---

## 📂 Folder Structure

```
.
├── index.js         # Main server file
├── .env             # Environment variables (not committed)
├── package.json     # Project dependencies
```

---

## 🛡️ Security Notes

- Ensure `.env` is listed in your `.gitignore`
- Never expose your DB credentials publicly
- Use production-level validation and rate-limiting in real deployment

---

## 🙋‍♂️ Author

- **Md Imran Hasan**
- 🔗 [Live Client Site](https://diverse-dish-by-imran.web.app/)
- 📫 Reach out via GitHub or your portfolio link

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

```bash
npm run dev # Recommended to use nodemon for development
```

---
