export interface MetaTags {
    tags: Tags[];
}

export interface Tags {
    id:      number;
    content: Tag[];
}

export interface Tag {
    name?:     string;
    content:   string;
    property?: string;
}
