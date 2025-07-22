# Medusa Next.js Storefront

This project is a basic storefront built with Next.js and Medusa. It serves as a starting point for creating an e-commerce application.

## Project Structure

```
medusa-nextjs-storefront
├── pages
│   ├── index.tsx          # Homepage displaying featured products
│   ├── _app.tsx           # Custom App component for global providers and styles
│   └── products
│       └── [id].tsx       # Dynamic route for individual product details
├── components
│   ├── Header.tsx         # Header component with navigation links
│   └── ProductCard.tsx    # Component for displaying product information
├── lib
│   └── medusa.ts          # Functions to interact with the Medusa backend API
├── public                 # Directory for static assets
├── package.json           # npm configuration file
└── tsconfig.json          # TypeScript configuration file
```

## Getting Started

To get started with the Medusa Next.js Storefront, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd medusa-nextjs-storefront
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the Medusa backend:**
   Ensure you have a Medusa backend running. You can follow the Medusa documentation for setup instructions.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to view your storefront.

## Features

- Dynamic product pages
- Responsive design
- Easy integration with Medusa backend

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.