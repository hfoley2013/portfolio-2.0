import { MetadataRoute } from 'next'
import { fetchSocials } from '../utils/fetchSocials'
import { Social } from '../typings'

const socialPromise: Promise<Social[] | undefined> = fetchSocials();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://harperfoley.com"

    const socials = await socialPromise;

    const resolvedSocials = socials ? socials : [];

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
        ...resolvedSocials.map(social => ({
            url: social.url,
            lastModified: new Date(),
        })),
    ]
}