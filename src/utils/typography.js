import Typography from "typography"
// sets the whole typography rules on site
const typography = new Typography({
    baseFontSize: '14px',
    baseLineHeight: 1.45,
    headerFontFamily: ['Montserrat', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    headerWeight: 600,
    bodyWeight: 400,
    boldWeight: 600,
    bodyFontFamily: ['Montserrat', 'sans-serif'],
})

export default typography
export const rhythm = typography.rhythm