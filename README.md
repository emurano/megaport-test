# Eric Murano's Megaport Take-home Test

## Getting the app running

 1. Copy `.env.local-template` to `env.local` and paste in your Supabase URL and Token
   ```
   VITE_SUPABASE_URL=https://xxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=xxxx

   ```
 2. Install the dependencies
   ```shell
   npm ci
   ```

 3. Run the application in dev mode
   ```shell
   npm run dev
   ```

 4. Access the application in your browser. The URL should be `http://localhost:5173/` but check the terminal where you ran `npm run dev` to see what the URL is for you.


## Features Completed

✅ List all the MVEs from the mve_images table
✅ Allow the user to sort the MVE list by name or description in ascending or descending direction
✅ Allow the user to filter the MVE list which matches against the name or description
✅ Allow the user to show the related input field definitions for any MVE Image from the fields table
❌ The user should be able to add and delete input field definitions
✅ The user should be able to select an input field definition and input some test data and validate whether it would be accepted
✅ Include at least one unit test using a test framework like Jest or Vitest

## Assumptions

 - min_width, max_width, and regex aren't relevant to number fields
 - mix_value and max_value aren't relevant to string fields

## Possible Improvements

 - I could have more specific error boundaries. Some components throw errors but the nearest error boundary is the global one
 - More cohesive UI usage. I am used to using a custom UI library built specifically for the project, so I do not have experience with Mui. I'd have to learn how to use Mui better
 - Split everything u into pages, using React Router for routing and URL deep linking
 - User-triggered reloading. Right now React Query will automatically refetch when a query's stale time elapses
