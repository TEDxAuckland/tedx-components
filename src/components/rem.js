export function rem(pixels, clientWidth) {
    const multiplier = clientWidth > 900 ? (clientWidth > 1200 ? 10 : 9) : 8
    return (pixels / multiplier) + 'rem'
}