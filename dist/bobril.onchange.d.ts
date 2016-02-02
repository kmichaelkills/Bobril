interface ISelectionChangeEvent {
    startPosition: number;
    // endPosition tries to be also caret position (On IE it is just estimated)
    endPosition: number;
}

interface IBobrilComponent {
    // called on input element after any change with new value (string|boolean)
    onChange?(ctx: Object, value: string | boolean | string[]): void;
    // called on string input element when selection or caret position changes
    onSelectionChange?(ctx: IBobrilCtx, event: ISelectionChangeEvent): void;
}
