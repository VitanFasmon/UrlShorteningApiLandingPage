
# Link Shortener

A URL shortening application built with **React**, **TypeScript**, and **Zustand** for state management. This app allows users to input long URLs and get shortened versions. It also saves the URLs in local storage and retrieves them when needed.

## Features

- **URL Shortening**: Users can enter a URL, and the app will generate a shortened version using an external API.
- **Local Storage**: All shortened URLs are saved in the browser's local storage, so they persist across sessions.
- **Responsive Design**: The app adapts to mobile and desktop screen sizes using conditionally loaded assets.
- **State Management**: Uses **Zustand** for managing and updating the list of shortened URLs.

## Technologies Used

- **React**: For building the UI components.
- **TypeScript**: To provide type safety and development efficiency.
- **Zustand**: Lightweight state management for managing the list of shortened links.
- **Local Storage**: For persisting shortened URLs across sessions.
- **Tailwind CSS**: For styling and creating responsive layouts.
- **URL Shortener API**: `cleanuri.com` to generate shortened links.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VitanFasmon/UrlShorteningApiLandingPage.git
   cd UrlShorteningApiLandingPage
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm start
   ```

   The app will run locally at `http://localhost:3000`.


# IMPORTANT! CORS Anywhere Setup

## Why use CORS Anywhere?

This project relies on the CORS Anywhere service to bypass the CORS policy restrictions when making API requests to third-party services like the CleanURI API. Since the CleanURI API does not include the required `Access-Control-Allow-Origin` header, we use the CORS Anywhere proxy to allow requests from the browser.

Without this, you might encounter an error like:

```javascript
Error: Error: Unexpected token 'S', "See /corsd"... is not valid JSON
```

This error happens because the browser blocks the response from the CleanURI API due to the CORS policy, and a partial message is returned.

## How to Request Access to CORS Anywhere

Before using the app locally, you must go to the CORS Anywhere demo server and request temporary access:

1. Visit the following URL:  
   [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo)

2. Click on the **"Request temporary access to the demo server"** button.

3. Once access is granted, the app will be able to make API requests via the proxy.

If you skip this step, the app will fail to shorten URLs due to the CORS policy restrictions.

## Usage

### Shortening a Link

1. **Enter a URL**: On the main page, enter a valid URL in the input field.
2. **Click 'Shorten It!'**: This triggers the API to shorten the URL.
3. **View Shortened Links**: After shortening, the URL is displayed below the input form, and the original and shortened links are stored locally.

### Persisting Shortened Links

- The app saves all shortened URLs in the browser's **local storage**.
- When you reload the page, it will automatically load previously saved URLs using `setLinksFromLocalStorage()`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
