@echo off
echo ========================================
echo Ulapp Website - Commit and Deploy
echo ========================================
echo.

echo Adding all files to git...
git add .

echo.
echo Committing changes...
git commit -m "Complete MVP: Add case studies, about, and thank you pages"

echo.
echo Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo Deployment initiated!
echo ========================================
echo.
echo Netlify will automatically build and deploy your site.
echo Check your Netlify dashboard for deployment status.
echo.
echo Your site will be live in 1-2 minutes at your Netlify URL.
echo.
pause
