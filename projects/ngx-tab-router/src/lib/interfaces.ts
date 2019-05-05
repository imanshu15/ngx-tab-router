export interface TabModel {
    title: string;
    tabKey: string;
    isDisable: boolean;
    tabId: number;
}

export class ComponentsConfig {
    key: string;
    component: any;
    title: string;
    description?: string;
}
