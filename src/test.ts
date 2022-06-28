import axios from 'axios';

const FILE_KEY = 'figd__s6m5ChiLp_Dn2vzoXHtugJxTi4z9SChxCgqmYD4';
const KEY = 'pRvzVhiUERk00rGSJGyMfL';

async function fetchFigmaFile(figmaApiKey: any, figmaId: any) {
  const result = await axios.get('https://api.figma.com/v1/files/' + figmaId, {
    method: 'GET',
    headers: {
      'X-Figma-Token': figmaApiKey,
    },
  });

  const styles = result.data.document.children[0].children.find(
    (el: any) => el.name === 'Frame 7',
  ).children;

  const styleObj = styles.reduce((cur: any, tar: any) => {
    console.log(
      tar.children.find((el: any) => result.data.styles[el.styles.fill])
        .fills[0].color,
    );
    // (el) => el.styles.fill;
    console.log('result.data.styles: ', result.data.styles);
    if (result.data.styles) {
      cur[result.data.styles[tar.id].name] = {
        name: result.data.styles.name,
        color: tar.children.find(
          (el: any) => result.data.styles[el.styles.fill],
        ).fills[0].color,
      };
    }
    return cur;
  }, {});

  console.log(styles, result.data, styleObj);
}

console.log('!!!!', fetchFigmaFile(FILE_KEY, KEY));
