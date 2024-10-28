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


## Time Log

- 2024-10-24 Friday
    - 9:50pm - 10:03pm - Create and setup project
- 2024-10-27 Sunday
    - 5:33pm - 6:05pm
        - Create component that will render MVE records
        - Add hook for loading MVE records
        - Hook for supabase client
    - 8:45pm - 9:29pm
        - Load MVE Images list hook
        - Create full page error fallback for the app when errors occur
        - Create page component
    - 9:37pm - 10:33pm
        - Format mve images in a list
    - 10:33pm - 11:12pm
        - Display the MVE image fields when the user expands the card
        - Add context for supabase client (turns out we needed one)
- 2024-10-28 Monday
    - 5:48pm - 6:37pm
        - Add sorting to MVE list
    - 6:37pm - 7:01pm
        - Add Filtering to MVE list
    - 7:17pm - 8:06pm
        - Format fields under image
    - 10:03pm - 12:25am
        - Format fields under image
        - Add test data validation
        - Add tests


