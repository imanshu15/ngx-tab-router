export class NgxTabConfig {
    components: NgxTabComponents[];
    initialComponents: NgxTabModel[];
    reloadOnTabChange?: boolean;
}

export class NgxTabComponents {
    key: string;
    component: any;
    title: string;
    description?: string;
}

export class NgxTabModel {
    tabKey: string;
    isDisable?: boolean;
}
