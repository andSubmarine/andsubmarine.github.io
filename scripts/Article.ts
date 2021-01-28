export interface Article {
    slug: string,
    createdAt: string,
    updatedAt: string,
    published?: string,
    title?: string,
    description?: string,
    url?: string,
    alt?: string,
    tags?: Array<string>
}
