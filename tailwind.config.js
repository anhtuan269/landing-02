module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'tablet': '768px',
      // => @media (min-width: 640px) { ... }

      'moblie': '375px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1920px',
      // => @media (min-width: 1280px) { ... }
    },
    fill:{
      current:'currentColor'
    },
    fill: theme =>({
      'white': theme('colors.white')
    }),
    extend: {
      
      gradientColorStops: theme => ({
        ...theme('colors'),
        'menu' : '#FFA3A3',
        'white-start': 'rgba(255, 255, 255, 0)',
        'white-end': 'rgba(255, 255, 255, 0.4)',
      }),
      width:{
        '1/1': '49%',
        '18': '70px',
        '19':'1.875rem'
        
      },
      textColor: {
        'menu': '#FFA3A3',
        'blue-color': '#381DDB'
      },
      borderColor: {
        'menu': '#FFA3A3',
        'blue-color': '#381DDB'
      },
      backgroundColor: {
        'blue-color': '#381DDB',
        'menu': '#FFA3A3',
        'button':'#FC5252'

      },
      divideColor:{
        'menu': '#FFA3A3',
      },
      backgroundImage: {
        'hero-bg': 'url(@/static/image/hero.jpeg)'
      },
      maxWidth: {
        'mobile': '375px',
        '570': '570px',
        '690':'690px',
        'tablet':'768px',
        'desktop': '1920px',
        'd':'1170px',
        '18':'18rem'
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
        '30':'1.875rem',
        '39':'2.475rem',
        '42': '2.265rem',
        '50': '3.125rem',
        '60':'3.75rem',
        '70': '4.375rem',
        '207':'12.9375rem',
        '130':'8.135rem',
        '100':'6.125rem',
        '200':'12.5rem',
        '134':'8.375rem'
      },
      margin: {
        '12': '0.75rem',
        '14': '0.875rem',
        '15':'3.75rem',
        '16': '1rem',
        '18': '1.125rem',
        '22': '1.375rem',
        '24': '1.5rem',
        '28': '1.75rem',
        '30':'1.875rem',
        '42': '2.265rem',
        '60':'3.75rem',
        '70': '4.375rem',
        '90':'5.625rem',
        '100':'6.125rem',
        '134':'8.375rem'
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
        '60':'3.75rem',
        'a':'2%'

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
      margin:['last']
    }
  },
  plugins: [],
}
