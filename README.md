# Images Directory

Add your business photos here. Suggested images:

## Required/Recommended

- `hero.jpg` - Hero section background (1200x600px recommended)
- `service-exterior.jpg` - Exterior cleaning service image
- `service-interior.jpg` - Interior cleaning service image
- `service-screens.jpg` - Screen cleaning service image
- `service-commercial.jpg` - Commercial service image
- `service-gutters.jpg` - Gutter cleaning image
- `service-pressure.jpg` - Pressure washing image
- `testimonial-1.jpg` - Customer photo (100x100px for testimonials)

## Notes

- Use JPG or PNG format
- Optimize for web (compress images before uploading)
- Recommended sizes: 1200x800px for hero, 400x300px for services
- All images should be properly licensed (your own or stock photos)

To use images in components, update the import paths and reference them:

```jsx
<Image
  src="/images/hero.jpg"
  alt="Description"
  width={1200}
  height={600}
/>
```

Currently, all images are optional - the site works with placeholders.
