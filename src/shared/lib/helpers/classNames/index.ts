export type Modifiers = Record<string, boolean | string>;

function classNames(
  cls: string,
  modifiers: Modifiers,
  additionalCls?: string[]
): string {
  return [
    cls,
    ...Object.entries(modifiers)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
    ...additionalCls,
  ].join(" ");
}

export default classNames;
