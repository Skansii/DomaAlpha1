[00:08:55.266] Cloning github.com/Skansii/doma-saas (Branch: main, Commit: 66daf47)
[00:08:55.478] Previous build caches not available
[00:08:58.604] Cloning completed: 3.338s
[00:08:58.942] Running build in Washington, D.C., USA (East) – iad1
[00:08:59.117] Running "vercel build"
[00:08:59.490] Vercel CLI 41.4.1
[00:08:59.816] Installing dependencies...
[00:09:08.424] npm warn deprecated @mui/base@5.0.0-beta.70: This package has been replaced by @base-ui-components/react
[00:09:18.060] 
[00:09:18.062] added 412 packages in 18s
[00:09:18.062] 
[00:09:18.063] 153 packages are looking for funding
[00:09:18.063]   run `npm fund` for details
[00:09:18.131] Detected Next.js version: 15.2.3
[00:09:18.132] Running "npm run build:production"
[00:09:18.248] 
[00:09:18.248] > doma-app@0.1.0 build:production
[00:09:18.248] > next build
[00:09:18.249] 
[00:09:18.860] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[00:09:18.861] This information is used to shape Next.js' roadmap and prioritize features.
[00:09:18.861] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[00:09:18.861] https://nextjs.org/telemetry
[00:09:18.861] 
[00:09:18.964]    ▲ Next.js 15.2.3
[00:09:18.966] 
[00:09:19.157]    Creating an optimized production build ...
[00:09:54.592]  ✓ Compiled successfully
[00:09:54.597]    Skipping linting
[00:09:54.598]    Checking validity of types ...
[00:10:03.987] Failed to compile.
[00:10:03.988] 
[00:10:03.988] ./src/app/contact/page.tsx:91:25
[00:10:03.989] Type error: Parameter 'e' implicitly has an 'any' type.
[00:10:03.989] 
[00:10:03.989] [0m [90m 89 |[39m[0m
[00:10:03.989] [0m [90m 90 |[39m   [90m// Handle form input changes[39m[0m
[00:10:03.989] [0m[31m[1m>[22m[39m[90m 91 |[39m   [36mconst[39m handleChange [33m=[39m (e) [33m=>[39m {[0m
[00:10:03.989] [0m [90m    |[39m                         [31m[1m^[22m[39m[0m
[00:10:03.989] [0m [90m 92 |[39m     [36mconst[39m { name[33m,[39m value } [33m=[39m e[33m.[39mtarget[33m;[39m[0m
[00:10:03.990] [0m [90m 93 |[39m     setFormData({[0m
[00:10:03.990] [0m [90m 94 |[39m       [33m...[39mformData[33m,[39m[0m
[00:10:04.015] Next.js build worker exited with code: 1 and signal: null
[00:10:04.038] Error: Command "npm run build:production" exited with 1
[00:10:04.483] 