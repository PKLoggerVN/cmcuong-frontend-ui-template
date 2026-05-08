/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com', // TODO: Replace with your actual site URL
  generateRobotsTxt: true, // (optional)
  transform: async (config, path) => {
    // Get current date or use a specific date logic if available
    const date = new Date()

    // Offset for GMT+7 in milliseconds (7 hours * 60 minutes * 60 seconds * 1000 ms)
    const offset = 7 * 60 * 60 * 1000

    // Create a new date object adjusted to GMT+7
    // Note: We want the string representation to reflect GMT+7, but standard Date methods use local or UTC.
    // A reliable way for sitemaps is to construct the ISO-like string manually or use libraries.
    // Since we want to avoid extra deps if possible, we'll format it manually.

    // Better approach: use Intl or manual formatting.
    // Let's keep it simple: manual string construction to ensure +07:00 format.

    const pad = (n) => n.toString().padStart(2, '0')
    // Get components in UTC (which is the server time usually)
    // Actually, to display GMT+7, we take the UTC time, add 7 hours, and then print that as if it were local, appended with +07:00.

    const d = new Date(date.getTime() + offset)
    const year = d.getUTCFullYear()
    const month = pad(d.getUTCMonth() + 1)
    const day = pad(d.getUTCDate())
    const hours = pad(d.getUTCHours())
    const minutes = pad(d.getUTCMinutes())
    const seconds = pad(d.getUTCSeconds())

    const lastmod = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+07:00`

    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreqDaily,
      priority: config.priority,
      lastmod: lastmod,
      alternateRefs: config.alternateRefs ?? [],
      trailingSlash: config.trailingSlash,
    }
  },
}
