module.exports = (() => {
  const style = (() => {
    let rate = 0;

    const style = (width, color, margin, hover) => `
  <style>
    #stars {
      display: flex;
      width: min-content;
    }

    .stars-input {
      flex-direction: row-reverse
    }

    #stars svg {
      fill: ${color}55;
      margin: 0 ${margin}px;
      width: ${width}px;
    }

    #stars .filled .path, #stars .filled ~ svg .path {
      fill: ${color};
    }

    #stars svg.input:hover .path, #stars svg.input:hover ~ svg.input .path {
      fill: ${hover ? color : ''};
    }
  </style>
`;
    const show = (config) => {
      const { number = 5, size = 25, rating = 0, color = '#000000', margin = 2 } = config;
      let str = style(size, color, margin);

      for (let i = 0; i < number; i += 1) {
        str += `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class="${i + 1 <= rating ? 'filled' : ''}"></path></svg>`;
      }

      return str;
    };

    const update = () => {
      const paths = document.getElementsByClassName('input');
      for (let i = 0; i < paths.length; i += 1) {
        if (paths[i].classList.contains('filled')) {
          paths[i].classList.remove('filled');
        }

        if (rate === Number.parseInt(paths[i].dataset.rate, 10)) {
          paths[i].classList.add('filled');
        }
      };
    };

    return ({
      show: show,
      field: (config) => {
        const { number = 5, size = 25, rating = 0, color = '#000000', margin = 2, hover = true } = config;
        let str = style(size, color, margin, hover);

        for (let i = 0; i < number; i += 1) {
          str += `<svg data-rate="${number - i}" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="input ${(number - i) === rating ? 'filled' : ''} svg-inline--fa fa-star fa-w-18 fa-3x"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class="path" data-rate="${number - i}"></path></svg>`;
        }

        return str;
      },
      set: () => {
        [...document.getElementsByClassName('input')].forEach(inp => {
          inp.addEventListener('click', e => {
            rate = Number.parseInt(e.originalTarget.dataset.rate, 10);
            update();
          });
        });
      },
      getRate: () => rate,
    });
  })();
})