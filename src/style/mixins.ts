import breakpoints from './breakpoints'
import variables from "./variables";
import typography from "./typography";
import colors from "./colors";

export const fontSize: (size: number) => string = (size) => {
    return (<any>typography)[`font${size}`]
}

export const color: (value: number) => string = (value) => {
    return (<any>colors)[`color${value}`]
}

export const mediaBreakpointUp: (breakpoint: string) => string = (breakpoint) => {
    return `@media(min-width: ${(<any>breakpoints)[breakpoint]})`
}

export const mediaBreakpointDown: (breakpoint: string) => string = (breakpoint) => {
    return `@media(max-width: ${(<any>breakpoints)[breakpoint]})`
}

export const vw: (value: number, screenWidth?: number) => string = (value, screenWidth = 1920) => {
    return `${value / screenWidth * 100}vw`
}

export const vh: (value: number, screenHeight?: number) => string = (value, screenHeight = 1080) => {
    return `${value / screenHeight * 100}vh`
}

export const cols: (value: number) => string = (value) => {
    return `${variables.col * value}vw`
}
