import {InjectionToken} from "@angular/core";

// Use object instead of string to avoid conflicts
export let TOASTR_TOKEN = new InjectionToken('toastr');

export interface Toastr {
    success (mst: string, title?: string): void;

    info (msg: string, title?: string): void;

    warning(msg: string, title?: string): void;

    error(msg: string, title?: string): void;
}