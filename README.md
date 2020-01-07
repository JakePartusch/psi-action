# Page Speed Insights — A GitHub Action 🏎

This action utilizes [Google's Page Speed Insights](https://developers.google.com/speed/docs/insights/v5/about) to generate a report on your website's performance

## Inputs

### `url`

**Required** The name of the site to reach `https://google.com`

## Example usage

Basic Usage

```yaml
steps:
  - name: Running Page Speed Insights
    uses: jakepartusch/psi-action@v1
    id: psi
    with:
      url: "https://jake.partus.ch"
```
