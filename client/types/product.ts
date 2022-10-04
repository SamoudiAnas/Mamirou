import { PortableTextBlock } from "@portabletext/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Product {
    _id: string;
    slug: string;
    price: number;
    name: string;
    image: SanityImageSource[];
    description: string;
    details: PortableTextBlock;
    for: string[];
    colors: string[];
}
