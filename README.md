# Isaías Monarrez-Ayala — Portfolio Website

Professional portfolio site: [isaiasmonarrezayala.github.io](https://isaiasmonarrezayala.github.io)

## Deploying to GitHub Pages (Step-by-Step)

### 1. Create the GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Set **Repository name** to exactly: `isaiasmonarrezayala.github.io`
3. Set visibility to **Public**
4. Do NOT check "Add a README file" (we already have one)
5. Click **Create repository**

### 2. Upload Files (Option A — GitHub Web Interface)

This is the simplest method if you are not familiar with Git.

1. Open your new repository at `github.com/isaiasmonarrezayala/isaiasmonarrezayala.github.io`
2. Click **"uploading an existing file"** on the Quick Setup page
3. Drag and drop ALL of these files/folders from the `portfolio` folder on your USB drive:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/` folder (contains `headshot.jpg` and `resume.pdf`)
   - `README.md`
4. Type a commit message like "Initial portfolio upload"
5. Click **Commit changes**

### 2. Upload Files (Option B — Git Command Line)

If you have Git installed:

```bash
# Navigate to the portfolio folder on your USB drive
cd /Volumes/KINGSTON/portfolio

# Initialize Git
git init
git add .
git commit -m "Initial portfolio upload"

# Connect to GitHub and push
git remote add origin https://github.com/isaiasmonarrezayala/isaiasmonarrezayala.github.io.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. In your repository, go to **Settings** > **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Set branch to **main** and folder to **/ (root)**
4. Click **Save**

### 4. Visit Your Site

Your site will be live within 1-2 minutes at:

**https://isaiasmonarrezayala.github.io**

## Updating Your Site

To update content in the future, edit the files and push the changes (or re-upload via the web interface). GitHub Pages will automatically redeploy.

## File Structure

```
portfolio/
├── index.html          # Main HTML page
├── styles.css          # All styles and animations
├── script.js           # Animations, counters, navigation
├── README.md           # This file
└── assets/
    ├── headshot.jpg    # Professional headshot
    └── resume.pdf      # Downloadable resume
```
