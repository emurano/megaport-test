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


