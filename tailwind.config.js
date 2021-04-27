module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'menu': '#FFA3A3',
        'blue-color': '#381DDB'
      },
      borderColor: {
        'menu': '#FFA3A3',
        'blue-color': '#381DDB'
      },
      backgroundColor: {
        'blue-color': '#381DDB'
      },
      backgroundImage: {
        'hero-bg': 'url(@/static/image/hero.jpeg)'
      },
      maxWidth: {
        'mobile': '375px',
        'tablet': '768px',
        'desktop': '1920px',
        'd':'1170px'
      },
      fontSize: {
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '18': '1.125rem',
        '22': '1.375rem',
        '24': '1.5rem',
        '28': '1.75rem',
        '34':'2.125rem',
        '42': '2.265rem',
        '60':'3.75rem'

      },
      padding: {
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '18': '1.125rem',
        '22': '1.375rem',
        '24': '1.5rem',
        '28': '1.75rem',
        '42': '2.265rem',
        '50': '3.125rem',
        '60':'3.75rem',
        '70': '4.375rem',
        '207':'12.9375rem'
      },
      margin: {
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '18': '1.125rem',
        '22': '1.375rem',
        '24': '1.5rem',
        '28': '1.75rem',
        '30':'1.875rem',
        '42': '2.265rem',
        '70': '4.375rem',
        '60':'3.75rem'
      },
      inset: {
        '10':'0.625rem',
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '18': '1.125rem',
        '20':'1.25rem',
        '22': '1.375rem',
        '24': '1.5rem',
        '28': '1.75rem',
        '42': '2.265rem',
        '60':'3.75rem'
      },
      zIndex: {
        'a':'-1'
      },
      borderWidth: {
        '1':'1px'
      },
      width: {
        '470': '29.375rem'
      },
      lineHeight: {
        'h2': '73.14px',
        'l-20':'1.25rem',
        'l-24':'1.5rem',
        'l-38':'2.375rem',
        'l-18':'1.125rem',
        'h3':'2.7625rem'
      }
    },


  },
  variants: {
    extend: {
      textColor: ['active'],
    }
  },
  plugins: [],
}
