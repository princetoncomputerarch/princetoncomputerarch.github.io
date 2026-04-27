# NY Architecture and Systems Day 2026 — Site

Jekyll-based event website for NYASD 2026 at Princeton University.
All content lives in plain-text YAML files in `_data/` — edit those,
no coding required.

---

## Editing content (the only thing you need to know)

Open the files in `_data/` in any text editor. Each one controls one
section of the page:

| File | What it controls |
|------|------------------|
| `_config.yml`         | Site title, **brand color**, logo, top-right nav link |
| `_data/hero.yml`      | Big title, hosted-by line, date/time/location quick-look |
| `_data/intro.yml`     | The "Scope" section paragraphs |
| `_data/calls.yml`     | Call for Papers + Tool Talks (currently **disabled**) |
| `_data/schedule.yml`  | The schedule table |
| `_data/keynotes.yml`  | Keynote speaker(s) |
| `_data/students.yml`  | Student presentations grouped by session |
| `_data/rsvp.yml`      | RSVP form link |
| `_data/people.yml`    | Organizers + program committee (PC currently disabled) |
| `_data/location.yml`  | Venue address and travel directions |
| `_data/footer.yml`    | The footer columns |

Photos go in `assets/img/`. Reference them by filename only —
e.g. `photo: "speaker1.jpg"`.

### Showing or hiding sections

Several sections have an `enabled:` toggle in their YAML file:

- `_data/calls.yml` — `papers.enabled` and `tool_talks.enabled` (both `false`)
- `_data/people.yml` — `pc.enabled` (currently `false`)
- `_data/rsvp.yml` — `enabled` (currently `true`)

Flip them to show/hide the section without touching any code.

### Changing the brand color

The current brand color is **Princeton Orange `#E77500`**. To change it,
edit one line in `_config.yml`:

```yml
brand_color: "#E77500"
brand_color_hover: "#c96400"
```

That single value drives the headline, section titles, table header,
links, RSVP button, and section dividers.

---

## Running locally (optional)

You don't need to run it locally — push to GitHub Pages and it builds
automatically. But if you want to preview before pushing:

```bash
gem install bundler
bundle install
bundle exec jekyll serve --livereload
# open http://localhost:4000
```

---

## Hosting on GitHub Pages

1. Create a repo on GitHub (e.g. `your-org/nyasd2026`).
2. Push this folder to the repo.
3. **Settings → Pages → Source: Deploy from a branch → `main` / root**.
4. In `_config.yml`, set:
   ```yml
   url: "https://YOUR-ORG.github.io"
   baseurl: "/nyasd2026"     # the repo name, with a leading slash
   ```
   For a custom domain (e.g. `nyasd2026.princeton.edu`), leave both blank.
5. Wait a minute, then visit your site.

---

## Folder structure

```
.
├── _config.yml                 ← top-level site settings
├── _data/                      ← ALL editable content lives here
│   ├── hero.yml
│   ├── intro.yml
│   ├── calls.yml
│   ├── schedule.yml
│   ├── keynotes.yml
│   ├── students.yml            ← student presentations
│   ├── rsvp.yml                ← RSVP form
│   ├── people.yml
│   ├── location.yml            ← venue + directions
│   └── footer.yml
├── _layouts/default.html       ← base HTML wrapper (rarely edit)
├── _includes/header.html       ← top nav (rarely edit)
├── _includes/footer.html       ← footer (rarely edit)
├── index.html                  ← page template (rarely edit)
├── assets/
│   ├── css/style.css           ← styling — edit colors / layout here
│   ├── js/theme.js             ← dark-mode toggle
│   └── img/                    ← put speaker / organizer photos here
├── Gemfile                     ← Jekyll dependencies
└── README.md                   ← this file
```
