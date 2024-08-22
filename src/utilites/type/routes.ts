export interface Route {
    path: string;
    title: string;
}
export interface SocialRoute extends Route {
    icon: React.ReactNode;
}
export interface BrandList {
    title: string;
    src: string;
}
