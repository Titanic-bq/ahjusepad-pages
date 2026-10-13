# Ahjusepa pood — GitHub Pages

This repository contains a static version of the Ahjusepad storefront.

## Publish

1. Create a new **public** GitHub repository, for example `ahjusepad-pages`.
   Do not initialize it with a README, license, or `.gitignore`.
2. In this folder, run these commands in PowerShell, replacing
   `YOUR-USERNAME/ahjusepad-pages` with the new repository address:

   ```powershell
   git add .
   git commit -m "Prepare static Ahjusepad storefront"
   git remote add origin https://github.com/YOUR-USERNAME/ahjusepad-pages.git
   git push -u origin github-pages-static
   ```

3. In GitHub, open **Settings → Pages** and set **Build and deployment →
   Source** to **GitHub Actions**.
4. Open **Actions** and wait for **Deploy static storefront to GitHub Pages**
   to complete successfully.
5. Copy the published URL from **Settings → Pages** and share it with the
   company. Visitors do not need GitHub accounts.

## Limitations

GitHub Pages does not run the Java backend. Products, search, and filters work
in the browser. The enquiry form opens the visitor's email app with a
pre-filled message to `sales@ahjusepad.ee`; the visitor must send it. The site
does not send or store enquiries by itself.
