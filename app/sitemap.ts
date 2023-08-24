import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://harperfoley.com"

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/#about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/#experience`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/#skills`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/#projects`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/#contact`,
            lastModified: new Date(),
        },
        {
            url: 'mailto:harper@rainierdigitalsolution.com',
            lastModified: new Date(),
        },
        {
            url: 'https://rainierdigitalsolutions.com',
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/#experience`,
            lastModified: new Date(),
        },
    ]
}