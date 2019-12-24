import _EventTarget from './event-target';
declare class WebSocket extends _EventTarget {
    static CONNECTING: number;
    static OPEN: number;
    static CLOSING: number;
    static CLOSED: number;
    onclose: CloseEvent;
    onerror: Event;
    onmessage: MessageEvent;
    onopen: Event;
    constructor(url: string, protocols: string | string[]);
    private _url;
    private _index;
    private _readyState;
    private _bufferedAmount;
    private _closeEventDict;
    send(data: any): void;
    close(code: number, reason: string): void;
    _attachEvents(): void;
    _dispatchMessageEvent(event: any): void;
    _observeProps(): void;
    _observeBinaryType(): void;
    _observeBufferedAmount(): void;
    _observeExtensions(): void;
    _observeProtocol(): void;
    _observeOnEvents(): void;
    _observeReadyState(): void;
    _observeUrl(): void;
    _observeReadOnlyProps(propName: string, defaultValue: number | string, setterCallback?: (val: any) => void): void;
    _defineEventProps(event: Event): Event;
}
export default WebSocket;