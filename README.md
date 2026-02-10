# 🚩 Zohran Watch

**A working-class accountability tracker for Mayor Zohran Mamdani's campaign promises.**

Holding power accountable. Tracking all 14 major policy commitments from NYC's historic 2025 mayoral victory.

🔗 **[Live Site](https://yourusername.github.io/zohran-watch)** (update with your GitHub Pages URL)

---

## 📋 About

Zohran Watch is an independent, community-built accountability tracker created by organizers and activists who believe electoral politics only matters if we hold elected officials accountable after the votes are counted.

We're not neutral. We're partisans for the working class. We built this because we believe in these policies, we fought for this victory, and we'll fight to make sure these promises become reality.

### What We Track

- **14 Campaign Promises** across 7 policy areas
- **Real-time progress** with transparent status updates
- **Category-level tracking** for Housing, Transit, Childcare, Food, Wages, Taxes, and Governance
- **Live updates** from @NYCMayor

---

## ✨ Features

### Tracking Interface
- **Hero Section** with live countdown to end of term
- **Overall Progress Bar** showing % of promises delivered
- **Category Progress** for each policy area (Housing, Transit, etc.)
- **Advanced Filtering** by status and category
- **Search Functionality** to find specific promises
- **Promise Cards** with detailed descriptions and status badges
- **News Feed** for tracker updates

### About Page
- **Platform Overview** from a working-class perspective
- **Why This Matters** — explicit statement of our values
- **Who Opposes This** — naming the real opposition (landlords, corporations, Wall Street)
- **Twitter Feed Integration** showing live @NYCMayor updates
- **Tracker Story** and contact information

### Status Types
- **Delivered** ✅ — Promise fully implemented
- **In Progress** 🔄 — Actively being worked on
- **Pending** ⏳ — Not yet started, awaiting action
- **Blocked** 🚫 — Facing obstacles or opposition
- **Compromised** ⚠️ — Partially implemented with modifications
- **TBD** ❓ — Status unclear or under evaluation

---
## 🚀 Quick Start

### Option 1: GitHub Pages (Easiest)
1. Fork this repository
2. Go to Settings → Pages
3. Select "Deploy from branch" → `main` → `/root`
4. Your site will be live at `https://yourusername.github.io/zohran-watch`

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/zohran-watch.git
cd zohran-watch

# Open in browser
open index.html
# or on Linux:
xdg-open index.html
```

That's it! No build process, no dependencies. Just HTML, CSS, and vanilla JavaScript.

---

## 📝 Customization

### Update Promise Statuses
Edit the `promises` array in `index.html` (around line 900):

```javascript
{
    id: 1,
    category: 'housing',
    title: 'Rent Freeze',
    description: 'Implement a citywide rent freeze...',
    status: 'pending',  // Change this!
    lastUpdate: 'February 9, 2026'  // Update this!
}
```

### Add News Updates
Add items to the `#newsFeed` div:

```html
<div class="news-item">
    <div class="news-date">March 15, 2026</div>
    <div class="news-title">Rent Freeze Passes City Council</div>
    <div class="news-content">Historic victory for tenants...</div>
</div>
```

### Customize Colors
Edit CSS variables in `<style>` section:

```css
:root {
    --red: #FF3B30;    /* Solidarity red */
    --blue: #0051D5;   /* Working class blue */
    --cream: #FFF8DC;  /* Paper stock */
    --black: #1A1A1A;  /* Ink */
}
```

---

## 🤝 Contributing

We welcome contributions from organizers, activists, and community members!

### How to Contribute
1. **Track Promise Updates:** Submit issues with evidence of status changes
2. **Add News Items:** PR with updates to the news feed
3. **Report Bugs:** Open an issue with details
4. **Design Improvements:** PRs welcome (keep the protest poster aesthetic!)
5. **Documentation:** Help improve this README

### Contribution Guidelines
- Cite sources for all promise status updates
- Maintain the leftist framing and working-class perspective
- Keep the protest poster aesthetic intact
- No corporate sponsorships or partnerships
- This is a community project — we answer to the people, not politicians

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

This is free software built by and for the working class. Fork it, remix it, use it for your local campaigns.

---

## 🔗 Links

- **Live Site:** [zohranwatch.org](https://yourusername.github.io/zohran-watch)
- **Report Issues:** [GitHub Issues](https://github.com/yourusername/zohran-watch/issues)
- **Submit Feedback:** feedback@zohranwatch.org

---

## ✊ Solidarity

*Power concedes nothing without a demand.*  
*The people united will never be defeated.*  
*Solidarity forever.*

Built with ❤️ by organizers, for the movement.

---

## 🙏 Credits

- Inspired by [Project 2025 Observer](https://www.project2025.observer/)
- Design influenced by NYC labor movement history
- Fonts: [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) & [Courier Prime](https://fonts.google.com/specimen/Courier+Prime)
- Twitter integration via [Twitter for Websites](https://developer.twitter.com/en/docs/twitter-for-websites)

---

**Not affiliated with any political campaign or organization. We answer to the people.**
