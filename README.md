# UK Cigarette Brands — Quick Reference

A single-page web reference for UK cigarette brands, covering variants, strengths, pack colours, and what to suggest when a product is out of stock.

## Features

- Brand cards organised by price tier (Premium, Mid-Price, Value/Budget)
- Strength indicators with colour-coded bars
- Interactive SVG pie chart showing UK market share
- Out-of-stock alternative suggestions for each brand
- Pack colour → strength guide
- Responsive layout for mobile and desktop

## Usage

Serve the files with any static HTTP server, e.g.:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Files

| File | Description |
|------|-------------|
| `index.html` | Page structure and content |
| `styles.css` | All styling |
| `script.js` | Pie chart rendering |
