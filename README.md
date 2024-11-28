
# Laravel-React E-Commerce Application

Aceasta este o aplicație de tip e-commerce construită utilizând **Laravel** pentru backend și **React** pentru frontend. Aplicația include funcționalități precum gestionarea utilizatorilor (CRUD), autentificare, și un dashboard pentru administratori. Proiectul este structurat pentru a servi ca bază pentru dezvoltări ulterioare în aplicații e-commerce.

---

## Caracteristici

- **Backend Laravel**:
  - Gestionarea utilizatorilor (CRUD complet): creare, citire, actualizare și ștergere.
  - Autentificare utilizatori prin **Sanctum**.
  - Validare robustă a datelor utilizatorilor utilizând `StoreUserRequest` și `UpdateUserRequest`.
  - Structură RESTful pentru API.

- **Frontend React**:
  - Dashboard administrativ care afișează toți utilizatorii înregistrați într-un tabel.
  - Funcționalitate "Add New User" pentru a adăuga utilizatori noi printr-un formular.
  - Routing configurat cu `react-router-dom`.
  - Utilizare Axios pentru apeluri API.

---

## Tehnologii folosite

### Backend:
- **Laravel** 10
- **Sanctum** pentru autentificare API
- **Eloquent** pentru interacțiunea cu baza de date
- **Laravel Resources** pentru formatarea răspunsurilor API
- **Validări personalizate** utilizând `FormRequest`
- **XAMPP** pentru serverul MySQL al bazei de date

### Frontend:
- **React** (Vite)
- **Axios** pentru cereri HTTP
- **React Router** pentru gestionarea rutelor frontend
- **CSS** pentru stilizare

---

## Structura proiectului

### Backend:
1. **Rute**:
   - Definite în `routes/api.php`, toate protejate de middleware-ul `auth:sanctum`, cu excepția rutelor `login` și `register`.

2. **Controller**: 
   - `UserController`:
     - `index()`: Returnează o listă de utilizatori.
     - `store()`: Creează un utilizator nou.
     - `update()`: Actualizează informațiile unui utilizator.
     - `destroy()`: Șterge un utilizator.

3. **Validare**:
   - `StoreUserRequest` și `UpdateUserRequest` pentru validarea datelor înainte de salvare.

4. **Autentificare**:
   - `AuthController` pentru login și logout.

5. **Bază de date**:
   - Am folosit **XAMPP** pentru a rula baza de date MySQL.
   - Tabela `users` a fost creată utilizând comanda:
     ```bash
     php artisan migrate
     ```

### Frontend:
1. **Dashboard**:
   - Afișează un tabel cu utilizatorii existenți (nume, email, etc.).
   - Opțiuni pentru editare și ștergere utilizatori.

2. **Formular de utilizator**:
   - Permite adăugarea unui utilizator nou sau actualizarea unui utilizator existent.
   - Validări și feedback pentru erorile de la backend.

3. **Structură foldere**:
   - `views/`: Componente pentru paginile principale (`Users.jsx`, `UserForm.jsx`).
   - `components/`: Componente reutilizabile (`DefaultLayout.jsx`, `GuestLayout.jsx`).
   - `contexts/`: Gestionarea contextelor (ex. autentificare).

4. **Axios**:
   - Configurat în `axiosClient.js` pentru a adăuga automat token-ul JWT la fiecare cerere API.

---

## Cum să rulezi aplicația

### Backend:
1. Clonează proiectul:
   ```bash
   git clone https://github.com/luvonfaia/laravel-react-ecommerce.git
   cd laravel-react-ecommerce
   ```
2. Instalează dependențele:
   ```bash
   composer install
   ```
3. Configurează `.env`:
   - Asigură-te că baza de date este configurată corect (folosind **XAMPP**):
   ```plaintext
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=ecommerce
   DB_USERNAME=root
   DB_PASSWORD=
   ```
4. Rulează migrațiile:
   ```bash
   php artisan migrate
   ```
5. Pornește serverul:
   ```bash
   php artisan serve
   ```

### Frontend:
1. Instalează dependențele:
   ```bash
   cd laravel_react_ecommerce
   npm install
   ```
2. Rulează aplicația:
   ```bash
   npm run dev
   ```

---
