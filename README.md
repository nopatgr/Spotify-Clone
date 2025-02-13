# React + Vite

Pastikan anda sudah menginstal software dibawah ini:

- <b>Node.Js<b> Download [https://nodejs.org/id]

Untuk memastikan nya jalankan perintah berikut diterminal:

  ```
    node -v
    npm -v
   ```

## Membuat Proyek dengan vite 

``` npm create vite@latest ```

Kemudian pilih opsi:
- Framework ```React```
- Masuk ke directori projek:<hr>
```cd Sporty```
- Instal dependensi projek:<hr>
```npm install```

### Menginstall Talwind CSS 

```
npm install -D tailwindcss postcss autoprefixer
npm tailwindcss init -p
```

Konfigurasi file ```tailwind.config.js```

Ganti isi file dengan :<hr>
```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
Tambah direktif Tailwind ke file ```src/index.css```
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Menjalankan Projek  

``` npm run dev```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh