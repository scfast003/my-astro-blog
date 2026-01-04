# Environment Variables

This project uses the following environment variables:

## Required Variables

Currently, no required environment variables are needed for basic functionality.

## Optional Variables

### Analytics (optional)
If you want to add analytics tracking:
- `PUBLIC_ANALYTICS_ID` - Your analytics tracking ID

### API Keys (optional)
If you integrate with external services:
- Add your API keys here as needed

## How to Use

1. Create a `.env` file in the root directory
2. Add your environment variables following the format:
   ```
   PUBLIC_ANALYTICS_ID=your_id_here
   ```
3. Never commit the `.env` file to version control

## Notes

- Variables prefixed with `PUBLIC_` are exposed to the client-side code
- Variables without the prefix are only available on the server-side
- See [Astro Environment Variables](https://docs.astro.build/en/guides/environment-variables/) for more details
