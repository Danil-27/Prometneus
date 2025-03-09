/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontSize: {
      xs: '1.5rem', // 24px
      sm: '1.875rem', // 30px
      lg: '6.25rem', // 100px
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1024px',
        xl: '1280px',
        xxl: '1588px',
      },
    },
    screens: {
      xxs: '320px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      xxl: '1588px',
    },
    colors: {
      white: 'var(--white)',
      lightGray: 'var(--lightGray)',
      black: 'var(--black)',
      grey: 'var(--grey)',
      yellow: 'var(--yellow)',
      green: 'var(--green)',
    },
    fontFamily: {
      jetReg: ['JetRegular', 'sans-serif'],
      jetBold: ['JetBold', 'sans-serif'],
      jetExtraB: ['JetExtraBold', 'sans-serif'],
      interReg: ['InterRegular', 'sans-serif'],
      intertLight: ['InterRegular', 'sans-serif'],
      sora: ['Sora', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        base: '50px',
      },
    },
    boxShadow: {
      image: '0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2)',
      buttom: ' 0px 0px 10px 1px rgba(241, 218, 208, 0.9)',
    },
  },
}
