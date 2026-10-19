import dimensions from './photo-dimensions.json';

// Intrinsic dimensions of the existing approved files, independent of their names.
export function photoSrcset(name: string, hero = false): string {
  const entries = dimensions as Record<string, {width: number; height: number}>;
  const widths = new Set<number>();
  return (hero ? [640, 1200, 1800] : [640, 1200]).flatMap(size => {
    const file = `${name}-${size}.webp`;
    const image = entries[file];
    if (!image) throw new Error(`Missing photo dimensions: ${file}`);
    if (widths.has(image.width)) return [];
    widths.add(image.width);
    return [`/images/${file} ${image.width}w`];
  }).join(', ');
}

// Match About's existing grid, image percentages and page gutters. No layout rules.
export function aboutPhotoSizes(kind: string): string {
  const fraction = (width: number): [number, number] => {
    const mobile = width <= 700, desktop = width >= 1000;
    switch (kind) {
      case 'aj-portrait': return [mobile ? 1 : desktop ? .93 / 2 : .92 / 2, 0];
      case 'aj-travel': return [mobile ? .9 : (desktop ? .93 : .9) / 2.06 * .9, 0];
      case 'aj-ceremony': return [mobile ? 1 : width <= 800 ? .88 : (desktop ? .93 / 2 : .93 * .9 / 1.9) * .88, 0];
      case 'aj-small-archive': return [mobile ? .74 : width <= 800 ? .5 : desktop ? .93 / 2 * .48 : .93 * .9 / 1.9 * .5, 0];
      case 'aj-practice': return [mobile ? 1 : desktop ? .93 / 2.1 : .93 * .9 / 2, 0];
      case 'aj-study': return mobile ? [.74, 0] : desktop ? [1 / 4.2, width <= 1300 ? 28 : 40] : [.95 * .5 / 2.4, 0];
      case 'aj-now': return [mobile ? 1 : (desktop ? .93 : .91) * 1.05 / 2.05, 0];
      default: throw new Error(`Unknown About photo layout: ${kind}`);
    }
  };
  const bounds = [480, 700, 800, 999, 1050, 1300, 1408];
  const sizes = bounds.map(width => {
    const gutter = width <= 480 ? 20 : width <= 800 ? 24 : width <= 1050 ? 40 : 64;
    const [share, gap] = fraction(width);
    return `(max-width:${width}px) calc(${(share * 100).toFixed(4)}vw - ${((gutter * 2 + gap) * share).toFixed(4)}px)`;
  });
  const [share, gap] = fraction(Infinity);
  return [...sizes, `${((1280 - gap) * share).toFixed(4)}px`].join(', ');
}
