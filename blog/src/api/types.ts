export interface AddressResponse {
    data: AddressData;
    meta: any;
}

interface AddressData {
    id: number;
    attributes: AddressAttributes;
}

interface AddressAttributes {
    address: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    map: MapDataContainer;
}

interface MapDataContainer {
    data: MapData;
}

interface MapData {
    id: number;
    attributes: MapAttributes;
}

interface MapAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: MapFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: ProviderMetadata;
    createdAt: string;
    updatedAt: string;
}

interface MapFormats {
    small: ImageFormat;
    thumbnail: ImageFormat;
    medium: ImageFormat;
    large: ImageFormat;
}

interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    url: string;
    provider_metadata: ProviderMetadata;
}

interface ProviderMetadata {
    public_id: string;
    resource_type: string;
}

export interface BlogsResponse {
    data: BlogEntry[];
    meta: MetaData;
}

interface BlogEntry {
    id: number;
    attributes: BlogAttributes;
}

interface BlogAttributes {
    title: string;
    excerpt: string;
    fullText: string;
    date: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: ImageDataContainer;
}

interface ImageDataContainer {
    data: ImageData[];
}

interface ImageData {
    id: number;
    attributes: ImageAttributes;
}

interface ImageAttributes extends MapAttributes {
    // Inherits all fields from MapAttributes
}

interface MetaData {
    pagination: Pagination;
}

interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
