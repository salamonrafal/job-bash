export interface IAppContainerProps {
    
}

export interface IAppContainerState {
    lines: string[];
    line: string;
    user: string;
    domain: string;
    bashPrefix: string;
    inputMode: boolean;
    inputValue: string;
    inputCmdServiceName: string;
}