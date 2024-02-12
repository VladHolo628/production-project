export type Modifiers = Record<string, boolean | string>;

function classNames(
    cls: string,
    modifiers?: Modifiers,
    additionalCls?: string[],
): string {
  return [
    cls,
    ...Object.entries(modifiers)
        .filter(([, value]) => Boolean(value))
        .map(([className, ,]) => className),
    ...additionalCls,
  ].join(' ');
}

export default classNames;
