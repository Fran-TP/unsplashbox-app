# UnsplashBox

## Overview

UnsplashBox is a web application that allows users to search and view photos from Unsplash. Users can browse through different collections, view individual photos, and load more photos as they scroll.

## Video Demo

![Demo](https://private-user-images.githubusercontent.com/171998816/410259237-1a8ad90e-45ae-4713-8b77-0ffa24a2df3d.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg4MDg0MDYsIm5iZiI6MTczODgwODEwNiwicGF0aCI6Ii8xNzE5OTg4MTYvNDEwMjU5MjM3LTFhOGFkOTBlLTQ1YWUtNDcxMy04Yjc3LTBmZmEyNGEyZGYzZC5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIwNlQwMjE1MDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMmY3ZGIwZTNjNTgzNGZiNzU1ZjhhNGU4MTM0Zjc2Yjg0MmEyMjAzZjJjYzRlZWY0NjY0MTAzYWU3ZTg4MDQwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ZgD712qMmOFP-UJ0fC4fmnAJQsy0ZOnWlgzFPziMK5c)

## Features

- Search for photos by query
- Infinite scrolling to load more photos
- View photo details
- Responsive design

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Unsplash API
- React Router
- Intersection Observer API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Fran-TP/unsplashbox-app.git
   cd unsplashbox-app
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Create a `.env` file in the root directory and add your Unsplash API access key:
   ```env
   UNSPLASH_API_ACCESS_KEY=your_access_key
   UNSPLASH_API_SECRET_KEY=your_secret_key
   UNSPLASH_API_APP_ID=your_app_id
   ```
4. Start the development server:
   ```bash
   pnpm dev
   ```
