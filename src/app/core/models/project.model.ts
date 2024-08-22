export interface Projects {
    projects: Project[];
}

export interface Project {
    id:         number;
    title:      string;
    overview:   string;
    content:    string;
    images:     any[];
    poster:     string;
    date:       Date;
    page:       string;
    repository: string;
    tags:       Tags;
    status:     string;
}

export interface Tags {
    tech: number[];
    tags: any[];
}
