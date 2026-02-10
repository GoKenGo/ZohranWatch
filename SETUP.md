# 🚀 Setup Guide for Zohran Watch

This guide will walk you through deploying Zohran Watch to GitHub Pages.

## Prerequisites

- A GitHub account (free)
- Basic familiarity with Git (optional, but helpful)

---

## Option 1: Deploy with GitHub Web Interface (Easiest)

### Step 1: Create Your Repository

1. **Create a new repository** on GitHub
   - Go to https://github.com/new
   - Name it: `zohran-watch` (or whatever you prefer)
   - Description: "Accountability tracker for Mayor Zohran Mamdani's campaign promises"
   - Make it **Public** (required for free GitHub Pages)
   - ✅ Check "Add a README file"
   - Click **Create repository**

### Step 2: Upload Files

1. **Download all files** from this project
2. **Navigate to your new repository**
3. **Click "Add file" → "Upload files"**
4. **Drag and drop all files:**
   - `index.html`
   - `README.md` (replace the default one)
   - `LICENSE`
   - `CONTRIBUTING.md`
   - `.gitignore`
   - `.github/` folder with workflows
5. **Commit changes** with message: "Initial commit: Zohran Watch tracker"

### Step 3: Enable GitHub Pages

1. **Go to Settings** (in your repository)
2. **Click "Pages"** (left sidebar)
3. **Under "Source":**
   - Select **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
4. **Click Save**
5. **Wait 1-2 minutes** for deployment

Your site will be live at: `https://yourusername.github.io/zohran-watch`

---

## Option 2: Deploy with Git CLI (For Developers)

### Step 1: Clone and Setup

```bash
# Create new repository on GitHub first, then:

git clone https://github.com/yourusername/zohran-watch.git
cd zohran-watch

# Copy all Zohran Watch files into this directory

git add .
git commit -m "Initial commit: Zohran Watch tracker"
git push origin main
```

### Step 2: Enable GitHub Pages

Follow Step 3 from Option 1 above.

---

## Custom Domain Setup (Optional)

Want to use `zohranwatch.org` instead of `yourusername.github.io/zohran-watch`?

### Step 1: Get a Domain

Purchase a domain from:
- **Namecheap** (recommended, ~$10/year)
- **Google Domains**
- **Cloudflare**

### Step 2: Configure DNS

In your domain registrar's DNS settings, add these records:

```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153

Type: CNAME
Host: www
Value: yourusername.github.io
```

### Step 3: Add CNAME File

1. **Rename `CNAME.template` to `CNAME`**
2. **Edit the file** to contain just your domain:
   ```
   zohranwatch.org
   ```
3. **Commit and push**

```bash
mv CNAME.template CNAME
# Edit CNAME file with your domain
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

### Step 4: Configure in GitHub

1. **Go to Settings → Pages**
2. **Under "Custom domain":**
   - Enter your domain: `zohranwatch.org`
   - Click **Save**
3. **Wait for DNS check** (can take 24 hours)
4. **Enable "Enforce HTTPS"** once DNS is verified

---

## Updating the Tracker

### Update Promise Statuses

1. **Edit `index.html`**
2. **Find the promise in the `promises` array** (around line 900)
3. **Change the status:**
   ```javascript
   {
       id: 1,
       category: 'housing',
       title: 'Rent Freeze',
       status: 'delivered',  // Update this!
       lastUpdate: 'March 1, 2026'  // Update this!
   }
   ```
4. **Commit and push:**
   ```bash
   git add index.html
   git commit -m "Update: Rent freeze delivered"
   git push origin main
   ```

### Add News Items

1. **Edit `index.html`**
2. **Find `<div id="newsFeed">`** (around line 850)
3. **Add a new item:**
   ```html
   <div class="news-item">
       <div class="news-date">March 15, 2026</div>
       <div class="news-title">Your Title</div>
       <div class="news-content">Your content here.</div>
   </div>
   ```
4. **Commit and push**

---

## Troubleshooting

### Site Not Showing Up

- Wait 2-5 minutes after enabling Pages
- Check Settings → Pages for deployment status
- Ensure `index.html` exists in root directory
- Check Actions tab for any deployment errors

### Custom Domain Not Working

- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check that CNAME file contains only your domain name
- Disable and re-enable custom domain in Settings

### Changes Not Appearing

- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Wait 1-2 minutes for GitHub Pages to rebuild
- Check the Actions tab to confirm deployment completed

---

## Maintenance

### Regular Updates

We recommend checking for promise status updates:
- **Weekly** during the first 100 days
- **Bi-weekly** during active policy periods
- **Monthly** for routine tracking

### Community Contributions

Encourage your community to:
- **Report status changes** via GitHub Issues
- **Submit news updates** via Pull Requests
- **Share the tracker** on social media

---

## Security & Privacy

### What This Tracker Collects

- **Nothing.** It's a static HTML site.
- No analytics, no cookies, no tracking
- Twitter widgets may load Twitter's tracking (that's on them)

### Keeping It Secure

- Enable **branch protection** in Settings → Branches
- Require **pull request reviews** for main branch
- Enable **Dependabot alerts** (Settings → Security)

---

## Getting Help

- **Technical Issues:** Open an issue on GitHub
- **Content Questions:** Email feedback@zohranwatch.org
- **Community:** Share in organizing spaces!

---

## Next Steps

1. ✅ Deploy the site
2. ✅ Test all features
3. ✅ Share with your organizing network
4. ✅ Set up a regular update schedule
5. ✅ Build the movement!

**Power to the people. Solidarity forever.**

---

*Need more help? Open an issue and the community will help you out.*
