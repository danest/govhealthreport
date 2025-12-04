# Unsplash API Integration

This document covers the Unsplash API setup and usage.

## API Credentials

```
Access Key: uh4xP7NT0xQkcJv50Y1mMz33kiDeTanZ6z0P2R-tQgk
Secret Key: bNCpnPz8VBxLw9iVLgjolFBaFIL54zfCCBbPJvVvbhM
```

## Usage Methods

### 1. Direct Image URLs (Recommended for Static Images)

Use direct Unsplash image URLs with standard `<img>` tags (not Next.js Image component):

```html
<img
  src="https://images.unsplash.com/photo-1626148749358-5b3b3f45b41a?w=800&q=80&fit=crop&crop=center"
  alt="Description"
  loading="lazy"
/>
```

### 2. URL Parameters

- `w` - Width (e.g., `w=1920` for full-width, `w=600` for thumbnails)
- `q` - Quality (e.g., `q=80` for 80% quality)
- `fit` - Fit mode (e.g., `fit=crop`)
- `crop` - Crop position (e.g., `crop=center`)

Example with parameters:
```
https://images.unsplash.com/photo-1626148749358-5b3b3f45b41a?w=800&q=80&fit=crop&crop=center
```

### 3. API Usage (For Dynamic Image Fetching)

If you need to fetch images dynamically via the API:

```typescript
const UNSPLASH_ACCESS_KEY = "uh4xP7NT0xQkcJv50Y1mMz33kiDeTanZ6z0P2R-tQgk";

// Search for images
async function searchUnsplashImages(query: string, perPage: number = 10) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    }
  );

  const data = await response.json();
  return data.results;
}

// Get a random image
async function getRandomImage(query?: string) {
  const url = query
    ? `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}`
    : `https://api.unsplash.com/photos/random`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    },
  });

  return response.json();
}
```

## Important Notes

- **Use `<img>` tags**: Do not use Next.js `<Image>` component for Unsplash images. Use standard HTML `<img>` tags instead.
- **Add `loading="lazy"`**: For performance, add lazy loading to images below the fold.
- **Attribution**: When required, include photographer attribution per Unsplash guidelines.
