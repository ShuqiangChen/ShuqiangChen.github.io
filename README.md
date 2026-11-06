# ShuqiangChen.github.io

Source for my personal website, <https://shuqiangchen.github.io>, built by GitHub Pages with Jekyll.

## Where to edit

| To change | Edit |
| --- | --- |
| Name, role, photo, email, profile links, notice box | `_config.yml` |
| Tabs under the header | `_data/navigation.yml` |
| About, Research Theme and Research Highlights text | `index.html` |
| Research theme figure | `_includes/research-figure.html` and `assets/js/research-figure.js` |
| Research projects | `_data/projects.yml` |
| Publications | `_data/publications.yml` |
| Teaching | `_data/teaching.yml` |
| Colors, fonts, spacing | `assets/css/style.css` |

Put PDFs in `files/` and images in `images/`. Projects cite papers by their `key` in `publications.yml`, so each citation is written only once.

The pages in `redirects/` keep old project links such as `/portfolio/portfolio-1/` working.

## Run it locally

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.
