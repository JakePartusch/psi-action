# Page Speed Insights — A GitHub Action 🏎

This action utilizes [Google's Page Speed Insights](https://developers.google.com/speed/docs/insights/v5/about) to generate a report on your website's performance

<p align="center"><img src="https://raw.githubusercontent.com/JakePartusch/psi-action/master/screenshots/screenshot-output.png" alt="Example command line output" width="600"></p>

## Inputs

### `url`

**Required** The name of the site to reach `https://google.com`

### `strategy`

Optional — Strategy to use when analyzing the page (mobile/desktop).

### `threshold`

Optional — Score to pass the PageSpeed test. Useful for setting a performance budget (default 70).

## Example usage

Basic Usage

```yaml
steps:
  - name: Running Page Speed Insights
    uses: jakepartusch/psi-action@v1.1
    id: psi
    with:
      url: "https://jake.partus.ch"
      threshold: 70
      strategy: mobile
```
